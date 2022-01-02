;(function($) {
		$.fn.uploadFile = function(options) {
			var defaults = {
				action: 'upload.php'
			}
			var endOptions = $.extend(defaults, options)

			var formData = new FormData(this[0])
			return new Promise(function(resolve, reject) {
				$.ajax({
				type: 'post',
				url:  endOptions.action,
				data: formData,
				cache: false,
				processData: false,
				contentType: false,
				success: function(res) {
					resolve(res)
				},
				error: function(err) {
					reject(err)
				}
			})
		})
	}
	})(jQuery);