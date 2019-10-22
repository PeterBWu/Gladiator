DROP DATABASE IF EXISTS gladiator_db;

CREATE DATABASE gladiator_db;
USE gladiator_db;

CREATE TABLE fighter(
fighter_id INT NOT NULL AUTO_INCREMENT,
figher_portrait VARCHAR(255) NOT NULL, 
fighter_name VARCHAR(50) NOT NULL,
fighter_hp_max INT DEFAULT 10 NOT NULL,
PRIMARY KEY (fighter_id)
);

CREATE TABLE leaderboard(
leader_id INT AUTO_INCREMENT NOT NULL,
leader_name VARCHAR(50) NOT NULL,
leader_portrait VARCHAR(255) NOT NULL,
leader_rank INT NOT NULL,
PRIMARY KEY(leader_id)
);