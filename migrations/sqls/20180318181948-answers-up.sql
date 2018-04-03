-- ALTER DATABASE "ugrow" collate Latin1_General_CS_AS
create table answers (
    id serial primary key,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    question_id integer references questions(id),
    user_id integer references users(id),
    content text,
    private boolean,
    picture boolean
);