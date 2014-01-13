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
			viewOutputWidth: 100, // Image Width
			viewOutputHeight: 100, // Image Height
			viewOutputDIV: '#multiple_selection', // DIV that shows the outputed images.
			viewOutputHiddenField: 'image[]', // the name of the hidden field to submit
			// Allowed types
			library: true // Not used yet
		};
		
		var option = $.extend( defaults, options );
		
		return this.each( function() {
			var mediauploader;
			$( this ).click( function( e ) {
		        e.preventDefault();
		 
				// If the Media Uploader frame is already created, open it.
		        if( mediauploader ) {
		            mediauploader.open();
		            return;
		        }
				
				// Create the Media Uploader frame
		        mediauploader = wp.media.frames.file_frame = wp.media({
		            title: option.title,
		            button: {
		                text: option.button_text,
		                close: true
		          },
		          multiple: option.allowMultiple
		        });
		 
				// Grabs the selected files, if there are any, and displays them in the right order
		        mediauploader.on( 'select', function() {
		            selection = mediauploader.state().get( 'selection' );
		            
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
		        mediauploader.open();
		 
		    });
		});
	};
}( jQuery ) );