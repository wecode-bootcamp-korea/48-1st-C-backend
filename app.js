require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") 

const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/ping", (req, res) => {
  res.status(200).json({"message": "pong"})
});

app.post("/users/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await AppDataSource.query(
      `
      INSERT INTO users (
        email,
        password
      ) VALUES (
        ?,
        ?
      )
      `,
    [email, hashedPassword]
  );
  res.status(201).json({"message": "Successful Created Users"})
    // res.status(201).end();
  
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const [user] = await AppDataSource.query(
      `
        SELECT *
        FROM users u
        WHERE u.email = ?
      `,
      [email]
    );

    if (!user) {
      const err = new Error('specified user does not exist');
      err.statusCode = 404;
      throw err;
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    
    if (!checkPassword) {
      const err = new Error('invalid password');
      err.statusCode = 401;
      throw err;
    }

    const accessToken = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET);

    res.status(200).json({ accessToken: accessToken });
    //res.status(200).json({ message: "Success",accessToken: accessToken });
    
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
});

const startServer = async () => {
  const PORT = process.env.PORT;

  await AppDataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
