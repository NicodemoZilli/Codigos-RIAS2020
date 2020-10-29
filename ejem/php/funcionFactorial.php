<?php
function factorial($n){
	$fact=1;
	
	for ($i=$n; $i>0; $i-- )
	
	$fact=$fact*$i;
return $fact;
}

echo factorial(5);
?>