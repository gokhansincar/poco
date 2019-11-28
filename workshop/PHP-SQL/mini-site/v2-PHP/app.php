<?php
// Default page key
$page = 'index';

//GET the key from URL if is set.
if( isset($_GET['page']) ) {
  $page = $_GET['page'];
}

//Compact version
// $page = isset($_GET['page']) ? $_GET['page'] : 'index';

/* MENUS
-----------------------------------*/
function pages($page = '', $location = '') {

  // global $page;

  //PAGES DATA
  $pages_arr = [

    'index' => [
      'title' => 'Title for INDEX page',
      'menu' => 'HOME'
    ],

    'work' => [
      'title' => 'Title for WORK page',
      'menu' => 'WORK'
    ],

    'blog' => [
      'title' => 'Title for BLOG page',
      'menu' => 'BLOG'
    ],

    'contact' => [
      'title' => 'Title for CONTACT page',
      'menu' => 'CONTACT'
    ]

  ];


  if($location === 'head') {
    $title = $pages_arr[$page]['title']; //echo($title);
    return $title;
  }


  //DISPLAY MENUS - Loop inside the array
  foreach($pages_arr as $key => $item) {
    // var_dump($key);

    $active = ($page === $key) ? ' active' : '';

    echo '<li class="menu-item'.$active.'"><a href="?page='.$key.'">'.$item['menu'].'</a></li>';

  }

}