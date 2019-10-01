<?php
//ADMIN CONSTANT
define("IS_ADMIN_INDEX", true);

//REQUIRES
require_once('../php/pdo.php');
require_once('admin_functions.php'); //var_dump($admin_pages);
require_once('crud.php');
?>
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <title>ADMIN - <?php echo $params['page']; ?></title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../img/favicon.png">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
    <link rel="stylesheet" href="css/uikit.min.css">
    <link rel="stylesheet" href="css/admin.css">
  </head>

  <body id="<?php echo $params['page']; ?>">

    <!-- HEADER -->
    <header class="header">

      <!-- Logo -->
      <figure class="logo-figure">
        <a href="./"><img src="../img/logo.svg" alt="The heavy metal company"></a>
        <!-- <span class="uk-h5">Admin</span> -->
      </figure>

      <!-- Nav -->
      <nav class="nav">
        <?php echo admin_menu($params); ?>
      </nav>

    </header>


    <!-- CONTENT -->
    <main class="content uk-container">

      <?php echo admin_page($params); ?>

    </main>


    <!-- FOOTER -->
    <footer class="footer">
      <p>&copy;1998 - <?php echo date('Y'); ?> - Heavy Metal Company</p>
    </footer>

    <script src="js/uikit.min.js"></script>
    <script src="js/uikit-icons.min.js"></script>

  </body>

</html>