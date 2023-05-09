DROP DATABASE IF EXISTS capstone;
CREATE DATABASE capstone;

\c capstone;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL, 
    email VARCHAR(255),
    company TEXT NOT NULL, 
    city VARCHAR(85),
    country VARCHAR(85),
    user_name VARCHAR(25) NOT NULL,
    user_pw VARCHAR(25) NOT NULL,
    user_type VARCHAR(25) NOT NULL,
    linkedin TEXT
);

