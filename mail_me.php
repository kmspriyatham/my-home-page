<?
echo "got here";
if (isset($_POST["name"])) {
	mail_me($_POST["name"]);
	function mail_me($name) {
  		$subject = "Home Page Visitor";
  		mail("kmspriyatham@gmail.com", $subject, $name, "From:" . $name);
  		echo "Mailed Priyatham"; 
  		return "fg";
  	} 	
}
?>