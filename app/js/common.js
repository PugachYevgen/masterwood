$(function() {
//
//     /********* Карусель *******/
//
//     var slideNow = 1;
//     var slideCount = $('#slidewrapper').children().length; /* возвращает кол-во таблиц в слайдере */
//     var translateWidth = 0;
//     $(document).ready(function() {
//
//
//         $('#next-btn').click(function() {
//             nextSlide();
//             return false
//         });
//
//         $('#prev-btn').click(function() {
//             prevSlide();
//             return false
//         });
//
//
//     });
//
//
//     function nextSlide() {
//         if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//             $('#slidewrapper').css('transform', 'translate(0, 0)');
//             slideNow = 1;
//         } else {
//             translateWidth = -$('#viewport').width() * (slideNow);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow++;
//         }
//     }
//
//     function prevSlide() {
//         if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//             translateWidth = -$('#viewport').width() * (slideCount - 1);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow = slideCount;
//         } else {
//             translateWidth = -$('#viewport').width() * (slideNow - 2);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow--;
//         }
//     }
//



//
});

// $(document).ready(function() {
//     $('.owl-carousel').owlCarousel({
//         center: true,
//         items: 3,
//         loop: true,
//         margin: 10,
//         responsive: {
//             600: {
//                 items: 3
//             }
//         }
//     });
// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 3,
        loop:true,
        margin:10,
        center: true,
        responsive:{
            600:{
                items:3
            }
        }

    });

});