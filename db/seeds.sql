INSERT INTO department (name)
VALUES  ("Potions"),
        ("Transfiguration"),
        ("Herbology"),
        ("Astronomy"),
        ("Defence against the dark arts"),
        ("Charms");

INSERT INTO role (title, salary, department_id)
VALUES  ("Potions Teacher", 150000, 77),
        ("Transfiguration Teacher", 150000, 88),
        ("Herbology Teacher", 150000, 99),
        ("Astronomy Teacher", 150000, 66),
        ("Defence Teacher", 250000, 33),
        ("Charms Teacher", 150000, 22),
        ("Principal", 500000, 11);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Argus", "Filch", 101, 100),
        ("Filius", "Flitwick", 102, 100),
        ("Gilderoy", "Lockhart", 103, 100),
        ("Poppy", "Pomfrey", 104, 100),
        ("Quirinus", "Quirrell", 105, 100),
        ("Horace", "Slughorn", 106, 100),
        ("Pomona", "Sprout", 107, 100),
        ("Sybil", "Trelawney", 108, 100),
        ("Albus", "Dumbledore", 100, null);