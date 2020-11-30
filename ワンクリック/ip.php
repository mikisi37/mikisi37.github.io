<?php
header("Content-type: application/x-javascript");
$IP = $_SERVER['REMOTE_ADDR'];
echo "document.write('PHPでのIP表示:" . $IP . "');";
echo "var IP = '" . $IP . "';";
?>
