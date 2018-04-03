create table users (
    id serial primary key,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    username text,
    email text,
    private boolean
);

insert into users (id, username, email)
values (1, 'brah', 'abc@123.com');