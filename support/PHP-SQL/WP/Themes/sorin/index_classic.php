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
?>
<?php
//HEADER - header.php
get_header();


//IF ANY POSTS
if (have_posts()) :

	//START LOOP
	while (have_posts()) :
	
		//Get post detail
		the_post(); ?>

		<h2 id="post-<?php the_ID(); ?>">
		<a href="<?php the_permalink(); ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
		<small><?php the_time('F jS, Y'); ?>, by <?php get_the_author(); ?></small>

<?php
		//Post content
		the_content();
			
	endwhile; //END LOOP
	
endif;

//SIDEBAR - sidebar.php
//get_sidebar();

//FOOTER - footer.php
get_footer();
?>
