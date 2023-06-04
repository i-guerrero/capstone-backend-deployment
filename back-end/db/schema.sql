DROP DATABASE IF EXISTS capstone_6gdr;
CREATE DATABASE capstone_6gdr;

\c capstone_6gdr

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT, 
    email VARCHAR(255),
    company TEXT, 
    city VARCHAR(85),
    country VARCHAR(85),
    user_name VARCHAR(25),
    firebase_uid Text,
    user_type VARCHAR(25),
    linkedin TEXT
);

DROP TABLE IF EXISTS proposals;

CREATE TABLE proposals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    impact TEXT,
    status VARCHAR(255),
    non_profit_id INTEGER,
    mentor_id INTEGER
);

DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY, 
    technologies TEXT,
    num_developers INTEGER,
    date_to_complete DATE, 
    trello TEXT,
    project_status TEXT DEFAULT 'pending',
    proposal_id INTEGER
);

DROP TABLE IF EXISTS users_projects;

CREATE TABLE users_projects (
    id SERIAL PRIMARY KEY,
    project_id INTEGER,
    user_id INTEGER,
    user_type TEXT,
    mentee_status TEXT
);
