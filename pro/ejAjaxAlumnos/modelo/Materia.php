<?php
include_once("AccesoDatos.php");
include_once("modelo/Alumno.php");
class Materia {
private $nclave=0;
private $snombre="";
private $ncreditos=0;

function setNumClave($pnValor){
	$this->nclave=$pnValor;
}
	function getNumClave(){
		return $this->nclave;
	}

function setNombre($pnValor){
	$this->snombre =$pnValor;
}
	function getNombre (){
		return $this->snombre;
	}

function setNumCreditos($pnValor){
	$this-> ncreditos=$pnValor;
}
	function getNumCreditos (){
		return $this ->ncreditos;
	}

function buscarTodos($sCl){
$oAccessoDatos=new AccesoDatos();;
$sQuery="";
$arrRS=null;
$arrMat=null;
$arrLinea=null;
$j=0;
$oMat=null;

	if($oAccessoDatos->conectar()){
		$sQuery= "SELECT ncvemateria, snombremateria, ncreditos
							FROM materia natural join reticula natural join alumno
							where scveusuario='".$sCl."'";
		$arrRS= $oAccessoDatos-> ejecutarConsulta($sQuery);
		$oAccessoDatos->desconectar();
		if($arrRS){
			foreach ($arrRS as $arrLinea) {
				$oMat= new Materia();
				$oMat->setNumClave($arrLinea[0]);
				$oMat->setNombre($arrLinea[1]);
				$oMat->setNumCreditos($arrLinea[2]);
				$arrMat[$j]= $oMat;
				$j=$j+1;
			}
		}
	}
	return $arrMat;
}

}
?>
