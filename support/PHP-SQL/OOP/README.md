# OBJECT ORIENTED PROGRAMMING
A quick look into PHP OOP

<br>

## Objects ARE instances of classes:

```php
<?php
//A CLASS
class Animal {

   //CLASS PROPERTIES
   private $family;
   private $food;

   //CLASS METHODS
   public function __construct($family, $food) {
      $this->family = $family;
      $this->food   = $food;
   }
   public function get_family() {
      return $this->family;
   }
   public function set_family($family) {
      $this->family = $family;
   }
   public function get_food() {
      return $this->food;
   }
   public function set_food($food) {
      $this->food = $food;
   }

}

//AN INSTANCE (of a class)
$animal = new Animal('Feline', 'Meat');
?> 
```


## Inheritance :

```php
<?php
class Cow extends Animal {

   private $owner;

   public function __construct($family, $food) {
      parent::__construct($family, $food);
   }
   public function set_owner($owner) {
      $this->owner = $owner;
   }
   public function get_owner() {
      return $this->owner;
   }

}

class Lion extends Animal {
   public function __construct($family, $food) {
      parent::__construct($family, $food);
   }
}
?>
```

<br>
---
<br>

## RESSOURCES
[Beginning OOP in PHP](https://www.slideshare.net/dstockto/beginning-oop-in-php)<br>
[PHP Object-Oriented Programming Beginner's Guide](https://www.startutorial.com/homes/oo_beginner)<br>
[Laracasts - Object-Oriented Bootcamp](https://laracasts.com/series/object-oriented-bootcamp-in-php)<br>
