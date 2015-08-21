(function($) {
    $.fn.modal = function(options) {
  			var openModals = [];

  			var settings = $.extend({
  		    modalShowClass : "show",
          modalCloseClass : "show",
  		    transitionSpeed: "0.25s",
  		    transition: "fadeIn"
  			}, options);

  			// Center modals on screen. 
  			this.each(function(index, element) {
  			   var modalWidth = ($(element).outerWidth()) / 2;
  			  $(this).css("margin-left", -modalWidth);
  			});



  			$("[data-modal]").on('click', function(e) {
          
  				e.preventDefault();
  				var targetModalID = $(this).data("modal");
  				var targetModal = $(".modal").filter(function() { 
                              return $(this).attr("id") == targetModalID
                            });

  				
          // Show target modal & add backdrop
  				targetModal.addClass(settings.modalShowClass);
  				$(".modal-backdrop").addClass("show");
          $("body").css("overflow", "hidden");
  			});

  			// Close active modal. 
  			this.find("[data-modal = 'modal-close']").click(function() {
          $(this).parents(".modal").removeClass(settings.modalShowClass);
          $(".modal-backdrop").removeClass("show");
          $("body").css("overflow", "hidden");
  			});

        // ("[data-modal]" + ", .modal-backdrop")

  			// Add transition
  			if (settings.transitionSpeed) {
  				this.each(function() {
  					$(this).css({"transition": "opacity" + " " + settings.transitionSpeed,});
  				});
  			}
  		}
}(jQuery));



