<?php
if( !defined('IS_ADMIN_INDEX')) {
  exit();
}


//STOP HERE IF NO SESSION ADMIN
if( !is_admin() ) {
	exit("Hey dude, only admin can access this page!");
}


//A 'crud-action' will be sent when we update/insert/delete
$crud_action = req('crud-action');


//CALL CRUD FUNCTION
if($crud_action) {
	crud($crud_action);
}



/**
 * CREATE - READ - UPDATE - DELETE
 * -----------------------------------------------------------------------------
 * $params attribute will be used only when we READ data
 * For UPDATE/INSERT/DELETE we don't use $params array
 */
function crud($crud_action, $params = []) {


	if(empty($crud_action)) {
		return false;
	}


	//START SWITCH
	switch($crud_action) {


		/* READ (ALL) PAGES
		-----------------------------------------------------------*/
		case 'show_pages' :
			$sql = "SELECT id, title, menu FROM pages ORDER BY position ASC";
					
			try {
		
				$sth = db()->prepare($sql);
				$sth->execute();
				$results = $sth->fetchAll();
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}
		break;


		/* READ (ONE) PAGE
		-----------------------------------------------------------*/
		case 'page_detail' :
			$sql = "SELECT id, page_key, title, menu, slug, content FROM pages WHERE id = ? LIMIT 1";
		
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params); //params is given when we call this crud
				$results = $sth->fetch(); //debug($page);
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}
		break;


		/* UPDATE/NEW PAGE
		-----------------------------------------------------------*/
		case 'update-page' :
		case 'insert-page' :

			//SHORCUT VARS
			$is_update	= $crud_action === 'update-page';
			$is_insert	= $crud_action === 'insert-page';
			$post				= $_POST;

			//show($post);

			//COMMON FOR UPDATE AND INSERT
			$params = [
				$post['title'],
				$post['menu'],
				$post['page_key'],
				slugify($post['title']),
				$post['content']
			];
			//show($params, true);

			if($is_update) {
				//Add id value at the end of the params array!
				$params[] = $post['id'];
				$sql = "UPDATE pages SET title = ?, menu = ?, page_key = ?, slug = ?, content = ? WHERE id = ?";
			}
			elseif($is_insert) {
				$tot = pdo_num_rows('pages');
				$params[] = $tot + 1;
				$sql = "INSERT INTO pages (title, menu, page_key, slug, content, position) VALUES(?,?,?,?,?,?)";
			}
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				
			} catch(PDOException $e) {
				show($e->getMessage(), true);
			}

			redirect('?page=pages&msg=UPDATE+OK');

		break;



		/* DELETE PAGE
		-----------------------------------------------------------*/
		case 'delete-page' :

			$id = (int)req('id'); show($id, true);

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
		
		
		
		/* UPDATE SETTINGS
		-----------------------------------------------------------*/
		case 'update-settings' :
			
			show("UPDATE SETTINGS", true);

		break;


	} //END SWITCH


	return $results;


}