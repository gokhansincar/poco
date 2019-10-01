<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Sorin
 * @since Twenty Sixteen 1.0
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	$post = get_post(); //var_dump($post);
	$content = apply_filters('the_content', $post->post_content); 
	echo $content;
	?>
</article>
