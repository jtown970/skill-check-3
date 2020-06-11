-- insert into make_new_post(user_id, profile_img, post_id, content)
-- values ($1, $2, $3, $4);

-- select * from make_new_post
-- -- where user_id = $2;

insert into posts (user_id, content)
values ($1, $2)

