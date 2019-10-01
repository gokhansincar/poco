<?php
if( !defined('IS_ADMIN_INDEX')) {
  exit();
}


//WHAT FUNCTION TO CALL ?
if(empty($action) || $action === 'pages') {
  pages();
}
else {
  page_detail($action);
}



/**
 * PAGES LIST
 * ========================================================
 */
/*#region PAGES*/
function pages() {


  /* PAGES QUERY
  ----------------------------------------*/
  $pages = crud('show-pages');


  /* TABLE ROWS
  ----------------------------------------*/
  //INIT VAR
  $rows = '';

  //START LOOP
  foreach($pages as $key => $page) {


    //MAIN VARS
    $id			  = (int)$page['id'];
    $title    = $page['title'];
    $menu     = $page['menu'];

    //IS HOME
    $is_home        = (bool)$page['is_home'];
    $home_css       = $is_home ? ' is-home' : '';
    

    //IS VISIBLE
    $is_visible     = (bool)$page['is_visible'];
    $visible_css    = $is_visible ? ' is-visible' : '';
    $visible_icon   = $is_visible ? 'check' : 'ban';
    $is_visible_val = $is_visible ? 0 : 1;

    
    //TOOL LINKS
    $home_page_link = $is_home || !$is_visible ? 'javascript:void(0);' : '?crud-action=home-page&id='.$id;
    $delete_link    = $is_home ? 'javascript:void(0);' : '?crud-action=delete-page&id='.$id;
    $visible_link   = '?crud-action=switch-visible&is-visible-val='.$is_visible_val.'&id='.$id;
    $edit_link      = '?page=pages&action=edit-page&id='.$id;


    //PAGE ROW
    $rows .= '
    <li class="uk-flex uk-sortable-item">
      <div class="uk-width-auto uk-margin-right">'.$id.'</div>
      <div class="uk-width-3-6"><a href="'.$edit_link.'" title="Edit page">'.$title.'</a></div>
      <div class="uk-width-1-6">'.$menu.'</div>
      <div class="tools uk-width-large">
        <a class="tool home uk-margin-right home-icon'.$home_css.'" uk-icon="icon: home" href="'.$home_page_link.'"></a>
        <a class="tool home uk-margin-right visible-icon'.$visible_css.'" uk-icon="icon: '.$visible_icon.'" href="'.$visible_link.'"></a>
        <a class="tool edit delete-link uk-margin-right" uk-icon="icon: trash" href="'.$delete_link.'"></a>
        <a class="tool edit uk-margin-right" uk-icon="icon: pencil" href="'.$edit_link.'"></a>
        <span class="tool move uk-sortable-handle" uk-icon="icon: more-vertical"></span>
      </div>
      <input type="hidden" name="sortable['.$id.']" value="'.$id.'">
    </li>
    ';


  } //END LOOP


  /* HTML DISPLAY
  ----------------------------------------*/
  $html = admin_header([
    'title' => 'Pages list',
    'buttons' => '<a href="?page=pages&amp;action=new-page" class="uk-button uk-button-new">New Page</a>'
  ]);
  
  $html .= '
  <ul class="admin-list-head uk-list uk-list-large">
    <li class="list-head uk-flex uk-text-muted">
      <div class="uk-width-auto uk-margin-right">#id</div>
      <div class="uk-width-3-6">Title</div>
      <div class="uk-width-1-6">Menu</div>
      <div class="tools uk-width-large">Tools</div>
    </li>
  </ul>

  
  <form action="" method="post">

    <ul id="admin-list" class="admin-list sortable uk-list uk-list-large uk-list-divider" uk-sortable="handle: .uk-sortable-handle; group: test">
      '.$rows.'
    </ul>

    <div id="update-positions-wrap" class="DN uk-margin-medium-top uk-flex uk-flex-center">
      <input type="hidden" name="crud-action" value="update-positions">
      <button type="submit" id="update-positions" class="uk-button uk-button-primary">Update positions</button>
    </div>

  </form>
  ';

  echo $html;

}
/*#endregion PAGES*/



/**
 * PAGE DETAIL
 * ========================================================
 * For edit / new page
 */
/*#region PAGE DETAIL*/
function page_detail($action = 'edit-page') {


  /* INIT VARS
  ----------------------------------------*/
  $id       = (int)req('id');
  $is_edit  = $action === 'edit-page' && $id > 0;
  //$is_new   = $action === 'new-page' && !$id; //no need

  $page     = [];


  /* IS EDIT OR NEW CONDITIONAL CONTENT
  ----------------------------------------*/
  if($is_edit) {

    //QUERY - GET PAGE DATA
    $page = crud('page-detail', [$id]);

    //PAGE TITLE
    $page_title = 'Edit page: <span class="uk-text-primary">' . $page['title'].'</span>';

  }

  else {

    //PAGE TITLE
    $page_title = 'New page';

  }

  
  /* CREATE FORM ITEMS
  ----------------------------------------*/
  //NON EDITABLE (hidden) ITEMS ARRAY
  $hidden_items = [
    'crud-action' => $is_edit ? 'update-page' : 'insert-page',
    'id'          => $id,
  ];

  //EDITABLE ITEMS ARRAY
  $editable_items = [
    'title'     => $page['title'],
    'menu'      => $page['menu'],
    'page_key'  => $page['page_key'],
    //'slug'      => $page['slug'], //Ali is right, better let PHP deal with this
    'content'   => $page['content'],
  ];

  
  //MERGE THE TWO ARRAYS
  $form_items_arr = array_merge($hidden_items, $editable_items); //debug($form_items_arr);


  //INIT HTML VAR
  $form_items_html = '';


  //START LOOP
  foreach($form_items_arr as $key => $value) {

    //INPUT TYPE
    $input_type = (array_key_exists($key, $hidden_items)) ? 'hidden' : 'text';

    //FORM INPUTS
    if($input_type === 'hidden') {
      $form_input = '<input type="hidden" name="'.$key.'" value="'.$value.'">';
      $form_items_html .= $form_input;
    }
    elseif($key === 'content') {
      $form_input = '<textarea name="'.$key.'" class="uk-textarea" id="'.$key.'" rows="8">'.$value.'</textarea>';
    }
    else {
      $form_input = '<input type="'.$input_type.'" name="'.$key.'" value="'.$value.'" class="uk-input" id="'.$key.'">';
    }

    //HTML LABEL & INPUT DISPLAY (only if not hidden)
    if($input_type != 'hidden') {
    
      $label = str_replace('_', ' ', $key);
      $label = ucfirst($label);

      $form_items_html .= '
      <div class="uk-margin uk-flex uk-flex-middle">
        <label class="uk-form-label W10p" for="'.$key.'">'.$label.':</label>
        <div class="uk-form-controls DB W90p">
          '.$form_input.'
        </div>
      </div>
      ';

    }

  } //END LOOP


  /* HTML DISPLAY
  ----------------------------------------*/
  $html = admin_header([
    'title' => $page_title,
    'buttons' => '<a href="?page=pages" class="uk-button uk-button-default"><span class="uk-close" uk-close></span> Close</a>'
  ]);

  $html .= '
  <form class="uk-form" action="index.php" method="post">

    '.$form_items_html .'

    <div class="uk-margin-medium-top uk-flex uk-flex-center">
      <label class="uk-form-label W10p">&nbsp;</label>
      <button type="submit" class="uk-button uk-button-primary">Submit</button>
    </div>

  </form>
  
  <script src="js/tinymce/tinymce.min.js"></script>
  <script src="js/tinymce/tinymce-init.js"></script>  
  ';


  echo $html;


}
/*#endregion PAGE DETAIL*/
