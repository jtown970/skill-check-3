insert into posts(content, users_id)
values ($1, $2) returning *;

select * from posts
where users_id = $2;

