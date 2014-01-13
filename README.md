Wordpress-Media-Uploader-JS-Function
====================================
An easy way to use the new media gallery that was introduced in WP 3.5.

Default Options
===============
```javascript
var defaults = {
	// Text
	title: 'Choose Image:',
	button_text: 'Choose Image',
	// URL Field to insert image url into
	urlField: '#upload_image',
	// Choose to allow multiple
	allowMultiple: false,
	// Turn on output, if on use the viewOutputDIV
	viewOutput: false,
	viewOutputWidth: 100,
	viewOutputHeight: 100,
	viewOutputDIV: '#multiple_selection',
	viewOutputHiddenField: 'image[]',
	// Allowed types
	library: true
};
```
		
How to use
==========
The first step is to include this file inside your plugin or theme.<br />
The second step is to call the function by using<br />
```javascript
$( 'UPLOAD BUTTON ID' ).mediaUploader();
```


