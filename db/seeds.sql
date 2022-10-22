INSERT INTO department (name)
VALUES  ("Potions"),
        ("Transfiguration"),
        ("Herbology"),
        ("Astronomy"),
        ("Defence against the dark arts"),
        ("Charms");

INSERT INTO role (title, salary, department_id)
VALUES  ("Potions Teacher", 150000, 1),
        ("Transfiguration Teacher", 150000, 2),
        ("Herbology Teacher", 150000, 3),
        ("Astronomy Teacher", 150000, 4),
        ("Defence Teacher", 250000, 5),
        ("Charms Teacher", 150000, 6),
        ("Principal", 500000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Argus", "Filch", 1, NULL),
        ("Filius", "Flitwick", 2, NULL),
        ("Gilderoy", "Lockhart", 3, NULL),
        ("Poppy", "Pomfrey", 3, NULL),
        ("Quirinus", "Quirrell", 4, NULL),
        ("Horace", "Slughorn", 5, NULL),
        ("Pomona", "Sprout", 5, NULL),
        ("Sybil", "Trelawney", 6, NULL),
        ("Albus", "Dumbledore", 7, NULL);

