<?php
include_once("modelo/Materia.php");
session_start();
$sErr="";
$sNom="";
$sTipo="";
$arrMaterias=null;
$oUsu = new Usuario();
$oMat = new Materia();
/*Verificar que hayan llegado los datos*/
if (isset($_SESSION["usu"])){
  $oUsu = $_SESSION["usu"];
  $sNom = $oUsu->getNombre();
  $sCl=$oUsu->getClave();
  $sTipo = $_SESSION["tipo"];
  try{
    $arrMaterias = $oMat->buscarTodos($sCl);
  }catch(Exception $e){
    //Enviar el error específico a la bitácora de php (dentro de php\logs\php_error_log
    error_log($e->getFile()." ".$e->getLine()." ".$e->getMessage(),0);
    $sErr = "Error en base de datos, comunicarse con el administrador";
  }
}
else
  $sErr = "Falta establecer el login";

if ($sErr == ""){
  include_once("arriba.php");
  include_once("menu.php");
}
else{
  header("Location: error.php?sErr=".$sErr);
  exit();
}
?>
<div id="contenido">
<section>
  <table border="1" id="tblAlum">
    <tr>
      <td>Clave</td>
      <td>Nombre</td>
      <td>Cr&eacute;ditos</td>
    </tr>
    <?php
      if ($arrMaterias!=null){
        $i=0;
        foreach($arrMaterias as $oMat){
          $i++; //El primer Alumno está en la línea 1 (la línea 0 es la cabecera)
          ?>
          <tr id="lin<?php echo $i;?>">
            <td class="llave"><?php echo $oMat->getNumClave(); ?></td>
            <td><?php echo $oMat->getNombre(); ?></td>
            <td><?php echo $oMat->getNumCreditos(); ?></td>
          </tr>
          <?php
              }//foreach
            }else{
          ?>
          <tr>
            <td colspan="7">No hay datos</td>
          </tr>
          <?php
            }
          ?>
        </table>
<?php
  include_once("abajo.php");
?>
