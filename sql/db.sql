CREATE TABLE IF NOT EXISTS usuarios(
id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL,
rol INTEGER(10),
ciudad VARCHAR(30) NOT NULL,
direccion VARCHAR(30) NOT NULL,
celular VARCHAR(30) NOT NULL,
fecha_creacion Date NOT NULL DEFAULT current_timestamp(),
ultima_sesion Date NOT NULL DEFAULT current_timestamp(),

estado INTEGER(10)

)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS vericationtokens(
    id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario_id  INTEGER(10)  NOT NULL,
    token VARCHAR(30) NOT NULL
    )ENGINE = InnoDB;

 