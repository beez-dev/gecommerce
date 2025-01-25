CREATE TABLE IF NOT EXISTS category (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    name VARCHAR(255)
    );

CREATE TABLE IF NOT EXISTS product (
   id SERIAL PRIMARY KEY,
   name VARCHAR(1000),
   description VARCHAR(255),
   available_quantity DOUBLE PRECISION NOT NULL,
   price NUMERIC(38,2),
   category_id INTEGER REFERENCES category(id) ON DELETE CASCADE
  );
