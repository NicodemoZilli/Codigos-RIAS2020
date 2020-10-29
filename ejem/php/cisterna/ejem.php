 <?php //Ejemplo 

       $longitud = $_GET['long'];

       $altura = $_GET['alt'];
	   
	   $latitud= $_GET['lati'];

       $capacidad = $longitud * $altura * $latitud;

       $litros = $capacidad/.001;

       

       echo"<br/>   La capacidad en litros de la cisterna es de  ". $litros;

?>