\c capstone;

INSERT INTO users (first_name, last_name, email, company, city, country, user_name, user_pw, user_type, linkedin)
VALUES
('Bob', 'Milton', 'FamilyFlourish@gmail.com', 'Family Flourish Fund', 'Omaha', 'United States', 'Bob_Family_flourish', 'password', 'nonprofit', 'www.linkedin.com/in/Bob_Milton'), 
('John', 'Jackson', 'HarlemRoots@gmail.com', 'Harlem Roots', 'Harlem', 'United States', 'harlemroots', 'password', 'nonprofit', 'www.linkedin.com/in/harlemroots'),
('Martha', 'Williams', 'HandsforAfrica@gmail.com', 'Hands for Africa', 'Cleveland', 'United States', 'handsforafrica', 'password', 'nonprofit', 'www.linkedin.com/in/HandsForAfrica'),
('Maria', 'Alvarez', 'VenezuelanFriends@gmail.com', 'Venezuelan Friends', 'Queens', 'United States', 'venezuelanfriends', 'password', 'nonprofit', 'www.linkedin.com/in/VenezuelanFriends'),
('Constance', 'Kane', 'constancekane@gmail.com', 'Columbia', 'Louisville', 'United States', 'constancekane', 'password', 'developer', 'www.linkedin.com/in/constancekane'),
('Leo', 'Snyder', 'leosnyder@gmail.com', 'Google', 'Los Angeles', 'United States', 'leosnyder2', 'password', 'Non', 'www.linkedin.com/in/leosnyder'),
('Jordan', 'Harris', 'jordan.harris@gmail.com', 'Microsoft', 'Miami', 'United States', 'jordan.harris', 'password', 'Mentee', 'www.linkedin.com/in/jordanharris'),
('Shelly', 'Berry', 'shellyberry@gmail.com', 'Flatiron School', 'Newark', 'United States', 'shellyberry123', 'password', 'Mentee', 'www.linkedin.com/in/shellyberry'),
('Megan', 'Lombardo', 'meglombardo@gmail.com', 'General Assembly', 'NYC', 'United States', 'meglombardo', 'password', 'Mentee', 'www.linkedin.com/in/meganlombardo'),
('Wendy', 'Ball', 'wendyb@gmail.com', 'Generation USA', 'Chicago', 'United States', 'wendy.ball', 'password', 'Mentee', 'www.linkedin.com/in/wendyball'),
('Janina', 'Brown', 'janinabrown@gmail.com', 'Pursuit', 'Brooklyn', 'United States', 'janinabrown', 'password', 'Mentee', 'www.linkedin.com/in/janinabrown'),
('Edward', 'Herdon', 'edward.herdon@gmail.com', 'self taught', 'Santa Rosa', 'United States', 'edward.h', 'password', 'Mentor', 'www.linkedin.com/in/edwardherdon'),
('Stephanie', 'Foster', 'stephaniefoster@gmail.com', 'Pursuit', 'Brooklyn', 'United States', 'stephaniefoster', 'password', 'Mentor', 'www.linkedin.com/in/stephaniefoster');


INSERT INTO proposals (title, description, impact, status, non_profit_id, mentor_id)
VALUES('Family Friendly Website', 'I am highly interested in creating a Website that will cater to all of the needs for low-income families. My non-profit focuses on providing resources like information on programs for qualifying low-income families as well as programs we have created ourselves like our annual food drive. I would like an all-in-one inclusive website that the families can use to learn about these programs and other resources.', 'I believe the financial impact this will provide is somewhere between $5,000 & $10,000', 'pending', 1, null),
('Harlem Roots', 'Creation of a web platform where users who wish to take advantage of the benefits of the organization and on the other hand donors who support their cause can register.', 'Helping to address systemic issues of poverty, inequality, and discrimination in Harlem, and working towards a more just and equitable society.', 'pending', 2, null),
('Hands for Africa', 'Creation of a web platform where users who wish to take advantage of the benefits of the organization and on the other hand donors who support their cause can register.', 'Helping to address food insecurity and malnutrition in Africa by providing resources and support to farmers and families in need.', 'pending', 3, 4),
('Venezuelans Friends', 'Creation of a web platform where users who wish to take advantage of the benefits of the organization and on the other hand donors who support their cause can register.', 'Advocating for the rights and needs of Venezuelan immigrants and refugees in NYC, raising awareness about their experiences and challenges and working to improve policies and programs that affect their lives.', 'pending', 4, null);

INSERT INTO projects (technologies, num_developers, date_to_complete, trello, project_status)
VALUES 
('JavaScript, React, Express', 3, '2023-07-10', 'https://trello.com/b/U9tR7zXI/capstone', 'pending'), 
('JavaScript framework (for example, React, Angular, Vue)
HTML, CSS, JavaScript
Node.js
Database (for example, MySQL, PostgreSQL, MongoDB)
Payment service (for example, Stripe)
Web hosting service (for example, AWS, Google Cloud, Heroku)', 3, '2023-10-01', 'https://trello.com/b/U9tR7zXI/capstone', 'pending'),
('Python web framework (for example, Django, Flask)
HTML, CSS
JavaScript (for frontend functionality)
Database (for example, PostgreSQL, MySQL, SQLite)
Payment service (for example, Stripe API)
Web hosting service (for example, AWS, Google Cloud, Heroku).', 3, '2023-11-01', 'https://trello.com/b/U9tR7zXI/capstone', 'pending'),
('Web development framework for C++ (for example, Wt, CPPCMS)
HTML, CSS
JavaScript (for frontend functionality)
Database (for example, PostgreSQL, MySQL, SQLite)
Payment service (for example, Stripe API)
Web hosting service (for example, AWS, Google Cloud, Heroku)', 4, '2024-09-30', 'https://trello.com/b/U9tR7zXI/capstone', 'pending');

INSERT INTO users_projects (project_id, user_id, user_type)
VALUES
(2, 5, 'mentor'), (2, 2, 'nonprofit'), (3, 6, 'mentor'), (3, 3, 'nonprofit'), (4, 7, 'mentor'), (4, 4, 'nonprofit');

INSERT INTO users_projects (project_id, user_id, user_type, mentee_status)
VALUES
(2, 8, 'mentee', 'pending'),
(2, 9, 'mentee', 'pending'),
(3, 10, 'mentee', 'pending'),
(3, 11, 'mentee', 'pending'),
(3, 12, 'mentee', 'pending'),
(4, 13, 'mentee', 'pending');