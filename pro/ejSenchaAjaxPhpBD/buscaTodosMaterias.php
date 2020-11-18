<?php
/*
Archivo:  buscaTodosMateria.php
Objetivo: control (MVC) para obtener los datos de todos los Alumnos.
		  Devuelve cadena JSON como sSit (Ok, Error), arrAlumno
		  (arreglo de objetos, cada uno contiene id, nombre, apePat,
		  apeMat, nnumcontrol, ncvecarrera, nsemestre)
Autor:    BAOZ
*/
include_once("modelo/Materia.php");
session_start();
$sErr="";
$sRetJSON="";
/*
$sCve="";
$sNom="";
$sPwd="";
$oUsu = new Usuario();
$oAlum = new Alumno();
*/
$arrMat=null;
$oMat= new Materia();

	try{
		//Realizar búsqueda mediante objeto de Materia
		$arrMat= $oMat->buscarTodos();
	}catch(Exception $e){
		error_log($e->getFile()." ".$e->getLine()." ".$e->getMessage(),0);
		$sErr = "Error en base de datos";
	}

	//Tiene que armar la cadena JSON
	if ($sErr == ""){
		$sRetJSON='{"arrMat":['; //Inicio de la cadena JSON
		if ($arrMat == null){
			$sRetJSON = '{"arrMat":["{
							"ncvemateria": -1,
							"snombremateria":"",
							"ncreditos":""
						}';
		}else{
			foreach($arrMat as $oMat){
				$sRetJSON = $sRetJSON.'{
						"ncvemateria": '.$oMat->getNumClave().',
						"snombremateria":"'.$oMat->getNombre().'",
						"ncreditos":"'.$oMat->getNumCreditos().'"
						},';
			}
			//Sobra una coma, eliminarla
			$sRetJSON = substr($sRetJSON,0, strlen($sRetJSON)-1);
		}
		//Fin de la cadena JSON
		$sRetJSON = $sRetJSON.']
					}';
	}else{
		$oErr->setError($nErr);
		$sRetJSON='{"arrMat":[{
						"ncvemateria": -1,
						"snombremateria":"'.$oErr->getTextoError().'",
						"ncreditos":""
						}]}';
	}
	header('Content-type: application/json');

	echo $sRetJSON;
?>
