<?php
/*
Archivo:  Estacion.php
Objetivo: clase que encapsula la información de una estación del año
Autor:    BAOZ
*/
class Estacion{
	private $sNombre="";
	private $sInicio="";
	private $sFin="";
	private $sClima="";
	private $sCar="";
	private $sFoto=""; 
	
	function setNombre($valor){
		$this->sNombre = $valor;
	}
	function getNombre(){
		return $this->sNombre;
	}
	
	function setInicio($valor){
		$this->sInicio = $valor;
	}
	function getInicio(){
		return $this->sInicio;
	}
	
	function setFin($valor){
		$this->sFin = $valor;
	}
	function getFin(){
		return $this->sFin;
	}
	
	function setClima($valor){
		$this->sClima = $valor;
	}
	function getClima(){
		return $this->sClima;
	}
	
	function setCar($valor){
		$this->sCar = $valor;
	}
	function getCar(){
		return $this->sCar;
	}
	function setFoto($valor){
		$this->sFoto = $valor;
	}

	function getFoto(){
		return $this->sFoto;
	}
	
	function __construct($sNom, $sIni, $sFin, $sCli, $sCar, $sFot){
		$this->sNombre = $sNom;
		$this->sInicio = $sIni;
		$this->sFin = $sFin;
		$this->sClima = $sCli;
		$this->sCar = $sCar;
		$this->sFoto = $sFot;
	}
}
?>