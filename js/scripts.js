$(document).ready(function() {

  $('.menu1').hide().fadeIn(100);

	$("#info").mouseover(function(){
        $("#info-menu").fadeIn(200);
				$("#info").addClass("active");
    });

	$("#made").mouseover(function(){
        $("#made-menu").fadeIn(200);
				$("#made").addClass("active");
    });

	$("#store").mouseover(function(){
        $("#made-menu").fadeOut(100);
		$("#made").removeClass("active");
    });

	$("#contact").mouseover(function(){
        $("#made-menu").fadeOut(100);
		$("#made").removeClass("active");
    });

	$(".link").click(function(){
				$("#made").removeClass("active");
        $("#made-menu").fadeOut(100);
				$("#info").removeClass("active");
			  $("#info-menu").fadeOut(100);
    });

	$("html").click(function(){
				$("#made").removeClass("active");
        $("#made-menu").fadeOut(100);
				$("#info").removeClass("active");
			  $("#info-menu").fadeOut(100);
    });

	$('.tooltip').tooltipster({
	   	position: 'bottom-right',
	   	arrow: false,
	   	offsetX: '10px',
	   	offsetY: '-20px',
	   	touchDevices: false
	});

	function createMailtoLinks(){
    $('A[data-u][href=""]').each(function(){
        var i = $(this);
        i.attr('href', 'mai'+'lto:'+i.data('u')+'@'+i.data('d'));
        if (i.html()==''){ i.html(i.data('u')+'@'+i.data('d')); }
    });
	}
	$(function(){
		createMailtoLinks();
	});

});
