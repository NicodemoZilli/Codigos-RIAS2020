

<?php
$curso[]= $_POST['curso'];


$resp= $_POST['resp'];
$ingles=0;
$frances=0;

foreach ($curso as  $value) {
	# code...

	
	if ($value == 1)

	  $ingles++;

	else
	  $frances++;


}
  while ($resp == "s" || $resp == "S");

  echo "El total de inscritos en ingles ".$ingles;
  echo"El total de inscritos en frances ".$frances;  

?>