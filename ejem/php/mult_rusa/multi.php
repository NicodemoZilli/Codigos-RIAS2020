  
  <?php
  $num1 = $_POST['num1'];

   $num2 = $_POST['num2'];
	   
	  
 
 
 while($num1>=1)
   {
       if($num1%2!=0)
       $res += $num2; 
       $num1=$num1/2;
       $num2=$num2*2;
   }
   echo"El resultado de es ".$res;
   
   ?>
   