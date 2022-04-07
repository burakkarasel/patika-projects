-- first task
SELECT title, description
FROM film;
-- second task
SELECT *
FROM film
WHERE length > 60 AND length < 75;
-- third task
SELECT *
FROM film
WHERE rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);
-- fourth task
SELECT last_name
FROM customer
WHERE first_name ='Mary'
-- fifth task
SELECT *
FROM film
WHERE length < 50 AND (rental_rate != 2.99 AND rental_rate != 4.99);