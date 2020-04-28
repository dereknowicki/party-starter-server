CREATE TABLE `sampledb`.`user` (
  `u_id` INT NOT NULL,
  `u_name` VARCHAR(45) NULL,
  `u_password` VARCHAR(45) NULL,
  `u_email` VARCHAR(45) NULL,
  `u_dob` DATE NULL,
  `u_gender` VARCHAR(45) NULL,
  PRIMARY KEY (`u_id`));
CREATE TABLE `sampledb`.`club` (
  `club_id` INT NOT NULL,
  `club_name` VARCHAR(45) NULL,
  `club_admin` VARCHAR(45) NULL,
  `club_telephone` VARCHAR(11) NULL,
  `club_email` VARCHAR(45) NULL,
  PRIMARY KEY (`club_id`));
CREATE TABLE `sampledb`.`event` (
  `event_id` INT NOT NULL,
  `event_name` VARCHAR(45) NULL,
  `event_type` VARCHAR(45) NULL,
  `event_organizer` VARCHAR(45) NULL,
  `event_date` DATE NOT NULL,
  `event_location` VARCHAR(45) NULL,
  PRIMARY KEY (`event_id`));
CREATE TABLE `sampledb`.`tag` (
  `tag_id` INT NOT NULL,
  `tag_name` VARCHAR(45) NULL,
  PRIMARY KEY (`tag_id`));
