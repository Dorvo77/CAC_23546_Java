CREATE DATABASE universidad;
	CREATE TABLE estudiante(
	id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(40) NOT NULL,
    apellido VARCHAR(40) NOT NULL,
    edad TINYINT(2) NOT NULL,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    provincia VARCHAR(30) NOT NULL
);
INSERT INTO estudiante(nombre,apellido,edad,provincia) VALUES
("nico","aaaa",25,"cordoba"),
("alejandro","bbbb",35,"cordoba"),
("martin","perez",26,"baires"),
("jorgelina","suarez",22,"misiones"),
("cecilia","santos",31,"chaco");
SELECT * FROM estudiante;