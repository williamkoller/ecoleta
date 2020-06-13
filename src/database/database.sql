CREATE DATABASE IF NOT EXISTS `ecoleta`;
CREATE TABLE `places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` longtext DEFAULT NULL,
  `name` longtext DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `complement_number` varchar(100) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `items` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
