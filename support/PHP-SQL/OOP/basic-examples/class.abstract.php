<?php 
/**
 * Second class
 * abstract class
 * learning what is abstract
 */
abstract class Animal {

	public function name() {
		
	}
	
	//Force method definition with abstract
	abstract protected function habitat();
	
	abstract protected function sound();
	
	abstract protected function max_age();
	
	public function printOut() {
		echo $this->name() . "<br />";
		echo $this->habitat() . "<br />";
		echo $this->sound() . "<br />";
		echo $this->max_age() . "<br />";
	}
	
	public function returnavalue($value) {
		echo 'This a value returned by the abstract class: ' . $value . "<br />";
	}
}

/**
 * Class Dog
 * extends Animal
 */
class Dog extends Animal {
	
	public function name() {
  	return "Max the dog";
  }
	
	protected function habitat() {
  	return "Near humans or wild";
  }
	
	protected function sound() {
  	return "WOOF!";
  }
	
	protected function max_age() {
  	return 15;
  }
	
}

/**
 * Class Cow
 * extends Animal
 */
class Cow extends Animal {
	
	//missing name() method - possible because is set as public in Animal class
	
	protected function habitat() {
  	return "Near humans";
  }
	
	protected function sound() {
  	return "Mooooo!";
  }
	
	protected function max_age() {
  	return 30;
  }
	
}
?>