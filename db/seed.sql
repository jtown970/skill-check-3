CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100),
    profile_img text,
    password TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    content VARCHAR(3000),
    created_at DATE
);

-- made a new table for new posts joining users and posts tables 
select users.user_id, users.profile_img, posts.post_id, posts.content
into make_new_post
from users
join posts on users.user_id = posts.post_id

-- select * from make_new_post

insert into posts(content)
values('hey this is my first post')