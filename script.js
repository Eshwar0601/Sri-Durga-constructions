new WOW().init();
$(document).ready(function() {
    $('#main-Carousel').carousel({interval:1700})   
    // $('#carouselButton').click(function() {
    //     if ($("#carouselButton").children("span").hasClass('fa-pause')) {
    //         $("#mycarousel").carousel('pause');
    //         $("#carouselButton").children("span").removeClass('fa-pause');
    //         $("#carouselButton").children("span").addClass('fa-play');
    //     }
    //     else if ($("#carouselButton").children("span").hasClass('fa-play')){
    //         $("#mycarousel").carousel('cycle');
    //         $("#carouselButton").children("span").removeClass('fa-play');
    //         $("#carouselButton").children("span").addClass('fa-pause');                    
    //     }
    // });

})
('body').scrollspy({ target: '#navbar' })
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})

