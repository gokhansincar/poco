<?php
if( !defined('IS_ADMIN_INDEX')) {
  exit();
}



//WHAT FUNCTION TO CALL ?
settings();


/**
 * SETTINGS LIST
 * ========================================================
 */
/*#region SETTINGS*/
function settings() {


  /* SETTINGS QUERY
  ----------------------------------------*/
  $settings = crud('settings'); //show($settings);


  /* TABLE ROWS
  ----------------------------------------*/
  //INIT VAR
  $rows = '';

  //START LOOP
  foreach($settings as $item) {

    $id = $item['id'];
    $key = $item['settings_key'];
    $value = $item['settings_value'];

    $rows .= '
    <tr>
      <td class="uk-width-auto">'.$id.'</td>
      <td class="uk-width-1-6"><input type="text" name="settings['.$id.'][key]" value="'.$key.'" class="uk-input"></td>
      <td class="uk-width-4-6"><input type="text" name="settings['.$id.'][value]" value="'.$value.'" class="uk-input"></td>
      <td class="tools uk-width-1-6">
        <a class="tool edit delete-link" uk-icon="icon: trash" href="index.php?crud-action=delete-settings&id='.$id.'"></a>
      </td>
    </tr>
    ';
    
  } //END LOOP


  /* HTML DISPLAY
  ----------------------------------------*/
  $html = admin_header([
    'title' => 'Settings',
    'buttons' => '<a href="javascript:void(0);" id="new-settings" class="uk-button uk-button-new">New Settings</a>'
  ]);
  
  $html .= '
  <form action="" method="post">

    <input type="hidden" name="crud-action" value="update-settings">

    <table id="admin-list" class="uk-table uk-table-hover uk-table-middle uk-table-divider">
      <thead>
        <tr class="uk-text-primary">
          <th class="uk-width-auto">#id</th>
          <th class="uk-width-1-6">Key</th>
          <th class="uk-width-4-6">Value</th>
          <th class="tools uk-width-1-6">Tools</th>
        </tr>
      </thead>
      <tbody>
        '.$rows.'
      </tbody>
    </table>

    <div class="uk-margin uk-margin-medium-top uk-flex uk-flex-center">
      <button class="uk-button uk-button-primary">Update</button>
    </div>
  </form>';

  echo $html;

}
/*#endregion SETTINGS*/