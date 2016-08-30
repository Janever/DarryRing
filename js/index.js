$(function() {


    //轮播图
    var swiper = new Swiper('#carousel .swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction:false,
        autoplay: 3000,
    });
    var swiper = new Swiper('#carousel-gift .gift .swiper-container', {
        loop: true,
        pagination: '#carousel-gift .gift .swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction:false,
        autoplay: 3000,
    });
    var swiper = new Swiper('#carousel-gift .star .swiper-container', {
        loop: true,
        pagination: '#carousel-gift .star .swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction:false,
        autoplay: 3000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });


})

