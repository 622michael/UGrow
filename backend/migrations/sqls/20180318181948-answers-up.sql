create table answers (
    id serial primary key,
    question_id integer references questions(id),
    user_id integer references users(id),
    content text,
    private boolean,
    picture boolean
);