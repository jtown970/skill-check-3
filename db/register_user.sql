insert into users (user_name, password)
values ( $1, $2 );

select * from users
where user_name = $1;