<?php 
/**
	* My first class
	* NOT THE BEST EXAMPLE AS I USE HARD CODED VALUES
	*/
class First {

	protected $first = 'Sorin';			//default public
	protected $last = 'Paun';		//public
	protected $name;	//private: only for this class !
	
	protected $birthyear = 1966;
	protected $age;	//protected: only for this class and sub-classes !
	
	public $people = array();
	
	/*
	 * Default method, starts when instantiating this class (like an onload())
	 */
	function __construct() {
		$this->name();
		$this->age();
		
		$this->people[] = array($this->name => $this->age);
		
		//echo var_export('<tt><pre>'.$this->people.'</pre></tt>');
	}

	function name() {
		$this->name = $this->first .' '.$this->last;
	}
	
	function age() {
		$this->age = (int) date('Y') - $this->birthyear;
	}
	
	function people() {
		foreach($this->people[0] as $person => $age) {
			echo $person .' ('.$age.')<br />';
		}
	}

}


/**
	* My SECOND class
	* NOT THE BEST EXAMPLE AS I USE HARD CODED VALUES
	*/
class Second extends First {

	protected $first = 'Bob';
	protected $last = 'Geldof';
	protected $birthyear = 1948;
	
	function __construct() {
		$this->name();
		$this->age();
		$this->people[] = array($this->name => $this->age);
	}

}
?>