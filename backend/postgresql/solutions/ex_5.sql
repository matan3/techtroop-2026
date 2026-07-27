SELECT symptoms_family, COUNT(*) AS patient_count
FROM patient
WHERE disease = 'cabbage disease'
GROUP BY symptoms_family
ORDER BY symptoms_family ASC;
