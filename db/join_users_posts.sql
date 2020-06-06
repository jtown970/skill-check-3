-- note this joins the two tables together
select * from posts
inner join users on posts.users_id = user_id


-- this get the info for post conent username and img 
select post.post_id, users.user_id posts.content, users.user_name, users.profile_img
from posts
inner join users on posts.users_id = user_id

-- select posts.post_id, users.user_id, posts.content, users.user_name, users.profile_img
-- from posts
-- inner join users on posts.users_id = user_id

insert into posts(post_id, users_id, content)
values( $1, $2, $3, $4)