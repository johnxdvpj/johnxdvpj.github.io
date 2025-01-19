<?php
$userIndex = $_GET["userIndex"];
$zusage = $_GET["zusage"];
$python_script = shell_exec("python test.py 0 0");
echo $python_script;
?>