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
  $pages = crud('show_pages');


  /* TABLE ROWS
  ----------------------------------------*/
  //INIT VAR
  $rows = '';

  //START LOOP
  foreach($pages as $key => $page) {
    
    $id			= (int)$page['id'];
    $title  = $page['title'];
    $menu   = $page['menu'];

    $edit_link = '?page=pages&action=edit-page&id='.$id;

    $rows .= '
    <tr>
      <td>'.$id.'</td>
      <td><a href="'.$edit_link.'" title="Edit page">'.$title.'</a></td>
      <td>'.$menu.'</td>
      <td class="tools">
        <a class="tool edit uk-margin-right" uk-icon="icon: pencil" href="'.$edit_link.'"></a>
        <a class="tool edit delete-link" href="index.php?crud-action=delete-page&id='.$id.'">x</a>
      </td>
    </tr>
    ';
    
  } //END LOOP


  /* HTML DISPLAY
  ----------------------------------------*/
  $html = admin_header([
    'title' => 'Pages list'.($_GET['msg'] ? ' - '.$_GET['msg'] : ''),
    'buttons' => '<a href="?page=pages&amp;action=new-page" class="uk-button uk-button-default">New Page</a>'
  ]);
  
  $html .= '
  <table id="pages-list" class="uk-table uk-table-hover uk-table-middle uk-table-divider">
    <thead>
      <tr>
        <th class="uk-table-shrink">#id</th>
        <th class="country uk-width-xlarge">Title</th>
        <th class="name">Menu</th>
        <th class="tools uk-width-small">Tools</th>
      </tr>
    </thead>
    <tbody>
      '.$rows.'
    </tbody>
  </table>

  <script>
  document.addEventListener("click", function(event) {

    var elementClicked = event.target;

    if(elementClicked.classList.contains("delete-link")) {

      event.preventDefault();
      var href = elementClicked.href;

      if(confirm("Shall I DELETE this item ???")) {
        window.location.replace(href);
      }

    }
  
  });
  </script>
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
    $page = crud('page_detail', [$id]);

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
    //'slug'      => $page['slug'], //better let PHP deal with this
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
      <div class="uk-margin uk-flex">
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
  <form class="uk-form-stacked" action="index.php" method="post">

    '.$form_items_html .'
    
    <div class="uk-margin uk-flex uk-flex-right">
      <button class="uk-button uk-button-primary">Submit</button>
    </div>

  </form>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.4/tinymce.min.js"></script>
  <script src="js/tinymce-init.js"></script>  
  ';


  echo $html;


}
/*#endregion PAGE DETAIL*/
