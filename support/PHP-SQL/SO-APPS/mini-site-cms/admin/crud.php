<?php
//1. STOP HERE IF THIS PAGE IS CALLED IN STAND-ALONE
if( !defined('IS_ADMIN_INDEX')) {
  exit();
}


//3. A 'crud-action' will be sent when we update/insert/delete
$crud_action = req('crud-action');


//4. CALL CRUD FUNCTION
if($crud_action) {

	//4.1 A crud actions whitelist
	$crud_actions_whitelist = [
		
		//PAGES
    'insert-page',
		'update-page',
		'update-positions',
		'delete-page',
		'home-page',
		'switch-visible',
		
		//SETTINGS
    'update-settings',
		'delete-settings'
		
  ];

	//4.2 Check if crud action is whitelisted
	$is_valid_action = in_array($crud_action, $crud_actions_whitelist);

	//4.3 Crud action is valid - CALL FUNCTION CRUD
	if($is_valid_action) {
		crud($crud_action);
	}

	//4.4 Crud action is not in the whitelist
	else {
		show("The crud action is not valid.", true);
	}

}



/**
 * CREATE - READ - UPDATE - DELETE
 * -----------------------------------------------------------------------------
 * $params attribute will be used only when we READ data
 * For UPDATE/INSERT/DELETE we don't use $params array
 */
function crud($crud_action, $params = []) {


	//START SWITCH
	switch($crud_action) {


		//=========================== ↓ PAGES ↓ ============================//
		/*#region PAGES*/

		/* READ (ALL) PAGES
		-----------------------------------------------------------*/
		/*#region show-pages*/
		case 'show-pages' :
			$sql = "SELECT id, title, menu, is_home, is_visible FROM pages ORDER BY position ASC";
					
			try {
		
				$sth = db()->prepare($sql);
				$sth->execute();
				$results = $sth->fetchAll();
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}
		break;
		/*#endregion*/


		/* READ (ONE) PAGE
		-----------------------------------------------------------*/
		/*#region page-detail*/
		case 'page-detail' :
			$sql = "SELECT id, page_key, title, menu, slug, content FROM pages WHERE id = ? LIMIT 1";
		
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params); //params is given when we call this crud
				$results = $sth->fetch(); //debug($page);
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}
		break;
		/*#endregion*/


		/* UPDATE/NEW PAGE
		-----------------------------------------------------------*/
		/*#region update|insert-page*/
		case 'update-page' :
		case 'insert-page' :

			//SHORCUT VARS
			$is_update	= $crud_action === 'update-page';
			$is_insert	= $crud_action === 'insert-page';
			$req				= req(); //req() without attributes returns all

			

			//COMMON FOR UPDATE AND INSERT
			$params = [
				$req['title'],
				$req['menu'],
				$req['page_key'],
				slugify($req['title']),
				$req['content']
			];


			//IS UPDATE
			if($is_update) {
				$id = (int)$req['id']; //show($id, true);
				$params[] = $id;
				$sql = "UPDATE pages SET title = ?, menu = ?, page_key = ?, slug = ?, content = ? WHERE id = ?";
			}

			//IS INSERT
			elseif($is_insert) {
				$tot = pdo_num_rows('pages');
				$params[] = $tot + 1;
				$sql = "INSERT INTO pages (title, menu, page_key, slug, content, position) VALUES(?,?,?,?,?,?)";	
			}

			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);

				if($is_insert) {
					$id = db()->lastInsertId(); //gets the last inserted id. Cool!
				}
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}


			redirect('?page=pages&action=edit-page&id='.$id.'&msg=UPDATE+OK');

		break;
		/*#endregion*/


		/* CHANGE PAGES POSITIONS
		-----------------------------------------------------------*/
		/*#region update-positions*/
		case 'update-positions' :

			$sortable = req('sortable'); //show($sortable, true);

			$n = 1;
			$sql = "UPDATE pages SET position = ? WHERE id = ?";

			foreach($sortable as $id) {

				try {

					$sth = db()->prepare($sql);
					$sth->execute([$n, $id]);
					
				} catch(PDOException $e) {
					show($e->getMessage(), true);
				}

				$n++;

			} //END LOOP

			redirect('?page=pages&msg=UPDATE+POSITIONS+OK');

		break;
		/*#endregion*/


		/* DELETE PAGE
		-----------------------------------------------------------*/
		/*#region delete-page*/
		case 'delete-page' :

			$id = (int)req('id'); //show($id, true);

			if($id > 0) {

				$sql = "DELETE FROM pages WHERE id = ?";
				
				try {

					$sth = db()->prepare($sql);
					$sth->execute([$id]);
					
				} catch(PDOException $e) {
					show($e->getMessage(), true);
				}

				redirect('?page=pages&msg=UPDATE+OK');

			}

		break;
		/*#endregion*/


		/* DELETE PAGE
		-----------------------------------------------------------*/
		/*#region home-page*/
		case 'home-page' :

			$id = (int)req('id'); //show($id, true);

			if($id > 0) {

				$sql1 = "UPDATE pages SET is_home = ?";
				$sql2 = "UPDATE pages SET is_home = ? WHERE id = ?";
				
				try {

					$sth = db()->prepare($sql1);
					$sth->execute([0]);

					$sth = db()->prepare($sql2);
					$sth->execute([1, $id]);
					
				} catch(PDOException $e) {
					show($e->getMessage(), true);
				}

				redirect('?page=pages&msg=UPDATE+OK');

			}

		break;
		/*#endregion*/


		/* DELETE PAGE
		-----------------------------------------------------------*/
		/*#region home-page*/
		case 'switch-visible' :

			$id = (int)req('id'); //show($id);
			$is_visible_val = (int)req('is-visible-val'); //show($is_visible_val, true);

			if($id > 0) {

				$sql = "UPDATE pages SET is_visible = ? WHERE id = ?";
				
				try {

					$sth = db()->prepare($sql);
					$sth->execute([$is_visible_val, $id]);
					
				} catch(PDOException $e) {
					show($e->getMessage(), true);
				}

				redirect('?page=pages&msg=UPDATE+OK');

			}

		break;
		/*#endregion*/

		/*#endregion PAGES*/
		//=========================== ↑ PAGES ↑ ============================//
		
		
		
		//========================== ↓ SETTINGS ↓ ==========================//
		/*#region SETTINGS*/
		
		/* READ SETTINGS
		-----------------------------------------------------------*/
		/*#region settings*/
		case 'settings' :
			
			$sql = "SELECT id, settings_key, settings_value FROM settings";
						
			try {
		
				$sth = db()->prepare($sql);
				$sth->execute();
				$results = $sth->fetchAll();
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}

		break;
		/*#endregion*/
		
		
		
		/* UPDATE SETTINGS
		-----------------------------------------------------------*/
		/*#region update-settings*/
		case 'update-settings' :
			
			$req = req(); //show($req, true);
			$settings = $req['settings']; //show($settings, true);

			if(!empty($settings)) {

				//START LOOP
				foreach($settings as $id => $item) {

					$key = $item['key'];
					$value = $item['value'];

					//DO NOT INSERT/UPDATE empty keys !
					if(empty($key)) {
						continue;
					}

					//INSERT - Only if "fake id" (a value > 100)
					if(intval($id) > 100) {
						$sql = "INSERT INTO settings (settings_key, settings_value) VALUES(?, ?)";
						$params = [$key, $value];
					}

					//UPDATE
					else {
						$sql = "UPDATE settings SET settings_key = ?, settings_value = ? WHERE id = ?";
						$params = [$key, $value, $id];
					}
					
					try {

						$sth = db()->prepare($sql);
						$sth->execute($params);
						
					} catch(PDOException $e) {
						show($e->getMessage(), true);
					}

				} //END LOOP

			}

			else {
				show("Error: Empty settings array!", true);
			}

			redirect('?page=settings&msg=UPDATE+OK');

		break;
		/*#endregion*/


		/* DELETE SETTINGS
		-----------------------------------------------------------*/
		/*#region delete-settings*/
		case 'delete-settings' :

			$id = (int)req('id'); show($id, true);

			if($id > 0) {

				$sql = "DELETE FROM settings WHERE id = ?";
				
				try {

					$sth = db()->prepare($sql);
					$sth->execute([$id]);
					
				} catch(PDOException $e) {
					show($e->getMessage(), true);
				}

				redirect('?page=settings&msg=UPDATE+OK');

			}

			show("Settings ID is wrong!", true);

		break;
		/*#endregion*/

		/*#endregion SETTINGS*/
		//========================== ↑ SETTINGS ↑ ==========================//


	} //END SWITCH


	return $results;


}