-- migrate:up
CREATE TABLE threads (
  id integer PRIMARY KEY AUTO_INCREMENT,
  user_id integer NOT NULL,
  content varchar(3000) NOT NULL,
  created_at timestamp DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT threads_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE threads;