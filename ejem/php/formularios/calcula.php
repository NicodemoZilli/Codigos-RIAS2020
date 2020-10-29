<?php
       $n1 = $_POST['n1'];
       $n2 = $_POST['n2'];     
			$opcion= $_POST['operacion'];
			 switch ($opcion) {
				 case 1:echo "la suma es ".$suma =$n1+$n2; break;
				 case 2:echo "la resta es ".$resta =$n1-$n2; break;
				 case 3:echo "la multiplicacion es ".$multi =$n1*$n2; break;
				 case 4:echo "la division es ".$div =$n1/$n2; break;
				 default: echo "Opcion no valida";break;
				  }
	?>