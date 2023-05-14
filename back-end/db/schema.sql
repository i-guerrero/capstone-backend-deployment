DROP DATABASE IF EXISTS capstone;
CREATE DATABASE capstone;

\c capstone;

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

DROP TABLE IF EXISTS proposals;

CREATE TABLE proposals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT NOT NULL,
    impact TEXT,
    status VARCHAR(255),
    non_profit_id INTEGER NOT NULL,
    mentor_id INTEGER
);

DROP TABLE IF EXISTS proposals;

CREATE TABLE proposals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT NOT NULL,
    impact TEXT,
    status VARCHAR(255),
    non_profit_id INTEGER NOT NULL,
    mentor_id INTEGER
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY, 
    technologies TEXT,
    num_developers INTEGER,
    date_to_complete DATE, 
    trello TEXT,
    project_status TEXT DEFAULT 'pending'
);

DROP TABLE IF EXISTS users_projects;

CREATE TABLE users_projects (
    id SERIAL PRIMARY KEY,
    project_id INTEGER,
    user_id INTEGER,
    user_type TEXT,
    mentee_status TEXT
);
