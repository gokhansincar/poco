<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Sorin
 * @since Sorin 1.0
 */

get_header(); ?>

  <main id="main" class="site-main" role="main">

    <section class="error-404 not-found">
      <header class="page-header">
        <h1 class="page-title"><?php _e( 'Oops! That page can&rsquo;t be found...', 'sorin' ); ?></h1>
      </header>

      <div class="page-content">
        <p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'sorin' ); ?></p>
        <?php get_search_form(); ?>
      </div>
    </section>

  </main>

  <?php //get_sidebar( 'content-bottom' ); ?>

<?php get_footer(); ?>
