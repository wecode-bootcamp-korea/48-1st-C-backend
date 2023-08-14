-- migrate:up
CREATE TABLE likes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  thread_id integer NOT NULL,
  user_id integer NOT NULL,
  created_at timestamp DEFAULT (current_timestamp),
  CONSTRAINT likes_thread_id_fkey FOREIGN KEY (thread_id) REFERENCES threads(id),
  CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
);

-- migrate:down
DROP TABLE likes;

