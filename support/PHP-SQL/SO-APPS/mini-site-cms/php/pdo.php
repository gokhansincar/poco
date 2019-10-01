<?php
/**
 * PHP DATA OBJECTS or PDO
 * Only one instance is allowed !
 * Based on an samples seen at https://phpdelusions.net/pdo
 */


/* DB INFO
------------------------------------------*/
$db_host    = '127.0.0.1';
$db_name    = 'poco_minisite';
$db_user    = 'root';
$db_pass    = '444666'; //On WAMP by default is '' → empty string; on XAMPP & MAMP by default is 'root'
$db_charset = 'utf8mb4';


/* DSN - Data Source Name (no spaces !!!)
------------------------------------------*/
$dsn = "mysql:host=$db_host;dbname=$db_name;charset=$db_charset";


/* PDO Options
------------------------------------------*/
$pdo_options = [

  PDO::ATTR_EMULATE_PREPARES    => false,
  PDO::ATTR_DEFAULT_FETCH_MODE  => PDO::FETCH_ASSOC,
  PDO::ATTR_ERRMODE             => PDO::ERRMODE_EXCEPTION
  
];


/* PDO OBJECT INSTANCE
------------------------------------------*/
//INIT
$db = null;

//TRY TO GET THE CONNECTION
try {
  $db = new PDO($dsn, $db_user, $db_pass, $pdo_options);
} catch (PDOException $e) {
  echo $e->getMessage();
}
		
  

/* Shortcut handler to connection
------------------------------------------*/
function db() {

	global $db;
	
	if(is_object($db)) {
    return $db; 
  }
  
  else {
    exit("DB IS NOT AN OBJECT! No database connection.");
  }

}