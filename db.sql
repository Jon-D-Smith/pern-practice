                                                    -- Notes Section -- 
-- List dbs 
\l
-- Create a db 
CREATE DATABASE dbname
-- List all tables 
\d 
-- List db columns
\d [table_name]


-- Create table in database
CREATE TABLE products(
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN  
);

-- Connect to a database
\c [db name]

-- Add COLUMNs

ALTER TABLE products ADD COLUMN on_sale BOOLEAN;
ALTER TABLE products ADD COLUMN featured BOOLEAN;

--Drop columns

ALTER TABLE products DROP COLUMN featured;

-- Delete Database
DROP DATABASE [db name]


 -- CREATING THE YELP DB

 CREATE TABLE restaurants (
     id BIGSERIAL NOT NULL PRIMARY KEY,
     name VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
 );

 INSERT INTO restaurants(id, name, location, price_range) VALUES (123, 'McDonalds', 'New York', 3);


-- Creating reviews table with a foreign key to the restaurants
 CREATE TABLE reviews (
     id BIGSERIAL NOT NULL PRIMARY KEY,
     restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
     name VARCHAR(50) NOT NULL,
     review TEXT NOT NULL,
     rating INT NOT NULL check(rating >= 1 AND rating <= 5)
 );