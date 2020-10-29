/*
nombre de la base = inscripciones
*/

CREATE TABLE Alumno (
       nNumControl          INTEGER NOT NULL,
       nCveCarrera          SMALLINT NOT NULL,
       sCveUsuario          CHAR(10) NOT NULL,
       nSemestre            SMALLINT
);

CREATE UNIQUE INDEX XPKAlumno ON Alumno
(
       nNumControl
);

CREATE INDEX XIF1Alumno ON Alumno
(
       nCveCarrera
);

CREATE INDEX XIF2Alumno ON Alumno
(
       sCveUsuario
);


ALTER TABLE Alumno
       ADD PRIMARY KEY (nNumControl);


CREATE TABLE Carrera (
       nCveCarrera          SMALLINT NOT NULL,
       sNombre              VARCHAR(20) NOT NULL,
       sAcronimo            CHAR(5)
);

CREATE UNIQUE INDEX XPKCarrera ON Carrera
(
       nCveCarrera
);


ALTER TABLE Carrera
       ADD PRIMARY KEY (nCveCarrera);


CREATE TABLE Grupo (
       sCveGrupo            CHAR(5) NOT NULL,
       nHora                SMALLINT NOT NULL,
       nCveMateria          INTEGER NOT NULL,
       nCveMaestro          INTEGER NOT NULL,
       nSituacion           SMALLINT NOT NULL,
       sSalon               CHAR(5)
);

CREATE UNIQUE INDEX XPKGrupo ON Grupo
(
       sCveGrupo
);

CREATE INDEX XIF1Grupo ON Grupo
(
       nCveMateria
);

CREATE INDEX XIF2Grupo ON Grupo
(
       nCveMaestro
);


ALTER TABLE Grupo
       ADD PRIMARY KEY (sCveGrupo);


CREATE TABLE ListaGrupo (
       nCalifFinal          SMALLINT,
       sCveGrupo            CHAR(5) NOT NULL,
       nNumControl          INTEGER NOT NULL
);

CREATE UNIQUE INDEX XPKListaGrupo ON ListaGrupo
(
       sCveGrupo,
       nNumControl
);

CREATE INDEX XIF1ListaGrupo ON ListaGrupo
(
       sCveGrupo
);

CREATE INDEX XIF2ListaGrupo ON ListaGrupo
(
       nNumControl
);


ALTER TABLE ListaGrupo
       ADD PRIMARY KEY (sCveGrupo, nNumControl);


CREATE TABLE Maestro (
       nCveMaestro          INTEGER NOT NULL,
       sNombre              VARCHAR(20) NOT NULL,
       sApePat              VARCHAR(20) NOT NULL,
       sApeMat              VARCHAR(20),
       sTitulo              VARCHAR(20) NOT NULL,
       sMaestria            VARCHAR(20)
);

CREATE UNIQUE INDEX XPKMaestro ON Maestro
(
       nCveMaestro
);


ALTER TABLE Maestro
       ADD PRIMARY KEY (nCveMaestro);


CREATE TABLE Materia (
       nCveMateria          INTEGER NOT NULL,
       sNombreMateria       VARCHAR(20) NOT NULL,
       nCreditos            SMALLINT NOT NULL,
       nHT                  SMALLINT NOT NULL,
       nHP                  SMALLINT NOT NULL
);

CREATE UNIQUE INDEX XPKMateria ON Materia
(
       nCveMateria
);


ALTER TABLE Materia
       ADD PRIMARY KEY (nCveMateria);


CREATE TABLE Reticula (
       nCveCarrera          SMALLINT NOT NULL,
       nCveMateria          INTEGER NOT NULL,
       nSemestre            SMALLINT
);

CREATE UNIQUE INDEX XPKReticula ON Reticula
(
       nCveCarrera,
       nCveMateria
);

CREATE INDEX XIF1Reticula ON Reticula
(
       nCveCarrera
);

CREATE INDEX XIF2Reticula ON Reticula
(
       nCveMateria
);


ALTER TABLE Reticula
       ADD PRIMARY KEY (nCveCarrera, nCveMateria);


CREATE TABLE Usuario (
       sCveUsuario          CHAR(10) NOT NULL,
       sNombre              VARCHAR(20) NOT NULL,
       sApePat              VARCHAR(20) NOT NULL,
       sApeMat              VARCHAR(20),
       sContrasenia         CHAR(8) NOT NULL
);

CREATE UNIQUE INDEX XPKUsuario ON Usuario
(
       sCveUsuario
);


ALTER TABLE Usuario
       ADD PRIMARY KEY (sCveUsuario);


ALTER TABLE Alumno
       ADD FOREIGN KEY (sCveUsuario)
                             REFERENCES Usuario;


ALTER TABLE Alumno
       ADD FOREIGN KEY (nCveCarrera)
                             REFERENCES Carrera;


ALTER TABLE Grupo
       ADD FOREIGN KEY (nCveMaestro)
                             REFERENCES Maestro;


ALTER TABLE Grupo
       ADD FOREIGN KEY (nCveMateria)
                             REFERENCES Materia;


ALTER TABLE ListaGrupo
       ADD FOREIGN KEY (nNumControl)
                             REFERENCES Alumno;


ALTER TABLE ListaGrupo
       ADD FOREIGN KEY (sCveGrupo)
                             REFERENCES Grupo;


ALTER TABLE Reticula
       ADD FOREIGN KEY (nCveMateria)
                             REFERENCES Materia;


ALTER TABLE Reticula
       ADD FOREIGN KEY (nCveCarrera)
                             REFERENCES Carrera;


/*Usuario y Permisos*/
CREATE USER usrinscrip WITH PASSWORD 'usrinscrip1';

GRANT select, insert, delete, update ON alumno TO usrinscrip;
GRANT select, insert, delete, update ON carrera TO usrinscrip;
GRANT select, insert, delete, update ON grupo TO usrinscrip;
GRANT select, insert, delete, update ON listagrupo TO usrinscrip;
GRANT select, insert, delete, update ON maestro TO usrinscrip;
GRANT select, insert, delete, update ON materia TO usrinscrip;
GRANT select, insert, delete, update ON reticula TO usrinscrip;
GRANT select, insert, delete, update ON usuario TO usrinscrip;

