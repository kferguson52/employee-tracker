INSERT INTO department (id, name)
VALUES 
  (1, "Math"),
  (2,"Science"),
  (3,"Art"),
  (4,"Theatre"),
  (5, "Athletics");

INSERT INTO role (id, department_id, title, salary) 
VALUES
  (1, 1, "Manager", 900),
  (2, 2, "Teacher", 50000);

INSERT INTO employee (id, first_name, last_name, role_id, manger_id) VALUES
  (1, "Kyle", "Ferguson", 1, 12345);