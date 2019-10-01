<?php
/* ERROR REPORTING
******************************************/
ini_set('display_errors', 1); //0 to hide errors
error_reporting(E_ALL); //E_STRICT|E_NOTICE|E_WARNING // E_ALL & ~(E_STRICT|E_NOTICE)


/* DATA TYPES
******************************************/
/* STRINGS
-----------------------------*/
$str1 = 'I am a "string"';              //show($str1);
$str2 = "I am also a 'string'";         //show($str2);


 //"I am also a string"
//echo $bob; //Throws an E_NOTICE error (if notice errors are shown): $bob does not exists

/* NUMBERS - Integers and floats
-----------------------------*/
$num1 = 24; //integer
$num2 = 18.359; //float
$num3 = -17; //negative

$birth_year = 1966;
$current_year = date('Y');              //show($current_year) //'2019';
$month = 11;
$age = $current_year - $birth_year;     //show($age); //53

$nonsense = 'Bob' + 3;                  //show($nonsense); //3


/* BOOLEANS
-----------------------------*/
$this_will_be_true = true;
$this_will_be_true_also = 1;

$this_will_be_false = false;
$this_will_be_false_also = 0;

//Null coalescing operator
$what_page = $page ?? 'No page';         //show('What page: ' . $what_page);


/* NULL
-----------------------------*/
$dada = null;                             //show($dada);


/* ARRAYS
-----------------------------*/
//Simple, index based array
$myarr1 = array("dada", 25, (63 - 5));    //show($myarr1);
$myarr2 = ["dada", 25, (63 - 5)];         //show($myarr2); //square brackets from PHP v5.6

//show($myarr2[2]);                         //58

//Key based array
$person_data = [
  'first-name' => 'Sorin',
  'last-name' => 'Paun',
  'address' => 'Route de la Léchère 59, 1614 Granges-Veveyse',
  'occupation' => 'Web developer'
];
//show($person_data['address']);

//Multidimensional key based array
$people = [
  'so' => [
    'first-name' => 'Sorin',
    'last-name' => 'Paun',
    'address' => 'Route de la Léchère 59, 1614 Granges-Veveyse',
    'occupation' => 'Web developer'
  ],
  'bo' => [
    'first-name' => 'Bob',
    'last-name' => 'Geldoff',
    'address' => 'Avenue Charles Dickens 8, 1002 Lausanne',
    'occupation' => 'Faker'
  ]
];






/* CONDITIONAL STATEMENTS
******************************************/
/*#region Conditions*/
//CLASSIC IF/ELSEIF/ELSE CONDITIONS
$npa = 1614;

if($npa > 1000) {
  //run some code here if $npa is greater than 1000
}
elseif($npa > 1500 && $npa < 2000) {
  //rrun some code here if $npa is between 1500 and 2000
}
else {
  //run some code here if ALL above are false...
}


//TERNARYY OPERATOR
$msg = ($npa >= 1600 && $npa <= 1699) ? 'NPA is IN the Veveyse area' : 'NPA is OUTSIDE Veveyse area';
//show($msg);
/*#endregion*/



/* LOOPS
******************************************/
$person_info = '';

//FOREACH LOOP
foreach($person_data as $key => $val) {
  $person_info .= $key . ' → ' . $val . '<br>';
}
show($person_info);

$count = 50;
$count_info = '';

//FOR LOOP
for($i = 1; $i <= $count; $i++) {
  $zero_str = ($i < 10) ? '0' : '';
  $count_info .= $zero_str.$i . '<br>';
}
//show($count_info);


/* FUNCTIONS
******************************************/
/*#region Functions*/
/* CUSTOM
-----------------------------*/
function show($data) {
  echo '<pre>';
  print_r($data); //or var_dump()...
  echo '</pre>';
}


/* NATIVE
-----------------------------*/
//Set time zone
date_default_timezone_set('Europe/Zurich');

//The number of seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
$time = time();                                     //show($time);

//Convert time to date...
$time_to_date = date('d.m.y H:i:s', $time);         //show($time_to_date);

$rand = rand(1, 100);                               //show('Random number: ' . $rand);

$round = round(6.42);                               show('Round number: ' . $round);

$html_home = file_get_contents('html/home.html');   //show($html_home);
/*#endregion*/



/* OBJECTS
******************************************/
/*#region Objects*/
class My_Object {

  public $str = "I'm a class property!";
  public $num = 9;
  private $secret = "Shhhhhh, I'm private, only methods inside this class can see me!";

  function bob() {
    return "It's Bob dummy, you know it's fake";
  }

  function calc($birth_year) {
    return 2019 - $birth_year;
  }

  function get() {
    return $this->secret;
  }

}
// $obj_inst = new My_Object(); //we call this an "instance" of the object
// show($obj_inst->str);
// show($obj_inst->num);
// show($obj_inst->bob());
// show($obj_inst->calc(1966));
// show($obj_inst->get());
/*#endregion Objects*/



/* CONCATENATION
******************************************/
/*#region Concatenation*/
$name = 'Bob';
$calc_age = 2019 - 1984;
$month = 11;
$show_age = ($month <= 6) ? $calc_age : $calc_age - 1;

//Display var values inside a string. String MUST be indide "" quotation marks (not apostrophies !)
//Not really a concatenation...
$str_with_var_inside = "My name is $name and I'm $show_age years old.";         //show ($str_with_var_inside);

//CLASSIC CONCATENATION
$str_concat = "My name is ". $name . " and I'm " . $show_age . " years old.";   //show ($str_concat);

//TYPICAL HTML CODE CONCATENATION
$logo_src = 'img/logo.svg';
$title = 'My main title...';

$html  = '';
$html .= '<header>';
$html .= '<img src="'.$logo_src.'" alt="My company logo" style="width: 80px;">';
$html .= '<h1>'.$title.'</h1>';
$html .= '</header>';
//echo $html;

//OR...

$html_variante = '
<header>
  <img src="'.$logo_src.'" alt="My company logo" style="width: 80px;">
  <h1>'.$title.'</h1>
</header>
';
//echo $html_variante;
/*#endregion*/
