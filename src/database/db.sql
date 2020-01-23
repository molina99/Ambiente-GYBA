create table rols(
	id serial primary key,
	nombre varchar(100)
);

create table personas(
	id serial primary key,
	id_rol integer,
	nombre_usuario varchar(20),
	email varchar(100),
	clave varchar(50),
	foreign key (id_rol) references rols(id)
);

create table cuenta_juegos(
	id serial primary key,
	id_persona integer,
	score integer,
	foreign key (id_persona) references personas(id)
);

insert into rols (nombre) values ('admin');
insert into rols (nombre) values ('player');
insert into rols (nombre) values ('test');

select * from rols;
select * from personas;