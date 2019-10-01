<?php
//include('functions.php');
//require('functions.php');
require_once('functions.php');
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo title('head', $params); ?></title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $params['site_data']["description"]; ?>">
  <meta name="keywords" content="<?php echo $params['site_data']["keywords"]; ?>">
  <meta name="author" content="<?php echo $params['site_data']["author"]; ?>">

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
        <?php echo menu_items($params); ?>
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">

    <!-- Main Title -->
    <h1 class="main-title">
      <?php echo title('content', $params); ?>
    </h1>

    <!-- HTML content -->
    <?php echo content($get_page); ?>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - <?php echo date('Y'); ?> - Heavy Metal Company</p>
    <p>Last update: <?php echo $site_data['last_update']; ?></p>
  </footer>

</body>

</html>