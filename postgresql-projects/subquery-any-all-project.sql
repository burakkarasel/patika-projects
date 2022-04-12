-- first query

SELECT COUNT(*)
FROM film
WHERE length > (
	SELECT AVG(length)
	FROM film
);

-- secondary query

SELECT COUNT(*)
FROM film
WHERE rental_rate = (
	SELECT MAX(rental_rate)
	FROM film
);

-- third query

SELECT title
FROM film
WHERE film_id = ANY(
	SELECT film_id
	FROM film
	WHERE rental_rate = (SELECT MIN(rental_rate) FROM film) AND replacement_cost = (SELECT MIN(replacement_cost) FROM film)
)

-- fourth query

SELECT first_name, last_name
FROM customer
WHERE customer_id = ANY(
	SELECT customer_id
	FROM payment
	WHERE amount =	(
		SELECT MAX(amount)
		FROM payment
	)
);