-- create table users_posts(
--     users_posts_id serial primary key,
--     user_id int references users(user_id),
--     post_id int references posts(post_id)
--     user_name text references users(user_name)
--     user_profile_img references users(profile_img)
--     post_content text references posts(content)
-- );

create table users_posts(
    users_posts_id serial primary key, 
    users_id int references users(user_id),
    post_id int references posts(post_id)
); 

