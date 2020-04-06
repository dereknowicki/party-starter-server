CREATE TABLE `sampledb`.`user` (
  `u.id` INT NOT NULL,
  `u.name` VARCHAR(45) NULL,
  `u.password` VARCHAR(45) NULL,
  `u.email` VARCHAR(45) NULL,
  `u.dob` DATE NULL,
  `u.gender` VARCHAR(45) NULL,
  PRIMARY KEY (`u.id`));
CREATE TABLE `sampledb`.`club` (
  `club.id` INT NOT NULL,
  `club.name` VARCHAR(45) NULL,
  `club.admin` VARCHAR(45) NULL,
  `club.telephone` VARCHAR(11) NULL,
  `club.email` VARCHAR(45) NULL,
  PRIMARY KEY (`club.id`));
CREATE TABLE `sampledb`.`event` (
  `event.id` INT NOT NULL,
  `event.name` VARCHAR(45) NULL,
  `event.type` VARCHAR(45) NULL,
  `event.organizer` VARCHAR(45) NULL,
  `event.date` DATE NOT NULL,
  `event.location` VARCHAR(45) NULL,
  PRIMARY KEY (`event.id`));
CREATE TABLE `sampledb`.`tag` (
  `tag.id` INT NOT NULL,
  `tag.name` VARCHAR(45) NULL,
  PRIMARY KEY (`tag.id`));
