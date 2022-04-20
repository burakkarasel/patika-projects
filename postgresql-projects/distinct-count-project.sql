-- first query

SELECT DISTINCT replacement_cost
FROM film;

-- second query

SELECT COUNT(DISTINCT replacement_cost)
FROM film;

-- third query

SELECT COUNT(title)
FROM film
WHERE title LIKE 'T%' AND rating = 'G';

-- fourth query

SELECT COUNT(country)
FROM country
WHERE country LIKE '_____';

-- fifth query

SELECT COUNT(city)
FROM city
WHERE city ILIKE '%r';