<?php
/*
Archivo:  error.php
Objetivo: manejo de errores
Autor:    BAOZ
*/
?>
<!DOCTYPE html>
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
				<?php echo $_REQUEST["sErr"];?>
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