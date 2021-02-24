// 自行加入的JS請寫在這裡
$(function() {
	//燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });

    // 影音連結
    $('.Multiple_slider').slick({
        dots: false,
        dotsClass: 'slick-dots', //原點可以換成數字
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });

    // Menu
    $(".first").click(function() {
        $('html,body').animate({
            scrollTop: $(".List").offset().top},'slow');
        e.preventDefault();
    });
    $(".second").click(function() {
        $('html,body').animate({
            scrollTop: $(".Video").offset().top},'slow');
        e.preventDefault();
    });
    $(".third").click(function() {
        $('html,body').animate({
            scrollTop: $(".Links").offset().top},'slow');
        e.preventDefault();
    });
    $(".fourth").click(function() {
        $('html,body').animate({
            scrollTop: $(".Download").offset().top},'slow');
        e.preventDefault();
    });

    // 定位點
    $(".goCenter").click(function() {
        $('html,body').animate({
            scrollTop: $("#center").offset().top},'slow');
        e.preventDefault();
    });

    $(".header .accesskey").click(function() {
        $('html,body').animate({
            scrollTop: $("#aU").offset().top},'slow');
        e.preventDefault();
    });

    $("#center .accesskey").click(function() {
        $('html,body').animate({
            scrollTop: $("#aC").offset().top},'slow');
        e.preventDefault();
    });
});