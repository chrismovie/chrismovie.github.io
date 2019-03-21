var $j = jQuery.noConflict();

$j(document).ready(function() {
	"use strict";

function totop_button(a) {
	"use strict";

	var b = $j("#back_to_top");
	b.removeClass("off on");
	if (a === "on") { b.addClass("on"); } else { b.addClass("off"); }
}

function backButtonShowHide(){
	"use strict";

	$j(window).scroll(function () {
		var b = $j(this).scrollTop();
		var c = $j(this).height();
		var d;
		if (b > 0) { d = b + c / 2; } else { d = 1; }
		if (d < 1e3) { totop_button("off"); } else { totop_button("on"); }
	});
}

function backToTop(){
	"use strict";

	$j(document).on('click','#back_to_top',function(e){
		e.preventDefault();

		$j('body,html').animate({scrollTop: 0}, $j(window).scrollTop()/3, 'linear');
	});
}

//backButtonShowHide();
backToTop();

});