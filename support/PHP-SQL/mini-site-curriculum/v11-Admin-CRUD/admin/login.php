<?php
if( !defined('IS_ADMIN_INDEX') ) {
  exit();
}

if(req('action') === 'check-login' && !is_admin()) {
  check_login($_POST);
}
if(req('action') === 'logout' && is_admin()) {
  logout();
}
?>

<?php if(!is_admin()) : ?>
<h1 class="uk-text-center">LOGIN</h1>
  
<?php if(req('error')) : ?>
<h2 class="uk-text-center uk-text-danger uk-h4">Login error. Please try again.</h2>
<?php endif; ?>

<form class="uk-form-horizontal uk-margin-large" method="post">

  <input type="hidden" name="action" value="check-login">

  <div class="uk-flex uk-margin">
    <div class="uk-inline uk-margin-auto">
      <span class="uk-form-icon icon-at-symbol" uk-icon="icon: mail"></span>
      <input type="text" name="email" class="uk-input">
    </div>
  </div>

  <div class="uk-flex uk-margin">
    <div class="uk-inline uk-margin-auto">
      <span class="uk-form-icon icon-password" uk-icon="icon: lock"></span>
      <input type="password" name="pass" class="uk-input">
    </div>
  </div>

  <div class="uk-flex uk-margin">
    <button type="submit" class="uk-button uk-button-default uk-margin-auto">Submit</button>
  </div>

</form>

<?php else : ?>

<h2 class="uk-text-center uk-text-danger uk-h4">You are already logged.</h2>

<?php endif; ?>