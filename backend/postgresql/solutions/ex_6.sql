SELECT e.name AS ethnicity_name, COUNT(p.id) AS patient_count
FROM patient p
JOIN ethnicity e ON p.ethnicity = e.id
WHERE p.disease = 'lettuce disease'
GROUP BY e.name
ORDER BY patient_count DESC;
