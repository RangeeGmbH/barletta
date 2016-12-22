jQuery(function($) {
  "use strict";

    fixsliderimages();

	// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('#back-top a').on("click", function(){
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	var homelink = $("a[data-drupal-link-system-path='<front>']");

	if(homelink.length){	//Check if the "Home" link element exists
        //it exists.
        //Now checking if we are on the "Home" page.
        if(checkifhome()){
            //we are on the Home site.
            //Add 'active' class to element.
            homelink.parent().addClass("active");
        }else{  //we are not on the home site.
            if(homelink.parent().hasClass("active")){    //does our element have active class?
                homelink.parent().removeClass("active");
            }
        }
	}

    function fixsliderimages() {
        //ONLY WORKAROUND
        $("#slider img").each(function () {
            $(this).addClass("image-style-slidersize");
        });

    }

    function checkifhome(){
        if(window.location.href == window.location.origin + homelink.attr('href')){
            return true;
        }else{
            return false;
        }
    }

});

