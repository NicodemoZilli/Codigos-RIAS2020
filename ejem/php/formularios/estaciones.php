-<?php
       $dia = $_POST['dia'];
       $mes = $_POST['mes'];     
			

if ($mes == 3 && $dia>=21) { 
           
          echo "primavera";
} 
 else  if ($mes == 4 && $dia>= 30) 
   	echo "primavera";
 else if   ($mes == 5 && $dia>=31) {
   	echo "primavera";
   }
 else  if   ($mes == 6 && $dia>=21) {
   	echo "primavera";
   }
else if ($mes == 6 && $dia<=21) {
	echo "verano";
}


else if ($mes == 7 && $dia <= 31  ){ 
          
          echo "verano";
} 
else if ($mes == 9 || $dia<=21) { 
          "otono"; 
          echo "otono";
} 
	?>