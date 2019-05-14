create database tasker_db;

use tasker_db;

create table tasks
(
    id int(64)
    auto_increment,
    task-name VARCHAR
    (120),
    completed booleannot null default 0,
    PRIMARY KEY
    (id)   
);