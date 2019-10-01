# PHP CRASHCOURSE
HOW TO CONVERT A STATIC SITE INTO A CMS IN 11 STEPS<br>


## v1-Static
- Understanding the file structure
- Study the HTML tags
- Understanding WHAT are we doing and WHY a static site is problematic

## v2-PHP
- We should create an html file for each content 
- We should have an "index.php" file
- We need to have placeholders for the dynamic content
- Understand the purpose and the syntax of PHP
	
## v3-Dynamic-Thinking
- We have to display errors
- We have to change the href of menu links to use URI vars
- We have to GET the URI vars
- We have to target the correct html file depending on URI var
- We have to get the content of the html file and display it
	
## v4-Data-Storage
- We should have a storage file to store the site data
- We should get the content of the storage file
- We should convert the json content into a PHP array
- We should use site data to replace static PLACEHOLDERS

## v5-Dynamic-Menu
- We need to create the menu dynamically from site pages and store it
- We have to replace the "static" menu with the PHP generated menu

## v6-Separation-of-Concerns - REFACTORING !
- We should have a "functions.php" file to store our logic
- We should have a site_data() function
- We should have a menu_html() function
- We should have a title() function
- We should have a content() function
- We should have a debug() function
- We should include the functions.php file into index.php
- We should replace index.php PHP code with functions

## v7-Seo-Friendly-URL
- We shoud have a .htaccess file with Apache "mod_rewrite" code
- We should change the site pages keys with SEO keys
- We should store the pages SEO keys into an array
- We have to change the menu hrefs with SEO keys
- We shold have a router() function who decompose the URI and grabs the current page

## v8-DataBase-Storage
- We shoud have a new database called **mini-site**
- We should have a table called **settings** (with json "site-data" values)<br>
  The **settings** table columns are:
  * id
  * key
  * value
- We should have a table called "pages" (with json **pages** values)<br>
  The **pages** table columns are:
  * id
  * title
  * menu
  * slug
  * content
  * is_home

- We should have a **pdo.php** file with DB connection data
- We should have a **queries.php** file containing a **query()** function

## v9-DB-Queries
- We shoud have a query **settings**
- We shoud have a query **menus**
- We shoud have a query **page**
- We shoud replace all json based data with DB data

## v10-Admin-Files
- We should have an **admin** folder to store all admin pages
  * *This page should check if an admin session exists and return the appropriate page*
- We should have a page **index.php** inside admin/ folder<br>
- We should install a CSS Framework to quickly format admin pages
- We should have a page **login.php** inside admin/ folder<br>
  * *This page should contain a login form*
- We should have a page **pages.php** inside admin/ folder<br>
  * *This page should contain a the list of DB pages with edit links*<br>
  * *This page should contain an edit page form with an HTML editor for the content*<br>
- We should have a page **settings.php** inside admin/ folder<br>
  * *This page should contain an edit settings form*
- We should have a page **crud.php** inside admin/ folder<br>
  * *This page should contain all admin SQL CRUD operations*

## v11-Admin-CRUD
1. **PAGES**
    - We should have a SQL command to *Read* all existing pages
    - We should have a SQL command to *Read* a single page data
    - We should have a SQL command to *Create* a page
    - We should have a SQL command to *Update* a page data
    - We should have a SQL command to *Delete* a page

2. **SETTINGS**
    - We should have a SQL command to *Update* all settings at once
    - We should have a SQL command to *Create* a page
    - We should have a SQL command to *Read* all existing settings
    - We should have a SQL command to *Delete* a settings item

