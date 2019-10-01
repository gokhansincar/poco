<?php
/**
 * QUERIES
 * -----------------------------------------------------------------------------
 * ...
 * ...
 */
function query($zone, $params = []) {


	//START SWITCH
	switch($zone) {


		/* SETTINGS
		-----------------------------------------------------------*/
		/*#region SETTINGS*/
		case 'settings' :

			$sql = "SELECT settings_key, settings_value FROM settings ORDER BY position ASC";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetchAll(PDO::FETCH_KEY_PAIR);
				//$results = array_map('reset', $results); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;
		/*#endregion SETTINGS*/



		/* PAGES - "ONE QUERY FOR ALL" VARIANTE
		-----------------------------------------------------------*/
		/*#region PAGES*/
		case 'pages' :

			$where = "";
			
			//IF NOT ADMIN ADD THIS WHERE CLAUSE
			if(!is_admin()) {
				$where = "WHERE is_visible = ?";
				$params[] = 1;
			}

			$sql = "SELECT slug, page_key, title, menu, content, is_home FROM pages $where ORDER BY position ASC";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				//$results = $sth->fetchAll(PDO::FETCH_GROUP); //debug($results);
				//$results = array_map('reset', $results); //debug($results);
				$results = $sth->fetchAll(PDO::FETCH_UNIQUE | PDO::FETCH_ASSOC); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;
		/*#endregion PAGES*/



		/* MENUS
		-----------------------------------------------------------*/
		/*#region MENUS*/
		case 'menus' :

			$where = "";
			
			if(!is_admin()) {
				$where = "WHERE is_visible = ?";
				$params[] = 1;
			}

			$sql = "SELECT slug, menu, is_home FROM pages $where ORDER BY position ASC";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetchAll(); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;
		/*#endregion MENUS*/



		/* PAGE DATA
		-----------------------------------------------------------*/
		/*#region PAGE*/
		case 'page' :

			$sql = "SELECT page_key, title, content FROM pages WHERE slug = ?";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetch(); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;
		/*#endregion PAGE*/
		
		

		/* HOME SLUG (Default page)
		-----------------------------------------------------------*/
		/*#region HOME SLUG*/
		case 'home_slug' :

			$sql = "SELECT slug FROM pages WHERE is_home = ?";
			$params[] = 1;

			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetch(); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;
		/*#endregion HOME SLUG*/


	} //END SWITCH


	return $results;


}