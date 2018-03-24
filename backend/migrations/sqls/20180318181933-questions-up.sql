create type br as enum ('branch', 'root');
create table questions (
    id serial primary key,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    content text,
    branch_or_root br
);