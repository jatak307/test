<?php
// 1. Вывести список сотрудников, получающих максимальную заработную плату в своем отделе
$sql_1 = 'SELECT name, MAX(salary) FROM employee; GROUP BY department;';

// 2. Вывести список ID отделов, количество сотрудников в которых не превышает 3 человек
$sql_2 = 'SELECT department FROM employee; GROUP BY department; HAVING COUNT(*) < 4;';

// 3. Найти список ID отделов с максимальной суммарной зарплатой сотрудников
$sql_3 = 'SELECT department, SUM(salary) FROM employee; GROUP BY department;';

// 4. Добавить в БД новый отдел
$sql_4 = 'INSERT INTO department (name); VALUES ("newDepartment")';