SELECT COUNT(*) AS sick_patients_count
FROM patient
WHERE disease IS NOT NULL;
