create type locale as enum ('LU', 'LV', 'US');
create table resources (
    id serial primary key,
    name text,
    url text,
    scope text
);

insert into resources (name, url, scope) values
('The Pride Center', 'https://studentaffairs.lehigh.edu/content/pride-center-0', 'LU'),
('The Center for Gender Equity', 'https://studentaffairs.lehigh.edu/content/center-gender-equity', 'LU'),
('Office of Multicultural Affairs', 'https://studentaffairs.lehigh.edu/content/multicultural-affairs-oma', 'LU'),
('Counseling and Psychological Services', 'https://studentaffairs.lehigh.edu/content/counseling-psychological-services-ucps', 'LU'),
('Chaplain’s Office', 'https://chaplain.lehigh.edu/', 'LU'),
('Lehigh University Police Department', 'https://police.lehigh.edu/', 'LU'),
('Title IX', 'https://titleix.lehigh.edu/reporting-options', 'LU'),
('Office of Gender Violence', 'https://studentaffairs.lehigh.edu/content/gender-violence-education-support', 'LU'),
('The Health Center', 'https://studentaffairs.lehigh.edu/content/health-wellness-center', 'LU'),
('"Advocates', 'https://studentaffairs.lehigh.edu/content/advocates-0', 'LU');