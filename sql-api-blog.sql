CREATE SCHEMA IF NOT EXISTS blog_api;
USE blog_api;

CREATE TABLE IF NOT EXISTS authors (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  creation_date DATE NOT NULL,
  category VARCHAR(255) NOT NULL,
  authorId INT,
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

INSERT INTO authors (name, email, image) VALUES
('John Doe', 'john.doe@example.com', 'john_doe.jpg'),
('Jane Smith', 'jane.smith@example.com', 'jane_smith.jpg'),
('Alice Johnson', 'alice.johnson@example.com', 'alice_johnson.jpg');

INSERT INTO posts (title, description, creation_date, category, authorId) VALUES
('First Post', 'This is the description of the first post', '2023-01-01', 'Category1', 1),
('Second Post', 'This is the description of the second post', '2023-02-01', 'Category2', 2),
('Third Post', 'This is the description of the third post', '2023-03-01', 'Category1', 1),
('Fourth Post', 'This is the description of the fourth post', '2023-04-01', 'Category3', 3);