DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id integer not null auto_increment,
    burger_name string not null,
    devoured boolean default false
);