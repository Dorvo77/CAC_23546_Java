drop database if exists integrador_cac;
create database  integrador_cac;
use integrador_cac;
create table orador(
	id_orador int auto_increment,
	nombre varchar(30) not null,
	apellido varchar(30) not null,
	mail varchar(50) not null,
    tema varchar(50) not null,
    fecha_alta date not null,
	primary key (id_orador)
);
insert into orador (nombre,apellido,mail,tema,fecha_alta) values
	("Steve","Jobs", "stjobs@apple.com","Innovacion","2023-04-25"),
    ("Troval","Lins", "trovalins@linux.com","Sistemas Operativos","2023-05-21"),
    ("Bill","Gates", "bgates@hotmail.com","Windoes","2023-03-11"),
    ("Brais","Dev", "bd@gmail.com","Python","2023-06-25"),
    ("Ada","Lovelace", "adaL@gmail.com","Algoritmos","2023-06-21"),
    ("Gordon","Moore", "gm@apple.com","Ley de Moore","2023-06-25"),
    ("Lorem","Ipsum", "li@apple.com","Lorem","2023-03-25"),
    ("Miguel","Duran", "miduga@gmail.com","Java Script","2023-01-25"),
    ("Soy","Dalto", "sDalto@gmail.com","Python","2023-07-09"),
	("Luisiana","DeP", "ludep@gmail.com","Java","2023-08-15");
select * from orador;
