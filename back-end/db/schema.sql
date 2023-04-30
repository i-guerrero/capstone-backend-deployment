DROP DATABASE IF EXISTS capstone;
CREATE DATABASE capstone;

\c capstone;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);
