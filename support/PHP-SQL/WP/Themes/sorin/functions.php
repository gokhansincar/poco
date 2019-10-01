<?php
/**
 * SORIN functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 *
 * @package WordPress
 * @subpackage Sorin
 * @since Sorin 1.0
 */

function time_elapsed() {
  $time_elapsed = microtime(true) - $_SERVER['REQUEST_TIME'];
  echo 'SHUTDOWN MICROTIME: '.round($time_elapsed, 3), PHP_EOL;
}
//add_action('shutdown', 'time_elapsed');
 
 
/* MAIN PATHS AND INIT
==================================================================*/
/* MAIN CONTSTANTS - FOR REQUIRES
--------------------------------------------*/
define('TEMPLATE_DIR', str_replace('\\', '/', get_template_directory()).'/'); //reverse slashes for Windows
define('TEMPLATE_INC_DIR', TEMPLATE_DIR.'inc/');


//GET PATH TO MISC DIRS - FOR NORMAL LINKS
function get_path_to($end_path = '', $dir = 'theme') {

	$wp_content		= '/wp-content/';

	if($dir === 'theme') {
		$active_theme	= get_template_directory_uri().'/';
		return $active_theme.$end_path;
	}
	elseif($dir === 'uploads') {
		$upload_dir = wp_upload_dir();
		$uploads_dir = $upload_dir['baseurl'];
		return $uploads_dir.'/'.$end_path;
	}
	
}



/* PHP MOBILE DETECT ?
--------------------------------------------*/
if(!class_exists( 'Mobile_Detect', false)) {
	require_once TEMPLATE_INC_DIR . 'Mobile_Detect.php';
}



//SHOWS ALL FUNCTIONS THAT ARE LOADED !
//add_action('all', create_function('', 'var_dump( current_filter() );') );



/* THEME SUPPORT
==================================================================*/
//ADD TITLE TAG IN HEAD
add_theme_support('title-tag');


/* DISABLE WP DEFAULTS !
==================================================================*/
/* DISABLE DEFAULT EMBED SCRIPTS
--------------------------------------------*/
function remove_wp_defaults() {
	
	
	//Turn off oEmbed auto discovery.
	//Don't filter oEmbed results.
	remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
	
	
	/* REMOVE DEFAULTS FROM WP HEAD
	--------------------------------------------*/
	// Remove oEmbed discovery links.
	remove_action('wp_head', 'wp_oembed_add_discovery_links');
	
	// Remove oEmbed-specific JavaScript from the front-end and back-end.
	remove_action('wp_head', 'wp_oembed_add_host_js');
	
	remove_action('wp_head', 'feed_links_extra', 3); //disable feeds
	remove_action('wp_head', 'rsd_link'); //disable EditURI/RSD Weblog Client Link
	remove_action('wp_head', 'wp_generator'); //disable meta "generator"
	remove_action('wp_head', 'wlwmanifest_link'); //disable Windows Live Writer Manifest Link
	
	
	/* Show REST API only for LOGGED USERS
	 * Require Authentication for All Reque​sts
	 * OR Pugin: https://wordpress.org/plugins/disable-wp-rest-api/
	--------------------------------------------*/
	add_filter('rest_authentication_errors', function($result) {
		
		if(!empty($result)) {
			return $result;
		}
		if(!is_user_logged_in()) {
			return new WP_Error('rest_not_logged_in', 'You are not currently logged in.', array('status' => 401 ) );
		}
		
		return $result;
		
	});
	
	//DISABLE HEADER REST API
	remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
	remove_action( 'xmlrpc_rsd_apis', 'rest_output_rsd' );
	remove_action( 'template_redirect', 'rest_output_link_header', 11 );

	add_filter('rest_enabled', '__return_false');
	add_filter('rest_jsonp_enabled', '__return_false');

	

	/* DISABLE WP EMOJI (SHIT)
	 * https://wordpress.stackexchange.com/a/185578
	--------------------------------------------*/
	remove_action('admin_print_styles', 'print_emoji_styles');
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_head', 'print_emoji_detection_script', 7 );
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	remove_filter('the_content_feed', 'wp_staticize_emoji');
	remove_filter('comment_text_rss', 'wp_staticize_emoji');
	
	add_filter('emoji_svg_url', '__return_false');


}
add_action('init', 'remove_wp_defaults');


/* DISABLE Gutenberg CSS
--------------------------------------------*/
function wps_deregister_styles() {
	wp_dequeue_style('wp-block-library');
}
add_action('wp_print_styles', 'wps_deregister_styles', 100 );



/* ADD CUSTOM STYLES AND SCRIPTS
--------------------------------------------*/
function add_custom_styles_and_scripts() {

	wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,700', false, '1.0.0', 'screen');
	wp_enqueue_style('style', get_template_directory_uri() . '/style.css', false, '1.0.0', 'screen');
	wp_enqueue_style('editor-style', get_template_directory_uri() . '/css/editor-style.css', false, '1.0.0', 'screen');
	
}
add_action('wp_enqueue_scripts', 'add_custom_styles_and_scripts');


/* ADMIN PAGES ONLY
==================================================================*/
if(is_admin() && is_user_logged_in()) {

	require_once( TEMPLATE_INC_DIR.'admin_functions.php');

}