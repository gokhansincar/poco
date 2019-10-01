<?php
/* QUERY - GET PEOPLE
----------------------------------------*/
$sth = db()->prepare("SELECT first_name, last_name, gender_id, birth_year, photo, country_id, role_id FROM people ORDER BY last_name ASC");
$sth->execute();
$people = $sth->fetchAll(); //debug($people);


/* QUERY - GET COUNTRIES
----------------------------------------*/
$sth = db()->prepare("SELECT country_id, name FROM countries");
$sth->execute();
$countries = $sth->fetchAll(PDO::FETCH_KEY_PAIR); //debug($countries);


/* QUERY - GET ROLES
----------------------------------------*/
$sth = db()->prepare("SELECT role_id, role FROM people_roles");
$sth->execute();
$roles = $sth->fetchAll(PDO::FETCH_KEY_PAIR); //debug($roles);


/* QUERY - GET GENDERS
----------------------------------------*/
$sth = db()->prepare("SELECT gender_id, gender FROM people_genders");
$sth->execute();
$genders = $sth->fetchAll(PDO::FETCH_KEY_PAIR); //debug($genders);


/* PEOPLE ROWS
----------------------------------------*/
//INIT VAR
$rows = '';

//START LOOP
foreach($people as $person) {
	
	$name				= $person['last_name'].', '.$person['first_name'];
	$gender_id	= (int)$person['gender_id'] ?? 1;
	$birth_year	= (int)$person['birth_year'] ?? false;
	$country		= $countries[ $person['country_id'] ];
	$role				= $roles[ $person['role_id'] ];
	$photo			= $person['photo'] ?? false;

	//CONDITIONAL CONTENT
	$age				= ($birth_year) ? (int)date('Y') - $birth_year : false;
	$avatar			= $photo ? $photo : ( $gender_id === 1 ? 'avatar-male.png' : 'avatar-female.png');			
	
	$rows .= '<tr>';
	$rows .= '<td><img class="uk-preserve-width uk-border-circle" src="img/'.$avatar.'" width="50" alt=""></td>'.PHP_EOL;
	$rows .= '<td>'.$name.'</td>'.PHP_EOL;
	$rows .= '<td>'.$country.'</td>'.PHP_EOL;
	$rows .= ($age) ? '<td>'.$age.'</td>'.PHP_EOL : '';
	$rows .= '<td>'.$role.'</td>'.PHP_EOL;
	$rows .= '</tr>';
	
} //END LOOP
?>
<table id="people-list" class="uk-table uk-table-hover uk-table-middle uk-table-divider">
<thead>
  <tr>
    <th class="photo uk-table-shrink"><i class="icon-image"></i></th>
    <th class="name uk-table-expand">Name</th>
    <th class="country uk-width-medium">Country</th>
    <th class="age uk-width-small">Age</th>
    <th class="role uk-width-small">Role</th>
  </tr>
</thead>
<tbody>
	<?php echo $rows; ?>
</tbody>
</table>