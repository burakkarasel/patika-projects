-- first query

SELECT AVG(rental_rate)
FROM film;

-- second query

SELECT COUNT(title)
FROM film
WHERE title LIKE 'C%';

-- third query

SELECT MAX(length)
FROM film
WHERE rental_rate = 0.99;

-- fourth query

SELECT COUNT(DISTINCT replacement_cost)
FROM film
WHERE length > 150;