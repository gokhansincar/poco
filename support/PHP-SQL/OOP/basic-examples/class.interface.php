<?php
/**
 * Declare an Interface
 */
interface iTemplate {
	
	public function name($name);
	
	public function html($templatename);
	
}

/**
 * Implementate content for the interface iTemplate
 */
class Template implements iTemplate {
	
	public function __construct() {
		
	}

	public function name($name) {
		
	}

	public function html($templatename = 'default') {
		
		$html = '';
		
		//Get html code WHERE template name is...
		if($templatename == 'default') {
			echo '<h3>For the template "'.$templatename.'" you have this code:</h3>';
			echo '<div><p>Paragraph 1</p><p>Paragraph 2</p></div>';	
		}
		if($templatename == 'bob') {
			echo '<h3>For the template "'.$templatename.'" you have this code:</h3>';
			echo '<div><em>Emphasis 1</em><em>Emphasis 2</em></div>';	
		}
		
		return $html;
	}
}