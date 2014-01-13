Wordpress Media Uploader - Easy Usage
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

The code below will just show an upload button with the output box:
```html
<p>
	<label for="upload_image">
		<!--<input id="upload_image" type="text" size="36" name="ad_image" value="http://" />-->
		<input id="upload_image_button" class="button" type="button" value="Upload Image" /><br />
	    	Enter a URL or upload an image 
	</label>
</p>
<p>
	<div id="multiple_selection" style="width: 500px;"></div>
</p>
```

Here is the JS for the code above:
```javascript
$( '#upload_image_button' ).mediaUploader({ 
	allowMultiple: true,
	viewOutput: true,
	library: { type: '' }
});
```

The code below will show the the input url field, upload button, and output box:
```html
<p>
	<label for="upload_image2">
	    <input id="upload_image2" type="text" size="36" name="ad_image" value="http://" />
	    <input id="upload_image_button2" class="button" type="button" value="Upload Image" />
	    <br />Enter a URL or upload an image 
	</label>
</p>
<p>
	<div id="multiple_selection2"></div>
</p>
```

Here is the JS for the code above:
```javascript
$( '#upload_image_button2' ).mediaUploader({ 
	urlField: '#upload_image2', 
	allowMultiple: false,
	viewOutputDIV: '#multiple_selection2',
	viewOutput: false,
	library: { type: 'text' }
});
```

