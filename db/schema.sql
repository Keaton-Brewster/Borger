DROP DATABASE IF EXISTS borger_db;

CREATE DATABASE borger_db;

USE borger_db;

CREATE TABLE burgers (
	id INT auto_increment,
    name VARCHAR(45) NOT NULL,
    consumed BOOLEAN,
    PRIMARY KEY(id)
);