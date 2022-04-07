-- first task

SELECT country
FROM country
WHERE country ILIKE 'A%a';

-- second task

SELECT country
FROM country
WHERE country LIKE '_____%n';

-- third task

SELECT title
FROM film
WHERE title LIKE '%t%t%t%t%';

-- fourth task

SELECT *
FROM film
WHERE title ILIKE 'C%' AND length > 90 AND rental_rate = 2.99;