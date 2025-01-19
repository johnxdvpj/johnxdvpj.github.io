<?php
$myFile = "https://jsonhost.com/json/f7bde75a58266a788c1bdef99fd65c39";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $_GET["data"];
fwrite($fh, $stringData);
fclose($fh)
?>