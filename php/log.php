<?php
if (isset($_POST['name'])) {
	$name = $_POST['name'];
	$filename = "log.txt";
	file_put_contents($filename, $name, FILE_APPEND | LOCK_EX);
}
?>