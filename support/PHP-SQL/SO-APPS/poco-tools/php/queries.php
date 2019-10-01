<?php
/**
 * QUERIES
 * -----------------------------------------------------------------------------
 * ...
 * ...
 */
function query($zone, $params = [], $is_admin = false) {


	$results = [];


	//START SWITCH
	switch($zone) {



		/* SETTINGS
		-----------------------------------------------------------*/
		case 'settings' :

			$sql = "SELECT settings_key, settings_value FROM settings $extra_vars ORDER BY settings_pos ASC";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetchAll(PDO::FETCH_KEY_PAIR);
				//$results = array_map('reset', $results); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;



		/* MENUS
		-----------------------------------------------------------*/
		case 'menus' :

			$where = "";
			
			if(!$is_admin) {
				$where = "WHERE visibility = ?";
				$params[] = 'public';
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



		/* PAGE DATA
		-----------------------------------------------------------*/
		case 'page' :

			$sql = "SELECT title, page_key, content_type, content FROM pages WHERE slug = ?";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetch(); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;
		
		
		
		/* HOME SLUG (Default page)
		-----------------------------------------------------------*/
		case 'home_slug' :

			$sql = "SELECT slug FROM pages WHERE is_home = ?";
			
			try {

				$sth = db()->prepare($sql);
				$sth->execute($params);
				$results = $sth->fetch(); //debug($results);
				
			} catch(PDOException $e) {
				debug($e->getMessage());
			}

		break;


	} //END SWITCH


	return $results;


}