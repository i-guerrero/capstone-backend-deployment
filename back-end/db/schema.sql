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
    time_to_complete TEXT, 
    mentor_id INTEGER REFERENCES users (id),
    tasks TEXT,
    status TEXT DEFAULT 'pending'
);

DROP TABLE IF EXISTS mentees_projects;

CREATE TABLE mentees_projects (
    id SERIAL PRIMARY KEY,
    mentee_id INTEGER,
    project_id INTEGER,
    mentee_status TEXT DEFAULT 'pending'
);
