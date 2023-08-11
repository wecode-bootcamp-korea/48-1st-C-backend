require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

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

const startServer = async () => {
  const PORT = process.env.PORT;

  await AppDataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
