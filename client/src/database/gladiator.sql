DROP DATABASE IF EXISTS gladiator_db;

CREATE DATABASE gladiator_db;
USE gladiator_db;

CREATE TABLE leaderboard(
leader_id INT AUTO_INCREMENT NOT NULL,
leader_name VARCHAR(50) NOT NULL,
leader_portrait VARCHAR(255) NOT NULL,
leader_atk INT NOT NULL,
leader_hp INT NOT NULL,
PRIMARY KEY(leader_id)

);

CREATE TABLE items(
    item_id INT AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    item_img VARCHAR(255)NOT NULL, 
    item_atk INT NOT NULL,
    item_hp INT NOT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE portraits(
    port_id INT AUTO_INCREMENT NOT NULL,
    port_imgitem VARCHAR(255),
    port_sex VARCHAR(1),
    PRIMARY KEY (port_id)
);
