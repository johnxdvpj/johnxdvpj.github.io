<?php
$myFile = "https://jsonhost.com/json/f21d790128db3973f683655d1e58d6a0";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $_GET["data"];
fwrite($fh, $stringData);
fclose($fh)
?>