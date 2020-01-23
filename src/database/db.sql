create database ambiente_gyba;
use ambiente_gyba;

create table roles(
	id serial not null primary key,
	nombre varchar(100)
);

create table personas(
	id serial not null primary key,
	id_rol integer,
	nombre_usuario varchar(20),
	email varchar(100),
	clave varchar(50),
	foreign key (id_rol) references roles(id)
);

create table juego_cuentas(
	id serial not null primary key,
	id_persona integer,
	score integer,
	foreign key (id_persona) references personas(id)
);

insert into roles (nombre) values ('admin');
insert into roles (nombre) values ('player');
insert into roles (nombre) values ('test');