<?php

include_once("modelo/persona.php");

$sErr="";
$sNombre="";
$sUsuario="";
$sCorreo="";
$sNumTel="";
$nEdad=null;
$sSexo="";
$sContra="";
$sIntereses="";


	/*Verificar que hayan llegado los datos*/
	if (isset($_POST["Nombre"]) && !empty($_POST["Nombre"]) &&
		  isset($_POST["Usuario"]) && !empty($_POST["Usuario"]) &&
      isset($_POST["Correo"]) && !empty($_POST["Correo"]) &&
      isset($_POST["NumTel"]) && !empty($_POST["NumTel"]) &&
      isset($_POST["Edad"]) && !empty($_POST["Edad"]) &&
			isset($_POST["Contraseña"]) && !empty($_POST["Contraseña"]) &&
      isset($_POST["sexo"]) && !empty($_POST["sexo"] && !empty($_POST['check_list']))
    ){
      $sNombre= $_POST["Nombre"];
      $sUsuario= $_POST["Usuario"];
      $sCorreo= $_POST["Correo"];
      $sNumTel= $_POST["NumTel"];
      $nEdad= $_POST["Edad"];
      $sSexo= $_POST["sexo"];
      $sContra= $_POST["Contraseña"];

      foreach ($_POST['check_list'] as $selected) {
        $sIntereses = $sIntereses.$selected."<br>";
      }


      $oUsu = new Persona();

      $oUsu->setNombre($sNombre);
      $oUsu->setUsuario($sUsuario);
      $oUsu->setCorreo($sCorreo);
      $oUsu->setNumTel($sNumTel);
      $oUsu->setEdad($nEdad);
      $oUsu->setSexo($sSexo);
      $oUsu->setContra($sContra);
      $oUsu->setIntereses($sIntereses);




  }else
		$sErr = "Faltan datos para registrarse";


    if ($sErr != "")
      header("Location: error.php?sError=".$sErr);
 ?>

 <?php
 $edo="";
 if(isset($_REQUEST['edo'])){
   $edo=$_REQUEST['edo'];
 }
  ?>
 <!DOCTYPE html>
 <html lang="es" dir="ltr">
   <head>
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/registro.css">
    <script type="text/javascript" src="js/formularios.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <link rel="shortcut icon" type="image/x-icon" href="indexMedia/imgs/fox.png">

     <title>Nickys eBook Social</title>
   </head>

   <body>
     <?php
     if($edo!='' && $edo!='R')
       echo "<script> abrirmsj('¡Error!','".$edo."'); </script>";
     ?>
   <main>

       <form method="post" action="recibeDatosRetorna.php">
           <div class="popup">
           <h3>Bienvenido a Nickys eBook Social</h3>
           <div class="contenedor-inputs">
                <h5>Nombre: </h5><?php echo $oUsu->getNombre(); ?><br>
                <h5>Usuario: </h5><?php echo $oUsu->getUsuario(); ?><br>
                <h5>Correo: </h5><?php echo $oUsu->getCorreo(); ?><br>
                <h5>Telefono: </h5><?php echo $oUsu->getNumTel(); ?><br>
               <label>
                   <br>
               <h5 id="tex-registro">Edad:</h5>
                  <?php
                      echo $oUsu->getEdad();
                   ?>
              </label>
               <label>
                   <br>
               <h5>Sexo:</h5>
                   <?php
                      echo $oUsu->getSexo();
                    ?>
               </label><br>
               <label>
                   <h3>Intereses</h3>
                   <?php echo $oUsu->getIntereses(); ?>
               </label>

         </div>
       </div>

   </main>


   </body>
 </html>
