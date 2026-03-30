
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password)
VALUES (
  'Arun',
  'arun@gmail.com',
  '$2b$10$7QJ8y7xW1Qw2Y6xK8QzK0e9kR8YcZ8jW8z7Fq1Yj9k8XyZ1a2b3c4'
)
ON CONFLICT (email) DO NOTHING;  