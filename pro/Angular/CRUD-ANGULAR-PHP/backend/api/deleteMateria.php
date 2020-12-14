<?php

require 'conexion.php';

// Extract, validate and sanitize the cve.
$cve =  ($_GET['cve'] !== null )? mysqli_real_escape_string($con, $_GET['cve']) : false;

if(!$cve)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `materia` WHERE `nCveMateria` ={$cve} LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}