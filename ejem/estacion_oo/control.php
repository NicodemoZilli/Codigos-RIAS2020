<?php
/*
Archivo:  control.php
Objetivo: decide la vista a mostrar en función de los valores recibidos
		  para el caso del Estaciones del año
Autor:    BAOZ
*/
include_once("Estaciones.php");
$sError = "";
$objEstaciones = new Estaciones();
$objEstacion = null;
$dFecNac = null;
	
	//Verificar que llegaron los datos
	if (isset($_REQUEST["txtFecNac"]) && !empty($_REQUEST["txtFecNac"])){
		//Verificar que se trate de una fecha
		$dFecNac= date_parse_from_format("d/m/Y", $_REQUEST["txtFecNac"]);
		if (checkdate($dFecNac['month'], $dFecNac['day'], $dFecNac['year'])){
			//Invocar al método dentro de try-catch
			try{
				$objEstacion = $objEstaciones->buscaEstacion($dFecNac);
				//Almacenar el objeto
				$_REQUEST["EstacionEncontrada"] = $objEstacion;
			}catch(Exception $e){
				$sError = $e->getMessage();
				error_log($e->getFile()." ".$e->getLine()." ".$e->getMessage(),0);
			}
		}else{
			$sError = "No es una fecha";
		}
	}else{
		$sError = "Faltan datos entrada";
	}
	
	if (empty ($sError)){
		include_once("resultado.php");
	}else{
		header("Location: error.php?sErr=".$sError);
		exit();
	}
?>