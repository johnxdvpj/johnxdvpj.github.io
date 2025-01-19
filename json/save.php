<?php
$myFile = "https://jsonhost.com/json/2b188229a1bc06a4d9e6e418afe6d980";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $_GET["data"];
fwrite($fh, $stringData);
fclose($fh)
?>