<?php
//Number
$bob_geldof = 3;

//String
$bob = "Bob is great !";

//Array
$bob = [4,5,6];

//Booleans
$bob = true;
$bob = false;

//FUNCTIONS
function bob($birthYear) {

  $age = 2019 - $birthYear;

  return "Bob is " . $age;
}
?>

<h1 class="main-header">
  <?php echo $bob_geldof; ?>
</h1>
