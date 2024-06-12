SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT=0;

USE `test`;

DROP TABLE IF EXISTS `laptop`;
DROP TABLE IF EXISTS `pc`;
DROP TABLE IF EXISTS `printer`;
DROP TABLE IF EXISTS `product`;

CREATE TABLE IF NOT EXISTS `laptop` (
  `model` int(4) unsigned NOT NULL,
  `speed` int(4) unsigned NOT NULL,
  `ram` int(3) unsigned NOT NULL,
  `hd` float unsigned NOT NULL,
  `screen` float unsigned NOT NULL,
  `price` int(7) NOT NULL,
  PRIMARY KEY (`model`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `pc` (
  `model` int(4) unsigned NOT NULL,
  `speed` int(4) unsigned NOT NULL,
  `ram` int(3) unsigned NOT NULL,
  `hd` float unsigned NOT NULL,
  `cd` varchar(3) COLLATE latin1_bin NOT NULL,
  `price` int(7) NOT NULL,
  PRIMARY KEY (`model`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `printer` (
  `model` int(4) unsigned NOT NULL,
  `color` tinyint(1) NOT NULL,
  `type` varchar(8) COLLATE latin1_bin NOT NULL,
  `price` int(10) unsigned NOT NULL,
  PRIMARY KEY (`model`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `product` (
  `maker` varchar(2) COLLATE latin1_bin NOT NULL,
  `model` int(4) unsigned NOT NULL,
  `type` varchar(8) COLLATE latin1_bin NOT NULL,
  PRIMARY KEY (`model`),
  KEY `maker` (`maker`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

START TRANSACTION;

INSERT INTO `laptop` (`model`, `speed`, `ram`, `hd`, `screen`, `price`) VALUES
(2001, 100, 20, 1.1, 9.5, 1999),
(2002, 117, 12, 0.75, 11.3, 2499),
(2003, 117, 32, 1, 10.4, 3599),
(2004, 133, 16, 1.1, 11.2, 3499),
(2005, 133, 16, 1, 11.3, 2599),
(2006, 120, 8, 0.81, 12.1, 1999),
(2007, 150, 16, 1.35, 12.1, 4799),
(2008, 120, 16, 1.1, 12.1, 2099);

INSERT INTO `pc` (`model`, `speed`, `ram`, `hd`, `cd`, `price`) VALUES
(1001, 133, 16, 1.6, '6x', 1595),
(1002, 120, 16, 1.6, '6x', 1299),
(1003, 166, 24, 2.5, '6x', 1899),
(1004, 166, 32, 2.5, '8x', 1999),
(1005, 166, 16, 2, '8x', 1999),
(1006, 200, 32, 3.1, '8x', 2099),
(1007, 200, 32, 3.2, '8x', 2349),
(1008, 180, 32, 2, '8x', 3699),
(1009, 200, 32, 2.5, '8x', 2599),
(1010, 160, 16, 1.2, '8x', 1495);

INSERT INTO `printer` (`model`, `color`, `type`, `price`) VALUES
(3001, 1, 'Ink-jet', 275),
(3002, 1, 'Ink-jet', 269),
(3003, 0, 'laser', 829),
(3004, 0, 'laser', 879),
(3005, 0, 'Ink-jet', 180),
(3006, 1, 'dry', 470);

INSERT INTO `product` (`maker`, `model`, `type`) VALUES
('A', 1001, 'pc'),
('A', 1002, 'pc'),
('A', 1003, 'pc'),
('B', 1004, 'pc'),
('C', 1005, 'pc'),
('B', 1006, 'pc'),
('C', 1007, 'pc'),
('D', 1008, 'pc'),
('D', 1009, 'pc'),
('D', 1010, 'pc'),
('D', 2001, 'laptop'),
('D', 2002, 'laptop'),
('D', 2003, 'laptop'),
('E', 2004, 'laptop'),
('F', 2005, 'laptop'),
('G', 2006, 'laptop'),
('G', 2007, 'laptop'),
('E', 2008, 'laptop'),
('D', 3001, 'printer'),
('B', 3002, 'printer'),
('D', 3003, 'printer'),
('B', 3004, 'printer'),
('H', 3005, 'printer'),
('I', 3006, 'printer');

ALTER TABLE `laptop`
  ADD CONSTRAINT `laptop_ibfk_1` FOREIGN KEY (`model`) REFERENCES `product` (`model`) ON UPDATE CASCADE;

ALTER TABLE `pc`
  ADD CONSTRAINT `pc_ibfk_1` FOREIGN KEY (`model`) REFERENCES `product` (`model`) ON UPDATE CASCADE;

ALTER TABLE `printer`
  ADD CONSTRAINT `printer_ibfk_1` FOREIGN KEY (`model`) REFERENCES `product` (`model`) ON UPDATE CASCADE;

SET FOREIGN_KEY_CHECKS=1;
COMMIT;



