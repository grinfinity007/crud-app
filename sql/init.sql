CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  quantity INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, quantity) VALUES
  ('Laptop', 75000, 5),
  ('Smartphone', 45000, 8),
  ('Wireless Mouse', 999, 25),
  ('Mechanical Keyboard', 2999, 15),
  ('Monitor 24-inch', 12000, 6),
  ('USB-C Charger', 1499, 20),
  ('External Hard Drive 1TB', 4999, 10),
  ('Bluetooth Headphones', 3499, 12),
  ('Webcam HD', 2599, 7),
  ('Laptop Stand', 1999, 18);