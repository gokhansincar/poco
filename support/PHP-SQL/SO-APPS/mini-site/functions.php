<?php
ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_NOTICE);


//TEST HOISTING
// if( function_exists('site_info') ) {
//   show("Yes, the function 'site_info' exists!");
// }


/* GLOBALS / INIT
--------------------------------------*/
$get_page   = router(); //show($get_page);
$site_info  = site_info(); //show($site_info);


/* PARAMETERS
--------------------------------------*/
$params = [
  'get_page'    => $get_page,
  'site_data'   => $site_info['site-data'],
  'pages'       => $site_info['pages'],
  'active_page' => $site_info['pages'][$get_page]
];



/* ROUTER
--------------------------------------*/
function router() {

  $self = str_replace('index.php', '', $_SERVER['PHP_SELF']); //show($self);
  $slug = str_replace($self, '', $_SERVER['REQUEST_URI']); //show($slug);

  if( empty($slug) ) {
    $slug = 'index';
  }

  return $slug;
  //$root_arr = explode('/', $root); show($root_arr);
  //$last = end($root_arr); show('Last: '.$last);

}
//show( router() );
 


/* MENU HTML ITEMS
--------------------------------------*/
function site_info() {

  //GET JSON DATA
  $json_file = 'site-data.json';

  if( ! file_exists($json_file) ) {
    //return [];
    //die("You don't have the site data file!");
    exit("You don't have the site data file!");
  }

  $json_content = file_get_contents($json_file);
  $site_data_arr = json_decode($json_content, true);

  return $site_data_arr;

}


/* MENU HTML ITEMS
--------------------------------------*/
function menu_items($params = []) {

  $pages = $params['pages'];
  $get_page = $params['get_page'];

  $menu_items = '';

  if(!$pages) {
    return 'You have no pages !';
  }

  foreach($pages as $key => $value) {
  
    $menu = $value['menu'];
    $active = ($get_page === $key) ? ' active' : '';
  
    $menu_items .= '<li class="menu-item'.$active.'"><a href="'.$key.'">'.$menu.'</a></li>'.PHP_EOL;
  
  }

  return $menu_items;

}


/* CONTENT
--------------------------------------*/
function content($get_page = 'index') {

  $html_file_path = 'html/'.$get_page.'.html';

  if(file_exists($html_file_path)) {
    $html_page = file_get_contents($html_file_path);
  }
  else {
    $html_page = '404. The page you are looking for in not here.';
  }

  return $html_page;

}


/* TITLE
--------------------------------------*/
function title($zone = 'content', $params) {

  $site_data = $params['site_data'];
  $active_page = $params['active_page'];

  $global_title = $site_data['global_title'];
  $page_title = $active_page['title'];

  if($zone === 'head') {
    return $page_title.' - '.$global_title;
  }
   
  return $page_title;

}


/* SHOW FUNCTION
--------------------------------------*/
function show($data = '') {

  echo '<pre>';
  print_r($data);
  echo '</pre>';

}
