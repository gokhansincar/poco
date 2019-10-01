<?php
require_once('class.first.php');
require_once('class.abstract.php');
require_once('class.interface.php');
//$first = new First();
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>So OOP - Playing with PHP Classes</title>
</head>

<body>
<?php 
echo '<h3>First class essais</h3>';
$first = new First();
$first->people();

echo '<hr>';

echo '<h3>SECOND class essais</h3>';
$second = new Second();
$second->people();

echo '<hr>';

echo '<h3>Abstract class essais</h3>';
$dog = new Dog;
$dog->printOut();
echo $dog->name();

echo '<hr>';

$cow = new Cow;
$cow->printOut();
$cow->returnavalue(20);

echo '<hr>';

echo '<h3>Interface class essais</h3>';
$template = new Template;
$template->html('bob');
?>
</body>
</html>