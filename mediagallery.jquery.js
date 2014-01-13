( function( $ ) {
	$.fn.mediaUploader = function( options ) {
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
		
		var option = $.extend( defaults, options );
		
		return this.each( function() {
			var custom_uploader;
			$( this ).click( function( e ) {
		        e.preventDefault();
		 
		        //If the uploader object has already been created, reopen the dialog
		        if( custom_uploader ) {
		            custom_uploader.open();
		            return;
		        }
		 
		        //Extend the wp.media object
		        custom_uploader = wp.media.frames.file_frame = wp.media({
		            title: option.title,
		            button: {
		                text: option.button_text,
		                close: true
		          },
		          multiple: option.allowMultiple
		        });
		 
		        //When a file is selected, grab the URL and set it as the text field's value
		        custom_uploader.on( 'select', function() {
		            selection = custom_uploader.state().get( 'selection' );
		            
					selection.map( function( attachment ) {
						attachment = attachment.toJSON();
						var attachmentURL = attachment.url;
						
						// Inserts the attachment url into the url field
						$( option.urlField ).val( attachmentURL );
						
						/*
						 * If viewOutput is set to true it will output the selected image(s)
						 * with a hidden input field with the url for each image
						 */
						if( option.viewOutput == true ) {
							var width = option.viewOutputWidth;
							var height = option.viewOutputHeight;
							var hiddenField = option.viewOutputHiddenField;
							var append = '<div style="float: left; width: 120px; height: 120px;">'
							+ '<img src="'+attachmentURL+'" style=" height: '+height+'px; width: '+width+'px;" />'
							+ '<input type="hidden" name="'+hiddenField+'" value="'+attachmentURL+'" />'
							+ '</div>';
							$( option.viewOutputDIV ).append( append );
						}
					}); 
		        });
		 
		        //Open the uploader dialog
		        custom_uploader.open();
		 
		    });
		});
	};
}( jQuery ) );