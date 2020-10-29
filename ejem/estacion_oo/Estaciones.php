<?php
/*
Archivo:  Estaciones.php
Objetivo: clase que encapsula la información de un conjunto de estaciones
Autor:    BAOZ
*/
include_once("Estacion.php");
class Estaciones{
	private $arrEstacion = array();
	
	function __construct(){
		$oEstacion = new Estacion("Primavera", "0321", "0620", "Trimestre (Marzo, Abril y Mayo)  Ascenso de temperatura con respecto a invierno", "En esta época empieza a florecer todo lo devastado por el invierno pasado", "pri.jpg");
		$this->arrEstacion[0] = $oEstacion;
		$oEstacion = new Estacion("Verano", "0621", "0822", "trimestre con mayor temperatura", "Trimestre (Junio, Julio y Agosto) con mayor temperatura", "ver.jpg");
		$this->arrEstacion[1] = $oEstacion;
		$oEstacion = new Estacion("Otoño", "0823", "1220", "trimestre con descenso de temperatura", "Trimestre (Septiembre, Octubre, Noviembre) época se empiezan a caer las hojas de los árboles y plantas", "oto.jpg");
		$this->arrEstacion[2] = $oEstacion;
		$oEstacion = new Estacion("Invierno", "1221", "0320", "trimestre con menor temperatura", "Trimestre (Diciembre, Enero y Febrero) Época nieva en las zonas que están fuera del trópico", "inv.jpg");
		$this->arrEstacion[3] = $oEstacion;
	}
	
	function buscaEstacion($dFecNac){
	$oRet = null; //estación 
	$nMes = (int)$dFecNac['month'];
	$nDia = (int)$dFecNac['day'];
	$sMesDia = ($nMes<10?'0'.$nMes:$nMes).($nDia<10?'0'.$nDia:$nDia);
	$i=0;
		
		if (($nMes ==12 && $nDia >=21)||
            ($nMes ==2 && $nDia <=29)||
			($nMes ==3 && $nDia <=20)){
            $oRet = $this->arrEstacion[3];
        }else{
			for ($i=0; $i<12; $i++){
                if ($this->arrEstacion[$i]->getInicio()<=$sMesDia &&
                    $this->arrEstacion[$i]->getFin()>=$sMesDia){
                    $oRet = $this->arrEstacion[$i];
                    break;
                }
            }
		}
		return $oRet;
	}
}
?>