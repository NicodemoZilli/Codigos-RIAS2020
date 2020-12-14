<?php
require 'conexion.php';


$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);
  if(trim($request->cve)==0|| trim($request->snombre) === '' || trim($request->scredi) == 0)
  {
    return http_response_code(400);
  }

  // Sanitize.
  $cve = mysqli_real_escape_string($con, trim($request->cve));
  $snombre = mysqli_real_escape_string($con, trim($request->snombre));
  $scredi = mysqli_real_escape_string($con, trim($request->scredi));


  // Create.
  $sql = "INSERT INTO `materia`(`nCveMateria`, `sNombreMateria`, `nCreditos`) VALUES ({$cve},'{$snombre}',{$scredi})";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $materias= [
      'cve' => $cve,
      'snombre' => $snombre,
      'scredi' => $scredi
    ];
    echo json_encode($materias);
  }
  else
  {
    http_response_code(422);
  }
}

?>