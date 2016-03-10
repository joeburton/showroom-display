 (function($){
 	
 	$.fn.bgLoaded = function(custom) {

 		var self = this;

		// Default plugin settings
		var defaults = {
			afterLoaded : function(){
				this.addClass('bg-loaded');
				
			},
			afterAllLoaded: function () {
				console.log('gets called after all images are loaded or attempted')
			}
		};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);
		var count = 0;

		// Loop through element
		self.each(function(){
			
			var $this = $(this),
				bgImgs = $this.css('background-image').split(', ');
			
			$this.data('loaded-count', 0);
			
			$.each( bgImgs, function(key, value) {
				
				var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
				
				$('<img/>').attr('src', img).on('load', function() {
					
					count++;

					$(this).remove(); // prevent memory leaks
					$this.data('loaded-count', $this.data('loaded-count') + 1 );
					
					//console.log('successfully loaded image: ', count);

					if ($this.data('loaded-count') >= bgImgs.length) {
						settings.afterLoaded.call($this);
					}
					
					if (count === self.length) {
						settings.afterAllLoaded.call();
					}	

				}).on('error', function() { 
					count++;
					if (count === self.length) {
						//console.log('image failed to load: ', count);
						settings.afterAllLoaded.call();
					}	
				});

			});

		});

	};

})(jQuery);