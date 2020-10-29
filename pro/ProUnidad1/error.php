<?php

  $sError = ( isset($_REQUEST["sError"]) )? $_REQUEST["sError"]: "Error desconocido";

  if($sError!="")
    header("Location: index.php?edo=".$sError);
  else
    header("Location: index.php");


?>
