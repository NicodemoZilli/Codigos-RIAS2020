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
   <script type="text/javascript" src="js/ModalAlert.js"></script>

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
          <h3>Registro</h3>
          <div class="contenedor-inputs">
              <input type="text" placeholder="Nombre Completo"  name="Nombre" required="true" id="Inom" onkeyup="VerificaNom()">
              <input type="text" placeholder="Usuario"  name="Usuario" required="true" id="Iusu" onkeyup="VerificaUsu()">
              <input type="email" placeholder="Correo Electrónico"  name="Correo" required=»required» id="Iem" onkeyup="VerificaEm()">
              <input type="number" placeholder="Número Telefónico"  id="ntl" name="NumTel" required=»required»
              onkeyup="VerificaTel()">
              <label>
                  <br>
              <h5 id="tex-registro">Edad:</h5>
              <input id="edad" type="number" min="18" max="90"  name="Edad" required="true" onkeyup="VerificaEd()">
              </label>
              <label>
                  <br>
              <h5>Sexo:</h5>
                  Masculino <INPUT id="sexo1" class="sexo" TYPE="RADIO" NAME="sexo" VALUE="M" onchange="VerificaSx()"/>
                  Femenino <INPUT id="sexo2" class="sexo" TYPE="RADIO" NAME="sexo" VALUE="F" onchange="VerificaSx()"/>
              </label><br>
              <div id="valida-txt"></div>
              <h3>Registrar Contraseña</h3>
              <div class="contenedor-inputs">
                  <input type="password" placeholder="Contraseña" name="Contraseña" required="true"
                  onkeyup="validate()" id="pass2">
                  <i id="pass-status2" class="icon-eye confirmC" aria-hidden="true" onClick="viewPassword2()"></i>
                  <input type="password" placeholder="Confirma Contraseña" name="Contraseña2" required="true" id="pass3" onkeyup="validateEqualPass()">
                  <div id="valida-txt"></div>
              </div>
              <label>
                  <h3>Intereses</h3>
                  <div class="check">
                  <input type="checkbox" name="check_list[]" id="musica" value="musica">Música
                  <input type="checkbox" name="check_list[]" id="peliculas" value="peliculas">Películas
                  <input type="checkbox" name="check_list[]" id="autos" value="autos">Autos
                  <input type="checkbox" name="check_list[]" id="belleza" value="belleza">Belleza
                  <input type="checkbox" name="check_list[]" id="tecnologia" value="tecnologia">Tecnología
                  <input type="checkbox" name="check_list[]" id="jardineria" value="jardineria">Jardinería
                  <input type="checkbox" name="check_list[]" id="educacion" value="educacion">Educación
                  <input type="checkbox" name="check_list[]" id="emprendimiento" value="emprendimiento">Emprendimiento
                  </div>
              </label>
              <input type="submit" class="btn-submit" value="Registrarse" id="subr" >

        </div>
      </div>
      </form>


  </main>


  </body>
</html>
