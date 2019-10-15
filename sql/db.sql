CREATE DATABASE IF NOT EXISTS test 
USE test;


CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  apellido varchar(150) DEFAULT NULL,
  email varchar(255) NOT NULL,
  PASSWORD varchar(255) NOT NULL,
  rol int(11) DEFAULT 0,
  celular varchar(60) DEFAULT NULL,
  ciudad varchar(60) DEFAULT NULL,
  direccion varchar(100) DEFAULT NULL,
  fecha_creacion timestamp NOT NULL DEFAULT current_timestamp(),
  ultima_sesion timestamp NOT NULL DEFAULT current_timestamp(),
  estado tinyint(1) DEFAULT 0,
  PRIMARY KEY (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS transacciones (
  id int(11) NOT NULL AUTO_INCREMENT,
  id_transaccion int(11) DEFAULT NULL,
  id_propiedad int(11) NOT NULL,
  valor double(8,2) DEFAULT NULL,
  estado_transaccion int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FK_id_propiedad_transaccion (id_propiedad),
  CONSTRAINT FK_id_propiedad_transaccion FOREIGN KEY (id_propiedad) REFERENCES propiedades (id_propiedades)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS roles (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS propiedades (
  id_propiedades int(11) NOT NULL AUTO_INCREMENT,
  titulo varchar(255) DEFAULT NULL,
  tipo int(11) NOT NULL,
  descripcion mediumtext DEFAULT NULL,
  precio double(8,2) DEFAULT NULL,
  lugar varchar(200) DEFAULT NULL,
  direccion varchar(255) DEFAULT NULL,
  area int(11) DEFAULT NULL,
  banios int(11) DEFAULT 0,
  img_principal varchar(255) DEFAULT NULL,
  habitaciones int(11) DEFAULT 0,
  cod_referencia_propiedad varchar(50) DEFAULT NULL,
  estado_disponibilidad tinyint(1) DEFAULT 0,
  PRIMARY KEY (id_propiedades),
  KEY FK_tipo_propiedad (tipo),
  CONSTRAINT FK_tipo_propiedad FOREIGN KEY (tipo) REFERENCES tipo_propiedad (id_tipo_propiedad)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS adminxpropiedades (
  id int(11) NOT NULL AUTO_INCREMENT,
  id_propiedad int(11) NOT NULL,
  id_cliente int(11) NOT NULL,
  fecha_in date NOT NULL,
  fecha_out date NOT NULL,
  valor double(8,2) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FK_id_propiedad (id_propiedad),
  KEY FK_id_cliente (id_cliente),
  CONSTRAINT FK_id_cliente FOREIGN KEY (id_cliente) REFERENCES usuarios (id_usuario),
  CONSTRAINT FK_id_propiedad FOREIGN KEY (id_propiedad) REFERENCES propiedades (id_propiedades)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS tipo_propiedad (
  id_tipo_propiedad int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(250) DEFAULT NULL,
  PRIMARY KEY (id_tipo_propiedad)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
