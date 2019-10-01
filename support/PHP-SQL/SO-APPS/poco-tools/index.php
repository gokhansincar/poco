<?php
require_once('php/config.php');
require_once('php/queries.php');
require_once('php/functions.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $page_data['title'].' - '.$settings['global_title']; ?></title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,900">
  <link rel="stylesheet" href="icomoon/style.css">
  <!--<link rel="stylesheet" href="css/bulma.min.css">-->
  <link rel="stylesheet" href="css/uikit.min.css">
  <link rel="stylesheet" href="css/app.css">
</head>

<body class="body <?php echo $page_data['page_key']; ?>">
	
	<header id="header" class="body-header DF">
  	<figure id="logo" class="logo-figure">
    	<a href="./"><img src="img/powercoders-logo.svg" alt="PoCo Logo"></a>
    </figure>
    
    <div id="nav-triggers">
      <a id="open-menu" class="menu-trigger DF"><i class="icon-menu"></i></a>
      <a id="close-menu" class="menu-trigger DF"><i class="icon-close"></i></a>
    </div>
    
    <nav id="nav" class="anim-from-center">
    	 <h2 class="hide-but-keep">Main Menu</h2>
    	<?php echo menu_html(); ?>
    </nav>
  </header>

	<main class="uk-container">
  
  	<h1 class="uk-margin-bottom"><?php echo $page_data['title']; ?></h1>
  
  	<?php echo content($page_data); ?>

  </main>
  
  <footer class="uk-footer uk-container uk-height-small">
  	<div class="content has-text-centered">
  		<p>&copy;SP 2018-<?php echo date('Y'); ?></p>
    </div>
  </footer>
  
  <?php echo debug_view($debug_arr); ?>

</body>
</html>