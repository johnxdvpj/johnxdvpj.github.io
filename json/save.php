<?php
$myFile = "https://api.jsonbin.io/v3/b/678ad996ad19ca34f8eed671";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $_GET["data"];
fwrite($fh, $stringData);
fclose($fh)
?>