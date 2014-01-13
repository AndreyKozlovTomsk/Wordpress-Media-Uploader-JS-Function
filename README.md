Wordpress-Media-Uploader-JS-Function
====================================

Creates an easy way to insert the media uploader into your plugins

Default Options
===============
var defaults = {<br />
	\t// Text<br />
	title: 'Choose Image:',<br />
	button_text: 'Choose Image',<br />
	// URL Field to insert image url into<br />
	urlField: '#upload_image',<br />
	// Choose to allow multiple<br />
	allowMultiple: false,<br />
	// Turn on output, if on use the viewOutputDIV<br />
	viewOutput: false,<br />
	viewOutputWidth: 100,<br />
	viewOutputHeight: 100,<br />
	viewOutputDIV: '#multiple_selection',<br />
	viewOutputHiddenField: 'image[]',<br />
	// Allowed types<br />
	library: true<br />
};
		
How to use
==========
The first step is to include this file inside your plugin or theme.
The second step is to call the function by using
$( 'UPLOAD BUTTON ID' ).mediaUploader();
