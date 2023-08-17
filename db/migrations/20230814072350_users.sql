-- migrate:up
CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  email varchar(100) UNIQUE NOT NULL,
  password char(60) NOT NULL,
  nickname varchar(50),
  profile_image varchar(300),
  phone_number varchar(15) UNIQUE,
  birthday char(8),
  created_at timestamp DEFAULT (current_timestamp)
);

-- migrate:down
DROP TABLE users;
