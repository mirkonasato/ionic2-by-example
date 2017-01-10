CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  username TEXT,
  password TEXT        
);

CREATE TABLE IF NOT EXISTS expenses (
  id TEXT PRIMARY KEY,
  user INTEGER,
  date TEXT,
  amount REAL,
  category TEXT,
  description TEXT,
  FOREIGN KEY (user) REFERENCES users (id)
);

INSERT INTO users (id, username, password) VALUES
  (0, 'anonymous', ''),
  (NULL, 'alice', 'alice123'),
  (NULL, 'bob', 'bob123');

INSERT INTO expenses (id, user, date, amount, category, description) VALUES
  ('4b8fe720-916a-42ed-a6d7-0616cc72c52c', 0, '2017-01-01', 9.99, "Food", "Sample expense 1"),
  ('e214b87f-9aae-49ba-861f-c1431a905ead', 0, '2017-01-02', 19.99, "Travel", "Sample expense 2"),
  ('8d9f681b-1df8-4e62-adc9-f6a7c036febd', 0, '2017-01-03', 29.99, "Other", "Sample expense 3");
