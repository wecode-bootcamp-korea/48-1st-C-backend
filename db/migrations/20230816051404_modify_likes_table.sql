-- migrate:up
ALTER TABLE likes ADD UNIQUE unique_likes (user_id, thread_id);

-- migrate:down