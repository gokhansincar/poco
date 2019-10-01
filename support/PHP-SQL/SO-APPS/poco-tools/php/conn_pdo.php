<?php
/**
 * PDO database; only one connection is allowed. 
 * Based on an sample seen at lynda.com
 */
class Conn extends PDO {
	
  private $_connection;
	
  // Store the single instance.
  private static $_instance;


  /**
   * Get an instance of the Database.
   * @return Database 
   */
  public static function getInstance() {
		
    if (!self::$_instance) {
      self::$_instance = new self();
    }
    return self::$_instance;
		
  }


  /**
   * Constructor 
   */
  public function __construct() {
		
		//PDO Options
		$pdo_options = array(
		
			//PDO::ATTR_PERSISTENT => true,
			PDO::ATTR_EMULATE_PREPARES => false,
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
			
		);
		
		//PDO Connection
		try {
			$this->_connection = new PDO('mysql:host='._HOST_PDO.';dbname='._DB_PDO, _USER_PDO, _PASS_PDO, $pdo_options);
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
		
  }


  /**
   * Empty clone magic method to prevent duplication. 
   */
  private function __clone() {}


  /**
   * Get the pdo connection. 
   */
  public function getConnection() {
		return $this->_connection;
  }
	
}

//Shortcut handler to connection ___________________________________________
function db() {

	$dbi = Conn::getInstance();
	$db = $dbi->getConnection();
	
	return $db;

}
//__________________________________________________________________________
?>