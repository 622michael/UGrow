create type br as enum ('branch', 'root');
create table questions (
    id serial primary key,
    content text,
    branch_or_root br
);