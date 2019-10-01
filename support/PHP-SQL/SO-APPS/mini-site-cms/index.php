<?php
require_once('php/pdo.php');
require_once('php/queries.php');
require_once('php/functions.php');
?>
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <title><?php echo title('head', $params); ?></title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $params['settings']["description"]; ?>">
    <meta name="keywords" content="<?php echo $params['settings']["keywords"]; ?>">
    <meta name="author" content="<?php echo $params['settings']["author"]; ?>">

    <link rel="icon" href="img/favicon.png">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
    <?php if($params['active_page']['page_key'] === 'contact') : ?>
    <link rel="stylesheet" href="admin/css/uikit.min.css">
    <?php endif; ?>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/editor.css">
  </head>

  <body id="<?php echo $params['active_page']['page_key']; ?>">

    <!-- HEADER -->
    <header class="header">

      <!-- Logo -->
      <figure class="logo-figure">
        <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
      </figure>

      <!-- Nav -->
      <nav class="nav">
        <?php echo menu_html($params); ?>
      </nav>

    </header>


    <!-- CONTENT -->
    <main class="content">

      <!-- Main Title -->
      <h1 class="main-title"><?php echo title('content', $params); ?></h1>

      <!-- HTML content -->
      <!-- <p>This will be the dynamic page content...</p> -->
      <?php echo content($params); ?>

    </main>


    <!-- FOOTER -->
    <footer class="footer">
      <p>&copy;1998 - <?php echo date('Y'); ?> - Heavy Metal Company</p>
    </footer>

    <?php echo debug_view($debug_arr); ?>

  </body>

</html>