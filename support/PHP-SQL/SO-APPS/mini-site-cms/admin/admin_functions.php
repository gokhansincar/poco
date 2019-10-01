<?php
/**
 * ERROR REPORTING
 * ----------------------------------------------
 * DONE WITH .htaccess
 * We call this "server level" errors
 */



/**
 * START SESSION
 * ----------------------------------------------
 * We need this at the very top so we can check
 * admin session before doing something else
 */
session_start();
//var_dump($_SESSION);
//$hash = password_hash('bobisgreat!', PASSWORD_DEFAULT); //show($hash);

/**
 * GLOBALS
 * ----------------------------------------------
 * Globally available variables & init stuff
 * We store the values to "inject" into our functions 
 */
/*#region GLOBALS*/
//DEBUG ARR
$debug_arr  = [];


//ADMIN PAGES ARR
$admin_pages = [

  //PAGES
  'pages' => [
    'menu'    => 'PAGES',
    'file'    => 'pages.php',
    'actions' => [
      'pages',
      'edit-page',
      'new-page'
    ]
  ],

  //SETTINGS
  'settings' => [
    'menu' => 'SETTINGS',
    'file'  => 'settings.php',
    'actions' => [
      'settings',
      'edit-settings',
      'new-settings',
    ]
  ],

  //LOGIN
  'login' => [
    'menu'    => 'LOGIN',
    'file'    => 'login.php',
    'actions' => [
      'login',
      'check-login',
      'logout'
    ],
  ],

];


//ADMIN MAIN URI VARS
$params = [
  'admin_pages' => $admin_pages,
  'page'        => req('page'),
  'action'      => req('action'),
  'crud-action' => req('crud-action')
];




//----------------------------- ↓↓↓ FUNCTIONS↓↓↓  -----------------------------//




/**
 * ADMIN PAGE
 * ----------------------------------------------
 */
/*#region ADMIN PAGE*/
function admin_page($params = []) {


  //1. FORCE LOGIN PAGE IF NOT ADMIN SESSION !
  if(!is_admin()) {
    ob_start();
    include('login.php');
    $admin_content = ob_get_contents();
    ob_end_clean();

    return $admin_content;
  }


  //2. GET PAGE
  $page = $params['page'];


  //IF EMPTY PAGE - Redirect to the default admin page
  if(empty($page)) {
    redirect('?page=pages');
  }

  //ADMIN FILE
  $file = $page.'.php'; //var_dump($file);

  //REQUIRE FILE...
  if(file_exists($file)) {
    
    //ADMIN VARS - Will be available on admin page we call bellow
    $admin_pages    = $params['admin_pages'];
    $action         = $params['action'];
    $valid_actions  = $admin_pages[$page]['actions'] ?? []; //var_dump($valid_actions);

    //CHECK IF ACTION IS VALID
    if(!empty($action) && !in_array($action, $valid_actions)) {
      return "Invalid action, cannot display the content.";
    }

    //ELSE... BUFFER THE FILE CONTENT
    ob_start();
    include($file);
    $admin_content = ob_get_contents();
    ob_end_clean();
    
  }
  else {
    $admin_content = "The file you seek doesn't exists!";
  }


  return $admin_content;


}
/*#endregion*/



/**
 * ADMIN HEADER
 * ----------------------------------------------
 */
/*#region HEADER*/
function admin_header($params = []) {

  //TITLE AND BUTTONS
  $title      = $params['title'];
  $buttons    = $params['buttons'];

  //GET MESSAGE (if any)
  $get_msg    = req('msg') ?? false;
  $msg_type   = req('error') ? 'error' : 'success';

  $msg        = $get_msg ? ' - <span class="msg '.$msg_type.'">'.$get_msg.'</span>' : '';

  

  $html = '
  <header class="admin-header uk-flex uk-flex-between uk-flex-top">
    <h1 class="header-left uk-h3">'.$title.$msg.'</h1>
    <div class="header-right">'.$buttons.'</div>
  </header>
  ';

  return $html;

}
/*#endregion*/



/**
 * REQUEST
 * ----------------------------------------------
 * MERGE $_GET & $_POST ARRAYS
 */
/*#region REQUEST*/
function req($val = '') {

  //MERGE POST AND GET METHODS
  $req = [];
  $req = array_merge($_POST, $_GET) ;

  //RETURN A VALUE
  if(!empty($val) && !empty($req)) {
    return $req[$val];
  }

  //RETURN THE REQUEST ARRAY
  elseif(empty($val) && !empty($req)) {
    return $req;
  }
  

  return false;

}
/*#endregion*/



/**
 * CHECK LOGIN
 * ----------------------------------------------
 * MERGE $_GET & $_POST ARRAYS
 */
/*#region CHECK LOGIN*/
function check_login($post = []) {


  $error = true;
  //var_dump($post); exit();

  //POST HAS ITEMS
  if(!empty($post)) {

    $email = $post['email'];
    $pass = $post['pass'];
    
    //BOTH INPUTS HAVE VALUES
    if(!empty($email) && !empty($pass)) {

      //QUERY USERS
      $sql = "SELECT fullname, email, pass FROM users WHERE email = ? LIMIT 1";

      $sth = db()->prepare($sql);
      $sth->execute([$email]);
      $user = $sth->fetch(); //var_dump($user); exit();

      //A USER IS FOUND...
      if($user) {

        //THE PASSWORD IS A MATCH
        if(password_verify($pass, $user['pass'])) {
          $_SESSION['admin']['name']	= $row['fullname'];
          $_SESSION['admin']['email']	= $row['email'];
          $_SESSION['is_admin'] = true;

          $error = false;
        }

      } //END A USER IS FOUND

    } //END email & pass are not empty

  } //END POST HAS ITEMS


  if($error) {
    redirect('index.php?page=login&error=true');
  }
  else {
    redirect('index.php?page=pages');
  }


}
/*#endregion*/


/**
 * LOGOUT
 * ----------------------------------------------
 * MERGE $_GET & $_POST ARRAYS
 */
/*#region LOGOUT*/
function logout() {

  unset(
    $_SESSION['admin'],
    $_SESSION['is_admin']
  );

  redirect('../');

}
/*#endregion*/



/**
 * IS ADMIN SHORTCUT
 * ----------------------------------------------
 * Check admin session
 */
/*#region ADMIN*/
function is_admin() {

  return (bool)$_SESSION['is_admin'];

}
/*#endregion*/



/**
 * REDIRECT SHORCCUT
 * ----------------------------------------------
 */
/*#region REDIRECT*/
function redirect($url) {
	
	if (!headers_sent()) {
		header('Location:'.$url);
		exit();
	}

}
/*#endregion*/



/**
 * FIND STRING
 * ----------------------------------------------
 */
/*#region FIND STRING*/
function findstr($find, $str) {
	
	if(is_array($str)) {
		return false;
	}
	
	$pos = ($str != '') ? strpos($str, $find) : false;
	
	if($pos !== false) {
    return true;
  }

  return false;
	
}
/*#endregion*/



/**
 * MENU (HTML)
 * ----------------------------------------------
 * An example of a dynamic menu
 * Check the active page and add a CSS class
 */
/*#region MENU*/
function admin_menu($params = []) {

  if(!is_admin()) {
    return false;
  }

  //PARAMS
  $admin_pages = $params['admin_pages'];


  if(empty($admin_pages)) {
    return 'Admin pages array is empty!';
  }


  //START LIST
  $html = '<ul id="admin-menu" class="menu">'.PHP_EOL;


  //START LOOP
  foreach($admin_pages as $key => $page) {

    //SKIP CRUD MENU
    if($key === 'crud') {
      continue;
    }

    //MENU STRING AND LINK
    if($key === 'login') {
      $menu = (is_admin()) ? 'LOGOUT' : $page['menu'];
      $uri_extra = '&action=logout';
      $id_attr = ' id="logout"';
    }
    else {
      $menu = $page['menu'];
      $uri_extra = '';
      $id_attr = '';
    }

    $active = $key === req('page') ? ' active' : '';

    $html .= '<li class="menu-item'.$active.'"><a'.$id_attr.' href="?page='.$key.$uri_extra.'">'.$menu.'</a></li>';

  } //END LOOP


  $html .= '</ul>'.PHP_EOL; //END LIST


  return $html;


}
/*#endregion*/



/**
 * SLUGIFY A STRING
 * ----------------------------------------------
 * Thanks to: https://stackoverflow.com/a/10152907
 */
/*#region SLUGIFY*/
function slugify($text, $strict = true) {
	
	$text = html_entity_decode($text, ENT_QUOTES, 'UTF-8');
	
	//replace dots by -
	if($strict) {
		$text = str_replace(".", "-", $text);
	}
	
	//replace non letter or digits by -
	$text = preg_replace('~[^\\pL\d.]+~u', '-', $text);

	//trim
	$text = trim($text, '-');
	setlocale(LC_CTYPE, 'en_GB.utf8');
	
	//transliterate
	if(function_exists('iconv')) {
		$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
	}

	//lowercase
	$text = strtolower($text);
	
	//remove unwanted characters
	$text = preg_replace('~[^-\w.]+~', '', $text);
  
  //return something weird if the text is empty so we can see a result
	if(empty($text)) {
		return 'empty_$';
	}

	
	return $text;
	
}
/*#endregion*/


/**
 * PDO NUM ROWS
 * ----------------------------------------------
 * Count SQL table items
 */
/*#region PDO NUM ROWS*/
function pdo_num_rows($endquery, $params = []) {
	
	$sql = "SELECT COUNT(*) FROM ".$endquery;
	
	try {
		
		$sth = db()->prepare($sql);
		$sth->execute($params);
		$tot = $sth->fetchColumn();
		
	} catch(PDOException $e) {
		show($e->getMessage());
	}
	
	return (int)$tot;

}
/*#endregion*/



/**
 * SIMPLE SHOW CODE
 * ----------------------------------------------
 * A simple code display with <pre> formatting
 */
/*#region SHOW*/
function show($data = '', $do_exit = false) {
	
	echo '<pre>';
	print_r($data);
  echo '<pre>';
  
  if($do_exit) {
    exit();
  }
	
}
/*#endregion*/



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