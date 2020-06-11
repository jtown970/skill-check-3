
select posts.content, users.user_name, users.profile_img
from posts
inner join users on posts.user_id = users.user_id;


select * from posts;