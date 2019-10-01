/* Styles
---------------------------------*/
//CSS CLASSES
var _style_formats = [
	
	//MAIN CLASSES
	{title: 'THEME', icon: 'drop', items: [
		
		{title: 'Font - Serif',	selector: 'h1,h2,h3,p,div,td', classes: 'serif-font'},
		{title: 'Font - Sans-Serif',	selector: 'h1,h2,h3,p,div,td', classes: 'sans-font'},
		
		{title: 'Color - Green',	inline: 'span', selector: 'h1,h2,h3,p,div,td', classes: 'green'},
		{title: 'Color - Black 100%', inline: 'span', selector: 'h1,h2,h3,p,div,td', classes: 'black'},
		{title: 'Color - Black 80%',	inline: 'span', selector: 'h1,h2,h3,p,div,td', classes: 'black-80P'},
		{title: 'Color - Black 33%',	inline: 'span', selector: 'h1,h2,h3,p,div,td', classes: 'black-33P'},
		{title: 'Color - Black 20%',	inline: 'span', selector: 'h1,h2,h3,p,div,td', classes: 'black-20P'},
		
	]},
	
	//TAGS
	{title: 'Tag Type', icon: 'code', items: [
		{title: 'Title 1', format: 'h1', classes: 'main-title'},
		{title: 'Title 2', format: 'h2', classes: 'second-title'},
		{title: 'Title 3', format: 'h3', classes: 'third-title'},
		{title: 'Div', format: 'div'},
		{title: 'Paragraph', format: 'p'},
		{title: 'Figure', block: 'figure'},
		{title: 'I', inline: 'i'}
	]},
	
	

	{title: 'Bold', inline: 'span', selector: 'h1,h2,h3,p,div,td,ul,ol', icon: 'bold', classes: 'bold'},
	{title: 'Italic', inline: 'span', selector: 'h1,h2,h3,p,div,td,ul,ol', icon: 'italic', classes: 'italic'},
	
	{title: 'Align Left', selector: 'h1,h2,h3,p,div,td,ul,ol', icon: 'alignleft', classes: 'align-left'},
	{title: 'Align Center', selector: 'h1,h2,h3,p,div,td,ul,ol', icon: 'aligncenter', classes: 'align-center'},
	{title: 'Align Right', selector: 'h1,h2,h3,p,div,td,ul,ol', icon: 'alignright', classes: 'align-right'},
	
  
	//MISC CLASSES
	{title: 'MISC', icon: 'sun', items: [
		{title: 'Margin top 30', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MT30'},
		{title: 'Margin top 40', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MT40'},
		{title: 'Margin top 50', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MT50'},
		{title: 'Margin top 60', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MT60'},
		{title: 'Margin top 70', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MT70'},
		{title: 'Margin top 80', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MT80'},

		{title: 'Margin bottom 30', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MB30'},
		{title: 'Margin bottom 40', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MB40'},
		{title: 'Margin bottom 50', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MB50'},
		{title: 'Margin bottom 60', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MB60'},
		{title: 'Margin bottom 70', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MB70'},
		{title: 'Margin bottom 80', selector: 'h1,h2,h3,article,p,div,table,ul,ol', classes: 'MB80'},

		{title: 'Float right', selector: 'img,p,div,ul,ol', classes: 'float-right'},
		{title: 'Float left', selector: 'img,p,div,ul,ol', classes: 'float-left'},
		{title: 'Clear float', selector: 'p,div,h3,img', classes: 'clearfix'},

		{title: 'Drop shadow', selector: 'article,img,p,div', classes: 'shadow'},
		{title: 'Drop shadow medium', selector: 'article,img,p,div', classes: 'shadow_medium'},
		{title: 'Rounded corners', selector: 'article,img,p,div,', classes: 'rounded'},

	]},

];


//THE PATHS MUST BE FROM THE PHP PAGE WHERE THIS SCRIPT IS INCLUDED !
var _templates = [
	{
		title : "...",
		url : "js/tinymce/templates/1p.html",
		description : ""
	},
	{
		title : "Template 2 columns",
		url : "js/tinymce/templates/2cols.html",
		description : "Insert the template at the cursor placement"
	},
	{
		title : "Template 3 columns",
		url : "js/tinymce/templates/3cols.html",
		description : "Insert the template at the cursor placement"
	},
	{
		title : "Template 4 columns",
		url : "js/tinymce/templates/4cols.html",
		description : "Insert the template at the cursor placement"
	}
];


tinymce.init({
  selector: 'textarea#content',
	
	branding: false,
  menubar : false,
	image_advtab: false,
	preview_styles: false,
	visual: true,
	paste_as_text: true,
	paste_word_valid_elements: "",
  nonbreaking_force_tab: true,
  object_resizing: false,
  table_appearance_options: false,
  
  object_resizing: false,
	table_appearance_options: false,
  element_format : "html",
  relative_urls: true,
  
  style_formats: _style_formats,
  style_formats_autohide: false,
  
	element_format : "html",

  templates : _templates,
	template_popup_width: 1192,
	template_popup_height: 720,

	code_dialog_width: 1024,
  code_dialog_height: 600,
  
  autoresize_on_init: true,
	autoresize_min_height: 100,
	autoresize_bottom_margin: 5,

  plugins: [
    'advlist autolink lists link image paste fullscreen media table code template autoresize textcolor',
  ],
  toolbar: 'undo redo | styleselect | removeformat | pastetext | bullist numlist | table | template | link unlink | image media | fullscreen code',
  content_css: [
    'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,600',
		'../css/style.css',
		'../css/editor.css'
  ]
});