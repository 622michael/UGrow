-- ALTER DATABASE "ugrow" collate Latin1_General_CS_AS
create table answers (
    id serial primary key,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "questionId" integer references questions(id),
    "userId" integer references users(id),
    "aText" text,
    private boolean,
    picture boolean
);