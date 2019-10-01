<?php
/**
 * SORIN functions and definitions FOR ADMIN PAGES ONLY !
 * @subpackage Sorin
 * @since Sorin 1.0
 */
//DISABLE STAND ALONE ACCESS - Can only be called from functions.php
if(!defined('TEMPLATE_DIR')) {
	exit();
}


/* THEME SUPPORT
==================================================================*/
//Register menus: a custom theme do NOT have Appeareance/Menus !
register_nav_menus([
	'top'    => __('Top-Menu', 'sorin'),
	'footer' => __('Footer-Menu', 'sorin'),
	//'aside' => __('Aside-Menu', 'sorin'),
]);

//OR
//add_theme_support('menus'); // → do not shows locations



/* TINYMCE
==================================================================*/
/* EMOJI TINYMCE
--------------------------------------------*/
function disable_emojicons_tinymce($plugins) {
	
  if(is_array($plugins)) {
    return array_diff( $plugins, array('wpemoji') );
  } else {
    return [];
  }
	
}
// filter to remove TinyMCE emojis
add_filter('tiny_mce_plugins', 'disable_emojicons_tinymce');



/* Callback function to insert 'styleselect'
--------------------------------------------*/
/*
function my_mce_buttons( $buttons ) {
	
	array_unshift( $buttons, 'styleselect');
	return $buttons;
	
}
add_filter('mce_buttons', 'my_mce_buttons');
*/


/* Custom tinymce classes
--------------------------------------------*/
/*
function my_mce_before_init_insert_formats( $init_array ) {  

	require_once( TEMPLATE_INC_DIR.'editor_style_formats.php');
	
	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = wp_json_encode( $style_formats );  
	
	return $init_array;
  
} 
add_filter('tiny_mce_before_init', 'my_mce_before_init_insert_formats');
*/




/* MISC ADMIN
==================================================================*/
/* Limit page excerpt to N characters
--------------------------------------------*/
//THIS IS IN CASE HAND CRAFTED EXCERPT -OR- "MORE" SNIPPET IS NOT USED
function custom_excerpt_length( $length ) {
  return 60;
}
function new_excerpt_more( $more ) {
	return '...';
}

add_filter('excerpt_length', 'custom_excerpt_length', 999 ); 
add_filter('excerpt_more', 'new_excerpt_more');


/* SHOW PUBLISHED post/pages BY DEFAULT !
--------------------------------------------*/
//ADMIN "Posts" LINK
function wcs_change_admin_post_link() {
  global $submenu;
  $submenu['edit.php'][5][2] = 'edit.php?post_status=publish';
}
add_action('admin_menu', 'wcs_change_admin_post_link');


//ADMIN "Pages" LINK
function wcs_change_admin_page_link() {
  global $submenu;
  $submenu['edit.php?post_type=page'][5][2] = 'edit.php?post_type=page&post_status=publish';
}
add_action('admin_menu', 'wcs_change_admin_page_link');


/* Load EDITOR STYLES
--------------------------------------------*/
add_editor_style('css/editor-style.css');


/* ADD EXCERPT IN ADMIN PAGES 
 * By default only posts have this
--------------------------------------------*/
add_post_type_support('page', 'excerpt');


/* ORDER POSTS BY ORDER (not by date)
--------------------------------------------*/
add_post_type_support('post', 'page-attributes');








/**
 * Sub menu class
 *
 * @author Mostafa <mostafa.soufi@hotmail.com>
 */
class Sub_menu {
 
	/**
	 * Autoload method
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_menu', array(&$this, 'register_sub_menu') );
	}

	/**
	 * Register submenu
	 * @return void
	 */
	public function register_sub_menu() {
		add_submenu_page( 
			'options-general.php', 'Submenu title', 'Submenu title', 'manage_options', 'submenu-page', array(&$this, 'submenu_page_callback')
		);
	}

	/**
	 * Render submenu
	 * @return void
	 */
	public function submenu_page_callback() {
		echo '<div class="wrap">';
		echo '<h2>Submenu title</h2>';
		echo '</div>';
	}
 
}
 
//new Sub_menu();



