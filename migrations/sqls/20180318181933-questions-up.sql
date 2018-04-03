create type br as enum ('branch', 'root');
create table questions (
    id serial primary key,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "qText" text,
    "qType" br,
    consider text
);

insert into questions (id, "qText", "qType", consider)
values (1,'My sex assigned at birth was...?', 'root', '1,2,3'),
	(2, 'My ethnicity is...?', 'root', '4,5,6'),
	(3, 'My gender is...?', 'root', '7,8,9'),
	(4, 'My pronouns are...?', 'root', '10,11,12');