<?php
/**
 * GLOBALS
 * ----------------------------------------------
 * Globally available variables & init stuff
 * We store the values to "inject" into our functions 
 */
/*#region GLOBALS*/
/* BASE VARS
---------------------------------*/
//DEBUG ARR
$debug_arr  = [];


//GET THE SLUG
$slug = slug();


//QUERY - GET SETTINGS
$page_data = query('page', [$slug]); //debug($page_data);


//QUERY - GET PAGE DATA
$settings = query('settings'); //debug($settings);


/* PARAMS FOR DEPENDENCY INJECTION
----------------------------------*/
$params = [
	'settings' => $settings,
	'page_data' => $page_data
];
/*#endregion*/



/**
 * SITE DATA
 * ----------------------------------------------
 * A minimalist example of data storage
 * For this example we use a file of type "json"
 * In a typical CMS the data is stored in a database
 */
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



/**
 * ROUTER - GET CURRENT SLUG FROM URL
 * ----------------------------------------------
 * A minimalist example of "router"
 * It is used to retrieve data from URI and serve the correct page
 * The code below will only work if a .htaccess file exists
 * The "security" part is still to be done.
 */
/*#region ROUTER*/
function slug() {

  $from_root    = str_replace('/index.php', '', $_SERVER['PHP_SELF']).'/';	//debug('From root: '.$from_root);

  $uri          = $_SERVER['REQUEST_URI'];                        					//debug('URI: '.$uri);
  $uri_page     = str_replace($from_root, '', $uri);              					//debug('URI Page: '.$uri_page);
	
	if(!empty($uri_page)) {
		$get_page = $uri_page;
	}
	else {
		$home = query('home_slug', [1]);
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
function menu_html() {


	//QUERY - GET MENUS (from pages)
  $menus = query('menus');
 
  
  //If pages array is empty stop here with a message
  if(empty($menus)) {
    return "You don't have any menus.";
  }

	//GET URI PAGE
	$get_page = slug();

 //INIT
  $html = '';
	
	
  //START MENU
  $html .= '<ul id="main-menu" class="UPP DF">'.PHP_EOL;


  //START LOOP
  foreach($menus as $item) {

		$slug = $item['slug'];
    $menu = (bool)$item['is_home'] ? '<i class="icon-home"></i>' : $item['menu'];
		
    $active = $slug === $get_page ? ' active' : '';

    //Add to menu html
    $html .= '<li class="menu-item'.$active.'"><a href="'.$slug.'">'.$menu.'</a></li>'.PHP_EOL;

  } //END LOOP


  $html .= '</ul>'.PHP_EOL; //END MENU


  return $html;


}
/*#endregion*/



/**
 * PAGE TITLE
 * ----------------------------------------------
 * Return active page title
 */
function title($page_title = []) {
	return $page_title;
}



/**
 * PAGE CONTENT
 * ----------------------------------------------
 * Return active page content
 */
/*#region CONTENT*/
function content($page_data = []) {


	/* COMMON
	-----------------------------------*/
	$_404_msg = '<p>404. The page you are seeking does not exists.</p>';


  /* IF PAGE DOES NOT EXISTS IN THE DB
	-----------------------------------*/
  if(empty($page_data)) {
    $page_content	= $_404_msg;
  }


	/* EXTRACT PAGE DATA
	-----------------------------------*/
	$content_type	= $page_data['content_type'];
	$content			= $page_data['content'];


	/* RETURN CONTENT
	-----------------------------------*/
	//TYPE IS HTML
	if($content_type === 'html') {
		return $content;
	}


	//TYPE IS INCLUDE
	elseif($content_type === 'include') {
		
		//Check if page exists
		if(file_exists('php/'.$content)) {
			
			//Create a buffer with the file content
			ob_start();
			include('php/'.$content);
			$file_content = ob_get_contents();
			ob_end_clean();
			
			return $file_content;
			
		}
		
		//Page doesn't exists
		else {
			return $_404_msg;
		}
		
	} //End include type


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