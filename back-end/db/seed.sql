\c capstone;

INSERT INTO users (first_name, last_name, email, company, city, country, user_name, user_pw, user_type, linkedin)
VALUES
('Bob', 'Milton', 'FamilyFlourish@gmail.com', 'Family Flourish Fund', 'Omaha', 'United States', 'Bob_Family_flourish', 'password', 'nonprofit', 'www.linkedin.com/in/Bob_Milton');

INSERT INTO proposals (title, description, impact, status, non_profit_id, mentor_id)
VALUES('Family Friendly Website', 'I am highly interested in creating a Website that will cater to all of the needs for low-income families. My non-profit focuses on providing resources like information on programs for qualifying low-income families as well as programs we have created ourselves like our annual food drive. I would like an all-in-one inclusive website that the families can use to learn about these programs and other resources.', 'I believe the financial impact this will provide is somewhere between $5,000 & $10,000', 'pending', 1, 1);

INSERT INTO projects (technologies, num_developers, date_to_complete, trello, project_status)
VALUES 
('JavaScript, React, Express', 3, '2023-07-10', 'https://trello.com/b/U9tR7zXI/capstone', 'pending');

INSERT INTO users_projects (project_id, user_id, user_type)
VALUES
(2, 1, 'mentor'), (2, 3, 'non_profit'), (4, 1, 'mentor');

INSERT INTO users_projects (project_id, user_id, user_type, mentee_status)
VALUES
(1, 2, 'mentee', 'pending');