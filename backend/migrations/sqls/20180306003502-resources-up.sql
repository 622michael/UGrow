create type locale as enum ('LU', 'LV', 'US');
create table resources (
    id serial primary key,
    name text,
    url text,
    scope text
);

insert into resources (name, url) values
('The Pride Center', 'https://studentaffairs.lehigh.edu/content/pride-center-0'),
('The Center for Gender Equity', 'https://studentaffairs.lehigh.edu/content/center-gender-equity'),
('Office of Multicultural Affairs', 'https://studentaffairs.lehigh.edu/content/multicultural-affairs-oma'),
('Counseling and Psychological Services', 'https://studentaffairs.lehigh.edu/content/counseling-psychological-services-ucps'),
('Chaplain’s Office', 'https://chaplain.lehigh.edu/'),
('Lehigh University Police Department', 'https://police.lehigh.edu/'),
('Title IX', 'https://titleix.lehigh.edu/reporting-options'),
('Office of Gender Violence', 'https://studentaffairs.lehigh.edu/content/gender-violence-education-support'),
('The Health Center', 'https://studentaffairs.lehigh.edu/content/health-wellness-center'),
('"Advocates', 'https://studentaffairs.lehigh.edu/content/advocates-0');