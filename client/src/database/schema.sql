DROP DATABASE IF EXISTS gladiator_db;

CREATE DATABASE gladiator_db;
USE gladiator_db;

CREATE TABLE fighter(
fighter_id INT AUTO_INCREMENT,
figher_portrait VARCHAR(255), 
fighter_name VARCHAR(50),
fighter_hp_max INT DEFAULT 10,
PRIMARY KEY (fighter_id)
);

CREATE TABLE leaderboard(
leader_id INT AUTO_INCREMENT,
leader_name VARCHAR(50),
leader_portrait VARCHAR(255),
leader_rank INT,
PRIMARY KEY(leader_id)
);