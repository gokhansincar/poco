<?php
if( !defined('IS_ADMIN_INDEX')) {
  exit();
}



//WHAT FUNCTION TO CALL ?




/**
 * PAGES LIST
 * ========================================================
 */
/*#region PAGES*/
function pages() {


  /* PAGES QUERY
  ----------------------------------------*/
  


  /* TABLE ROWS
  ----------------------------------------*/
  //INIT VAR
  $rows = '';

  //START LOOP


  //END LOOP
  


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
  


  /* IS EDIT OR NEW CONDITIONAL CONTENT
  ----------------------------------------*/
  

  
  /* CREATE FORM ITEMS
  ----------------------------------------*/
  //NON EDITABLE (hidden) ITEMS ARRAY
  

  //EDITABLE ITEMS ARRAY
  

  
  //MERGE THE TWO ARRAYS
  


  //INIT HTML VAR
  $form_items_html = '';


  //START LOOP
  

  //END LOOP


  /* HTML DISPLAY
  ----------------------------------------*/
  //HEADER
  $html = admin_header([
    'title' => 'dynamic page title...',
    'buttons' => '<a href="?page=pages" class="uk-button uk-button-default"><span class="uk-close" uk-close></span> Close</a>'
  ]);

  //FORM
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
