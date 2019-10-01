<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Sorin
 * @since SORIN 1.0
 */
//HEADER - header.php
get_header();


//IF ANY POSTS
if(have_posts()) :
	
	echo '<main class="main">'.PHP_EOL;
	
	//START LOOP
	while(have_posts()) {
	
		//Get post detail
		the_post();
		
		
		
		//TITLE AND INFO
		echo '<h2 id="post-'.get_the_ID().'">';
		echo '<a href="'.get_the_permalink().'" rel="bookmark" title="Permanent Link to '.get_the_title().'">'.get_the_title().'</a></h2>';
		echo '<small>'.get_the_time('F jS, Y').', by <?php get_the_author(); ?></small>';
		
		//CONTENT
		the_content();
		//get_template_part('content'); // → content.php
		
		if(is_home()) {
			echo '<hr>'.PHP_EOL;
		}
			
	} //END LOOP
	
	echo '</main>'.PHP_EOL;
	
endif;


//SIDEBAR - sidebar.php
//get_sidebar();

//FOOTER - footer.php
get_footer();
