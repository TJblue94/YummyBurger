### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	Devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


-- burger was name
--Devoured was sleepy