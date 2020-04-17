// scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".header").hide();
    } else {
        $(".header").show();
    }
});

// Slider

$('.carousel').carousel({
    interval: 4000
})

// Menu

$("#open-menu").click(function(){
  $(".mobile-menu").addClass("show");
});

$("#close-menu").click(function(){
  $(".mobile-menu").removeClass("show");
});