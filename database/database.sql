CREATE DATABASE firstapi;

CREATE table users(
    id serial primary key,
    name varchar(40),
    email text
);

insert into users (name, email) values
    ('jose', 'jose@gmail.com'),
    ('maria', 'maria@npm.com');

select * from users;
