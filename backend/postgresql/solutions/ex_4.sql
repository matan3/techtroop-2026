SELECT p.id, d.survival_rate
FROM patient p
JOIN disease d ON p.disease = d.name
ORDER BY p.id ASC;
