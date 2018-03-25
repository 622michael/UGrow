create table users (
    id serial primary key,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    name text,
    email text,
    private boolean
);