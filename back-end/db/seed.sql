\c capstone;

INSERT INTO users (first_name, last_name, email, company, city, country, user_name, user_pw, user_type, linkedin)
VALUES
('Bob', 'Milton', 'FamilyFlourish@gmail.com', 'Family Flourish Fund', 'Omaha', 'United States', 'Bob_Family_flourish', 'password', 'nonprofit', 'www.linkedin.com/in/Bob_Milton');

INSERT INTO projects (technologies, num_developers, time_to_complete, mentor_id, tasks, status)
VALUES 
('JavaScript, React, Express', 3, '6 months', 1, 'build basic express back end, create react app, nav bar, sign up form, build routes', 'pending');

INSERT INTO mentees_projects (mentee_id, project_id, mentee_status)
VALUES
(2, 1, 'pending'), (1, 2, 'pending'), (2, 3, 'approved'), (4, 1, 'denied');