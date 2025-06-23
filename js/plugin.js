$(window).on("load", function() {

    $('.searchicon').click(function(e) {
        e.stopPropagation();
        $('.showboxsearch').fadeIn('slow');
    });

    $('.cancel, body').click(function() {
        $('.showboxsearch').fadeOut('slow');
    });

    $('.showboxsearch').click(function(e) {
        e.stopPropagation();
    });

    //////////////////Search


    function setActiveClass(parentSelector, childSelector) {
        $(parentSelector).on("click", childSelector, function() {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
    }
    setActiveClass(".pagination", "li a");
    setActiveClass(".iframeitems", "a");

    // This function is specific to each element that gets the active class

    $(".dark-mode li").on("click", function() {
        $("link[href*='theme']").attr("href", $(this).data("value"));
    });


    $(function() {
        const navbarMenu = $("#navbar");
        const overlayMenu = $(".overlay");

        $("#burger, .overlay").click(function() {
            navbarMenu.toggleClass("active");
            overlayMenu.toggleClass("active");
        });

        navbarMenu.on("click", "[data-toggle]", function(e) {
            if (window.innerWidth <= 999) {
                e.preventDefault();
                const $menuDropdown = $(this).parent();

                if ($menuDropdown.hasClass("active")) {
                    $menuDropdown.removeClass("active").find(".submenu").removeAttr("style");
                } else {
                    $(".menu-dropdown.active .submenu").removeAttr("style");
                    $(".menu-dropdown.active").removeClass("active");

                    $menuDropdown.addClass("active");
                    $menuDropdown.find(".submenu").css("max-height", $menuDropdown.find(".submenu")[0].scrollHeight + "px");
                }
            }
        });

        $(window).on("resize", function() {
            if (window.innerWidth > 999) {
                navbarMenu.removeClass("active");
                $(".menu-dropdown.active").removeClass("active").find(".submenu").removeAttr("style");
            }
        });
    });

    $('.burger').click(function() {
        $('.site-actions').addClass("active");
    });
    $('.cancel').click(function() {
        $('.navbar,.overlay,.site-actions').removeClass("active");
    });
    $('.overlay').click(function() {
        $('.site-actions').removeClass("active");
    });





    $(".menu-item").click(function() {
        $(this).addClass("activelink").siblings().removeClass("activelink");
    });

    $(function() {
        var $menu = $(".site-actions");
        var stickyOffset = $menu.offset().top;

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > stickyOffset) {
                $menu.addClass("sticky");
            } else {
                $menu.removeClass("sticky");
            }
        });
    });


    $(function() {
        var $bar = $(".site-menu");
        var offset = $bar.offset().top;
        var isFixed = false;

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > offset && !isFixed) {
                $bar.addClass("sticky");
                isFixed = true;
            } else if ($(window).scrollTop() <= offset && isFixed) {
                $bar.removeClass("sticky");
                isFixed = false;
            }
        });
    });

    ////////////////// End show Header

    $('#newsTicker').breakingNews({
        direction: 'rtl'
    });


    $(function() {
        $('.popup-trigger').on('click', function() {
            var $wrapper = $(this).closest('.listarticles li');
            $wrapper.find('.popup-box').addClass('show');
        });
        $('.close-btn').on('click', function() {
            $(this).closest('.popup-box').removeClass('show');
        });
    });

    $(".slider-articles").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1500,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },

            {
                breakpoint: 999,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },

            {
                breakpoint: 767,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
        ]
    });

    $(".slider-caricature,.slider-infographic").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.scrollTopBtn').addClass('show');
        } else {
            $('.scrollTopBtn').removeClass('show');
        }
    });

    $('.scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // End Scroll Top

});



function initSlider(sliderID, carouselID) {
    const $carouselItems = $('#' + carouselID + ' .slides li');
    const showNav = $carouselItems.length > 3;

    $('#' + carouselID).flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 180,
        asNavFor: '#' + sliderID,
        directionNav: showNav
    });

    $('#' + sliderID).flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 3000,
        sync: '#' + carouselID
    });
}

$(window).on('load', function() {
    initSlider('slider1', 'carousel1');
    initSlider('slider2', 'carousel2');

    // Re-init on tab change
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(btn => {
        btn.addEventListener('shown.bs.tab', function() {
            $('#slider1, #slider2, #carousel1, #carousel2').each(function() {
                $(this).data('flexslider').resize();
            });
        });
    });
});