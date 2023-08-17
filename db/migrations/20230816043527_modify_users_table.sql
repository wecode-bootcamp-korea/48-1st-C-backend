-- migrate:up
ALTER TABLE users 
MODIFY password char(100),
MODIFY birthday DATETIME;

ALTER TABLE wereads.users
DROP INDEX phone_number ;

-- migrate:down

