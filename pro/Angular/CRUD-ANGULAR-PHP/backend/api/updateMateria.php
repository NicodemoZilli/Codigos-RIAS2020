<?php
require 'conexion.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if(trim($request->cve)==0|| trim($request->snombre) === '' || trim($request->scredi) == 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $cve    = mysqli_real_escape_string($con, trim($request->cve));
  $snombre = mysqli_real_escape_string($con, trim($request->snombre));
  $scredi = mysqli_real_escape_string($con, trim($request->scredi));

  // Update.
  $sql = "UPDATE materia SET sNombreMateria='$snombre',nCreditos=$scredi WHERE nCveMateria = {$cve} LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>