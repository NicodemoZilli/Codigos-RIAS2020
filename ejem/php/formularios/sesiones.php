<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php

$_SESSION["usuario"] = "admin";
print_r($_SESSION);
?>

</body>
</html>