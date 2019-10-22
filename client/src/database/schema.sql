DROP DATABASE IF EXISTS gladiator_db;

CREATE DATABASE gladiator_db;
USE gladiator_db;

CREATE TABLE character(
character_id INT NOT NULL AUTO_INCREMENT,
character_portrait VARCHAR(255) NOT NULL, 
character_name VARCHAR(50) NOT NULL,
character_hp_max INT DEFAULT 10 NOT NULL,
PRIMARY KEY (character_id)
);

CREATE TABLE leaderboard(
leader_id INT AUTO_INCREMENT NOT NULL,
leader_name VARCHAR(50) NOT NULL,
leader_portrait VARCHAR(255) NOT NULL,
leader_rank INT NOT NULL,
PRIMARY KEY(leader_id)
);