<?php
  include("app.php");
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo pages('index', 'head'); ?></title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="How to use PHP to create a dynamic website">
  <meta name="keywords" content="php,dynamic site,cool,raoul">
  <meta name="author" content="Sorin Paun">

  <link rel="icon" href="img/favicon.png">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <ul class="menu">
        <?php pages($page, 'menus'); ?>
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">
    <?php include("html/$page.html"); ?>
  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - <?php echo date('Y'); ?> - Heavy Metal Company</p>
  </footer>

</body>

</html>