<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Sorin
 * @since Twenty Sixteen 1.0
 */
?>

  <footer id="footer" class="footer" role="contentinfo">
  THE <strong>footer.php</strong> IS HERE !
    <?php wp_nav_menu(['menu' => 'Footer-Menu']).PHP_EOL; ?>
  </footer>
  
  <?php wp_footer(); ?>
</body>
</html>
