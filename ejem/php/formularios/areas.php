<?php
       $n1 = $_POST['n1'];
       $n2 = $_POST['n2'];     
			$opcion= $_POST['operacion'];
			 switch ($opcion) {
				 case 1:echo "el area del cuadrado es ".$c =$n1*$n1; break;
				 case 2:echo "el area del rectangulo  es ".$r =$n1*$n2; break;
				 case 3:echo "el area del triangulo es ".$t =$n1*$n2/2; break;
				 
				 default: echo "Opcion no valida";break;
				  }
	?>