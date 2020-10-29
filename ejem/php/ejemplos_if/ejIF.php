<?php
       $nombre = $_POST['nombre'];
       $edad = $_POST['edad'];   

       if ($edad >= 18 )
       	echo "Ya puedes votar.  ".$nombre;
       else
       	 echo "Lo sentimos, hasta que tengas 18 años";
 ?>      