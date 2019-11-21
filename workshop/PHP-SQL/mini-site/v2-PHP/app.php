<?php
// Default Page Key
$page = 'index';

// GET the key from URL if is set
if( isset($_GET['page']) ){
$page = $_GET['page']; // echo $page;
}

// compact version
// $page = isset($_GET['page']) ? $_GET['page'] : 'index';

/* MENUS
-----------------------------------------------------------------------*/ 
function pages($page = '', $location = '') {

    // global $page;


    // PAGES DATA
    $pages_arr = [
        'index' => [
           'title' => 'Title for INDEX page',
           'menu' => 'HOME'
        ],

        'work' => [
            'title' => 'Title for WORK page',
            'menu' => 'WORK'
         ],

         'contact' => [
            'title' => 'Title for CONTACT page',
            'menu' => 'CONTACT'
         ]
    ];

    if($location === 'head') {
       $title = $pages_arr[$page]['title'];  // echo($title); 
       return $title;
    }
   

    // DISPLAY MENUS - LOOP INSIDE THE ARRAY
    foreach($pages_arr as $key => $item) {
    //   var_dump($key);

    $active = ($page === $key) ? ' active' : '';

    echo '<li class="menu-item'.$active.'"><a href="?page='.$key.'">'.$item['menu'].'</a></li>';

    }

}