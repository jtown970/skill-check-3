SELECT * FROM posts
WHERE post_id = $1;

select posts.content, users.user_name, users.profile_img
from posts
inner join users on posts.users_id = user_id;