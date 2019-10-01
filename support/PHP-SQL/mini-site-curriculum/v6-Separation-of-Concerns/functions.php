<?php
/* ERROR MANAGEMENT
*************************************************/
ini_set('display_errors', 1); //0 to disable
error_reporting(E_ALL);



/* GLOBALS
*************************************************/
/*#region GLOBALS*/
/* SITE DATA AND GET PAGE
----------------------------------*/
$site_data  = site_data();
$get_page   = $_GET['page'] ?? 'home';


/* PARAMS FOR DEPENDENCY INJECTION
----------------------------------*/
$params = [
  'get_page'    => $get_page,
  'site_info'   => $site_data['site_info'],
  'pages'       => $site_data['pages'],
  'page_data'   => $site_data['pages'][$get_page]
];

//CONSTANTS - An alternative to the dependency injection
//ONLY PHP 7 ! See https://stackoverflow.com/a/27413238
//define('SITE_DATA', $site_data); //debug(SITE_DATA);
//define('GET_PAGE', $get_page); //debug(GET_PAGE);
/*#endregion*/



/* GET SITE DATA
*************************************************/
/*#region SITE DATA*/
function site_data() {

  $json_file = 'site_data.json';

  //IF FILE EXIST STORE THE CONTENTS INTO A VAR
  $site_data_json = (file_exists($json_file)) ? file_get_contents($json_file) : '';
  
  //IF NOT EMPTY CONVERT JSON TO ARRAY
  $site_data = (trim($site_data_json) !== false) ? json_decode($site_data_json, true) : [];

  //RETURN DATA []
  return $site_data;

}
/*#endregion*/



/* MENU (HTML)
*************************************************/
/*#region MENU*/
function menu_html($params = []) {

  $pages = $params['pages'];
  $get_page = $params['get_page'];

  //If pages array is empty stop here with a message
  if(empty($pages)) {
    return "You don't have any pages.";
  }

  //INIT
  $html = '';

  //START MENU
  $html .= '<ul class="menu">'.PHP_EOL;


  //START LOOP
  foreach($pages as $page_key => $page_info) {

    $menu = $page_info['menu'];
    $active = $page_key === $get_page ? ' active' : '';

    //Add to menu html
    $html .= '<li class="menu-item'.$active.'"><a href="?page='.$page_key.'">'.$menu.'</a></li>'.PHP_EOL;

  } //END LOOP


  $html .= '</ul>'.PHP_EOL; //END MENU


  return $html;

}
/*#endregion*/



/* PAGE TITLE(S)
*************************************************/
/*#region PAGE TITLE*/
function title($params = [], $return = '') {

  if($return === 'global') {
    return $params['site_info']['global_title'];
  }

  //If not global return this...
  return $params['page_data']['title'];

}
/*#endregion*/



/* PAGE CONTENT
*************************************************/
/*#region PAGE CONTENT*/
function content($params = []) {

  //PREPARE FILE PATH
  $html_file        = $params['get_page'] . '.html'; 
  $html_file_path   = 'html/'.$html_file; //echo $html_file_path;


  //GET FILE CONTENT
  if(file_exists($html_file_path)) {
    $content = file_get_contents($html_file_path);
  }
  else {
    $content = '404. The page you are looking for is not here.';
  }


  return $content;

}
/*#endregion*/



/* DEBUG
*************************************************/
/*#region DEBUG*/
function debug($data) {

  echo '<pre>';
  print_r($data);
  echo '</pre>';

}
/*#endregion*/