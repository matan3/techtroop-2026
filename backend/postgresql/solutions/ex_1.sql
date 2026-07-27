CREATE TABLE ethnicity (
    id INTEGER PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE gender (
    id INTEGER PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE symptoms (
    family INTEGER PRIMARY KEY,
    fever BOOLEAN,
    blue_whelts BOOLEAN,
    low_bp BOOLEAN
);

CREATE TABLE disease (
    name VARCHAR(20) PRIMARY KEY,
    survival_rate FLOAT
);

CREATE TABLE patient (
    id INTEGER PRIMARY KEY,
    ethnicity INTEGER REFERENCES ethnicity(id),
    gender INTEGER REFERENCES gender(id),
    symptoms_family INTEGER REFERENCES symptoms(family),
    disease VARCHAR(20) REFERENCES disease(name)
);
