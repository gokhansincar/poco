<?php
/**
 * ERROR REPORTING
 * ----------------------------------------------
 * display_errors: FOR DEV USE 1, FOR PROD USE 0
 * We display all errors except NOTICE
 */
ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_NOTICE);


/**
 * START SESSION
 * ----------------------------------------------
 */
session_start();


/**
 * GLOBALS
 * ----------------------------------------------
 * Globally available variables & init stuff
 * We store the values to "inject" into our functions 
 */
/*#region GLOBALS*/
/* BASE VARS
----------------------------------*/
//DEBUG ARR
$debug_arr  = [];

//GET THE SLUG (URI current page string)
$get_page = router();                       //debug($get_page);


/* PARAMS FOR DEPENDENCY INJECTION
----------------------------------*/
$params = [
  'get_page'    => $get_page,
  'site_data'   => query('settings'),
  'menus'       => query('menus'),
	'active_page' => query('page', [$get_page])
];
/*#endregion*/



/**
 * IS ADMIN ?
 * ----------------------------------------------
 * Check admin session
 */
/*#region ADMIN*/
function is_admin() {

  return (bool)$_SESSION['is_admin'];

}
/*#endregion*/



/**
 * ROUTER - GET CURRENT SLUG FROM URL
 * ----------------------------------------------
 * A minimalist example of "router"
 * It is used to retrieve data from URI and serve the correct page
 * The code below will only work if a .htaccess file exists
 * The "security" part is still to be done.
 */
/*#region ROUTER*/
function router() {

  $from_root    = str_replace('/index.php', '', $_SERVER['PHP_SELF']).'/';	//debug('From root: '.$from_root);

  $uri          = $_SERVER['REQUEST_URI'];                        					//debug('URI: '.$uri);
  $uri_page     = str_replace($from_root, '', $uri);              					//debug('URI Page: '.$uri_page);
	
	if(!empty($uri_page)) {
		$get_page = $uri_page;
	}
	else {
		$home = query('home_slug');
		$get_page	= $home['slug'];
	}
  
	//debug('Page: '.$get_page);
  
  return $get_page;

}
/*#endregion*/



/**
 * MENU (HTML)
 * ----------------------------------------------
 * An example of a dynamic menu
 * Check the active page and add a CSS class
 */
/*#region MENU*/
function menu_html($params = []) {


	//QUERY - GET MENUS (from pages)
  $menus = query('menus');
 
  
  //If pages array is empty stop here with a message
  if(empty($menus)) {
    return "You don't have any menus.";
  }

	//GET URI PAGE
	$get_page = $params['get_page'];

 //INIT
  $html = '';
	
	
  //START MENU
  $html .= '<ul id="main-menu" class="menu UPP DF">'.PHP_EOL;


  //START LOOP
  foreach($menus as $item) {

    $slug = $item['slug'];
    $is_home = (bool)$item['is_home'];
    
		//CSS
    $active = $slug === $get_page ? ' active' : '';
    $is_home_class = $is_home ? ' is-home' : '';

    //Menu text
    $menu = $is_home ? '<span class="is-home">⌂</span>' : $item['menu'];

    //Add to menu html
    $html .= '<li class="menu-item'.$active.$is_home_class.'"><a href="'.$slug.'">'.$menu.'</a></li>'.PHP_EOL;

  } //END LOOP


  //Add to menu html
  $html .= '<li class="menu-item"><a href="admin/">LOGIN</a></li>'.PHP_EOL;


  $html .= '</ul>'.PHP_EOL; //END MENU


  return $html;


}
/*#endregion*/



/**
 * PAGE TITLE
 * ----------------------------------------------
 * Return active page title
 */
/*#region TITLE*/
function title($zone = 'content', $params = []) {


  /* GET DATA FROM PARAMS
  -----------------------------------*/
  $site_data    = $params['site_data'];
  $active_page  = $params['active_page'];

  $global_title = $site_data['global_title'];
  $page_title   = $active_page['title'];


  /* IF ACTIVE PAGE ARRAY IS EMPTY
	-----------------------------------*/
  if(empty($page_title)) {
    $page_title	= "Page not found";
  }


  /* RETURN TITLES
	-----------------------------------*/
  if($zone === 'head') {
    return $page_title.' - '.$global_title;
  }
   

  return $page_title;


}
/*#endregion*/



/**
 * PAGE CONTENT
 * ----------------------------------------------
 * Return active page content
 */
/*#region CONTENT*/
function content($params = []) {


	/* GET DATA FROM PARAMS
  -----------------------------------*/
  $active_page = $params['active_page'];
  

  /* IF ACTIVE PAGE ARRAY IS EMPTY
	-----------------------------------*/
  if(empty($active_page)) {
    return '<p>404. The page you are seeking does not exists.</p>';
  }


	/* EXTRACT PAGE CONTENT
	-----------------------------------*/
	return $active_page['content'];


}
/*#endregion*/


/**
 * SIMPLE SHOW CODE
 * ----------------------------------------------
 * A simple code display with <pre> formatting
 */
function show($data = '') {
	
	echo '<pre>';
	print_r($data);
	echo '<pre>';
	
}



/**
 * DEBUGGER
 * ----------------------------------------------
 * An elaborate debug function to display test code
 */
/*#region DEBUGGER*/
//COLLECT DEBUG DATA
function debug($data = '') {

  if(empty($data)) {
    return false;
  }

  $bt         = debug_backtrace();
  $file_arr   = explode(DIRECTORY_SEPARATOR, $bt[0]['file']);
  $file       = array_pop($file_arr);
  $line       = $bt[0]['line'];

  $GLOBALS['debug_arr'][] = [
    'file' => $file,
    'line' => $line,
    'data' => $data
  ];

}

//DISPLAY DEBUG
function debug_view($debug_arr) {
 
  if(empty($debug_arr)) {
    return false;
  }
  
  $tot_items = count($debug_arr);
  $n = 0;

  echo '<div style="position:absolute;left:0;bottom:0;width:50%;max-width:600px;max-height:50%;overflow:auto;padding:.5em;font-family:monospace;background:#fff;">';
  echo '<h3 style="font-size:1em;color:#f00;">Debug items</h3>';
  
  echo '<ul style="list-style:none;background-color:rgba(240,240,240,.5);font-size:.9em;padding:1em;border:solid 1px #ddd;">';
  
  //START LOOP
  foreach($debug_arr as $item) {
    
    $n++;

    $style = ($n < $tot_items) ? ' style="padding:0 0 1em 0;margin:0 0 1em 0;border-bottom:dotted 1px #ccc;"' : '';
    echo '<li'.$style.'>';
   
    //DATA
    echo '<pre>';
    print_r($item['data']);
    echo '</pre>';
    
    //FILE INFO
    echo PHP_EOL.'<em style="color:#ccc;font-family:serif;font-style:italic;">' . $item['file'] . ':' . $item['line'] . '</em>' . PHP_EOL;
    
    echo '</li>';
    
  } //END LOOP

  echo '</ul>';
  echo '</div>';

}
/*#endregion*/