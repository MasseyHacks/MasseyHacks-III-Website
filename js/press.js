var menuOpen = false;
$(document).ready(function () {
	background();


	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
   
	!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-55807810-6","auto"),ga("send","pageview");
	$(".itemLink").hover(function(){
		$(this).css("border","3px solid black");
	},function(){
		$(this).css("border","none");
	}
);
})

$(window).resize(function(){
    $("#background").empty();
	background();
});

function background() {
	var pattern = Trianglify({
		height: $(window).height(),
		width: $(window).width(),
		cell_size: 150,
		variance: "0.5",
		x_colors: ["#ffc68f", "#e8751d", "#f99a45", "#fed7b1", "#0079f9", "#4ca4fb", "#6080d7", "#a9d3fd", "#0c0276", "#98aad7"]
	});

	$("#background").append(pattern.canvas());
}


function goTo(e, to) {
	e.click(function() {
		$('html, body').animate({
            scrollTop: to.offset().top - $("header").height()
        }, 200);
	})
}

function goToOverlay(e, to) {
	e.click(function() {
		$('html, body').animate({
            scrollTop: to.offset().top - $("header").height()
        }, 200);
		$(".overlay").hide();
		$(".hamburger").removeClass("is-active")
		$("html").css("overflow-y", "scroll");
		menuOpen = false;
	})
}

$(".itemLink").hover(function(){
	alert();
	$(this).css("border","3px solid black");
},function(){
	$(this).css("border","none");
}
);


