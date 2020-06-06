CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100),
    profile_img text,
    password TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(user_id),
    content VARCHAR(250),
    created_at DATE
);

insert into posts(content)
values('hey this is my first post')