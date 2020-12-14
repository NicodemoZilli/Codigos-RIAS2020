<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'nicozilli.ddns.net');
define('DB_USER', 'NicodemoZ');
define('DB_PASS', 'Nicodemo13');
define('DB_NAME', 'inscripciones');
define('DB_PORT', 3306);

function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME,DB_PORT);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();

?>