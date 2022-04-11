-- first query

SELECT rating, COUNT(*)
FROM film
GROUP BY rating;

-- second query

SELECT replacement_cost, COUNT(*)
FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;

-- third query

SELECT store_id, COUNT(*)
FROM customer
GROUP BY store_id;

-- fourth query

SELECT country_id, COUNT(*)
FROM city
GROUP BY country_id
ORDER BY COUNT(*) DESC
LIMIT 1;