<?php
/*
Archivo:  resultado.php
Objetivo: presentación del resultado de la búsqueda Estación del año
Autor:    BAOZ
*/
$objResultado = null;
$sError = "";
	
	//Verificar que llegaron los datos
	if (isset($_REQUEST["EstacionEncontrada"]) && 
		!empty($_REQUEST["EstacionEncontrada"])){
		//Verificar el tipo de dato
		if (is_object($_REQUEST["EstacionEncontrada"])){
			//Pasar datos a variable local, verificar el tipo en este caso
			$objResultado = $_REQUEST["EstacionEncontrada"];
		}else{
			$sError = "Error en paso de datos";
		}
	}else{
		$sError = "Faltan datos del control";
	}
	if (!empty($sError)){
		header("Location: error.php?sErr=".$sError);
		exit();
	}
?>
<!DOCTYPE html>
<!--
Resultado de calculadora bajo separación de responsabilidades
Autor: BAOZ
-->
<html>
	<head>
		<title>Ejemplo Estación del año en que nacio, Método astronómico</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet"  type="text/css" href="css/estilo1.css"> 
	</head>
	<body>
		<script src="js/validaciones.js">
		</script>
        <div id="header">
			<header>
				<h2>Cabecera, logo, mensaje principal</h2>
			</header>
        </div>
        <div id="menu">
			<nav>
				Menu1
				<div id="submenu1" style="display:block">
					<a href="dos.html">Opc1</a> <br/>
					Opc2 <br/>
				</div>
				<br/>
				Menu_n
				<div id="submenu2" style="display:block">
					Opc3 <br/>
					Opc4 <br/>
				</div>
			</nav>
        </div>
		<div id="contenido">
			<section>
				Estación del año en que nacio, Método astronómico
				En hemisferio norte
				<br/><br/>
				Estación: <?php echo $objResultado->getNombre();?> <br/>
				Clima: <?php echo $objResultado->getClima();?> <br/>
				Características: <?php echo $objResultado->getCar();?> <br/>
				<h2><?php echo $objResultado->getNombre();?></h2>
				<img src=<?php echo "img/".$objResultado->getFoto();?> alt="NO SE ENCONTRO IMAGEN" style="width:304px;height:228px;">

				
			<br/>
			<a href="index.html">Regresar</a>
			</section>
		</div>
		<footer>
			<a href="#">Nosotros</a>
          | <a href="#">Mapa de Sitio</a>
          | <a href="#">Pol&iacute;ticas de Privacidad</a>
          | <a href="#">Contacto</a> | &copy;2017 Nombre Empresa
		</footer>
	</body>
</html>