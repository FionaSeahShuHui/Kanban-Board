CREATE TABLE `kanbanBoard`.`employees` (
  `staff_id` INT(10) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `department` ENUM("HR", "Intern", "Marketing", "Operations Management", "Production", "Research") NOT NULL,
  `gender` ENUM("M", "F") NOT NULL,
  `birth_date` DATE NOT NULL,
  `hire_date` DATE NOT NULL,
  `mobile_number` INT(8) NOT NULL,
  `adminstrative_rights` TINYINT NOT NULL,
  PRIMARY KEY (`staff_id`));