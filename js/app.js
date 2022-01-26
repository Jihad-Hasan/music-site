
$(document).ready(function(){
    $('fast-logo').hover(
        function(){
            $(this).attr("src","../img/logo.png")
        }
    );
});
//   all ------------------
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: false,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
              
               
                1024: {
                    slidesPerView: 1,
                },
            
            }
        });
    }

   
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});