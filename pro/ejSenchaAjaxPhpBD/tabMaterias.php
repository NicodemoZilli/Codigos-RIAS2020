<?php
include_once("modelo/Materia.php");
include_once("modelo/Usuario.php");
session_start();
$sErr="";
$sNom="";
$sTipo="";
$arrMaterias=null;
$oMat = new Materia();
$oUsu = new Usuario();
if (isset($_SESSION["usu"])){
		$oUsu = $_SESSION["usu"];
		$sNom = $oUsu->getNombre();
		$sTipo = $_SESSION["tipo"];
		try{
			$arrMaterias = $oMat->buscarTodos();
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
				
					<table border="1">
						<tr>
							<td>Clave</td>
							<td>Nombre</td>
							<td>Creditos</td>
							
						</tr>
						<?php
							if ($arrMaterias!=null){
								foreach($arrMaterias as $oMat){
						?>
						<tr>
							<td class="llave"><?php echo $oMat->getNumClave(); ?></td>
							<td><?php echo $oMat->getNombre(); ?></td>
							<td><?php echo $oMat->getNumCreditos() ; ?></td>
							
							
							
						</tr>
						<?php 
								}//foreach
							}else{
						?>     
						<tr>
							<td colspan="4">No hay datos</td>
						</tr>
						<?php
							}
						?>
					</table>
					
				</form>
			</section>
		</div>
<?php
include_once("abajo.php");
?>


