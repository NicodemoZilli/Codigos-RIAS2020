<?php

class Persona{
	protected $sNombre="";
	protected $sUsuario="";
	protected $sCorreo="";
	protected $sNumTel="";
	protected $sSexo="";
	protected $nEdad=null;
  protected $sContra="";
	protected $sIntereses="";

		function setId($psId){
			 $this->sId = $psId;
		}

		function getId(){
			 return $this->sId;
		}
    function setNombre($psNombre){
       $this->sNombre = $psNombre;
    }

    function getNombre(){
       return $this->sNombre;
    }

    function setUsuario($psUsuario){
       $this->sUsuario = $psUsuario;
    }
    function getUsuario(){
       return $this->sUsuario;
    }

    function setCorreo($psCorreo){
       $this->sCorreo = $psCorreo;
    }
    function getCorreo(){
       return $this->sCorreo;
    }

    function setNumTel($psNumTel){
       $this->sNumTel = $psNumTel;
    }
    function getNumTel(){
       return $this->sNumTel;
    }

    function setSexo($psSexo){
       $this->sSexo = $psSexo;
    }
    function getSexo(){
       return $this->sSexo;
    }

		function setEdad($pnEdad){
       $this->nEdad = $pnEdad;
    }
    function getEdad(){
       return $this->nEdad;
    }

    function setContra($psContra){
       $this->sContra = $psContra;
    }
    function getContra(){
       return $this->sContra;
    }
		function setIntereses($sInter){
				$this->sIntereses=$sInter;
		}
		function getIntereses(){
			return $this->sIntereses;
		}

}
?>
