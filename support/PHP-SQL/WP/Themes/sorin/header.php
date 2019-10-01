<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Sorin
 * @since Sorin 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <header id="header" class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="<?php echo home_url(); ?>"><img src="<?php echo get_path_to('brand/logo.svg', 'uploads'); ?>" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <?php wp_nav_menu(['menu' => 'Top-Menu']); ?>
    </nav>

  </header>
