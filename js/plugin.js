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

    const $ticker = $('.ticker-content');
    const itemHeight = $('.ticker-item').outerHeight();
    const speed = 4000;
    let pause = false;

    function scrollNews() {
        if (!pause) {
            $ticker.animate({ top: `-=${itemHeight}px` }, 800, function() {
                $ticker
                    .append($ticker.find('.ticker-item').first())
                    .css('top', 0);
            });
        }
    }
    let interval = setInterval(scrollNews, speed);
    $('.ticker-wrapper').hover(
        function() { pause = true; },
        function() { pause = false; }
    );

    ////////////////// End news ticker-item


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



////// Start Chart

const chartData = {
    gold: {
        title: "أسعار الذهب",
        day: {
            value: "3,289.15",
            change: "-0.81% (-26.57)",
            data: [67.3, 67.4, 67.5, 67.2, 67.1, 66.9, 66.8]
        },
        month: {
            value: "3,350.55",
            change: "+0.23% (7.45)",
            data: [65, 65.5, 66.5, 66.8, 67, 67.3, 67.1]
        },
        year: {
            value: "3,589.80",
            change: "+1.88% (70.30)",
            data: [60.1, 62.3, 64, 65.7, 66.4, 67.2, 68.1]
        },
        "5years": {
            value: "4,010.30",
            change: "+8.15% (320.80)",
            data: [45, 50.2, 55, 60.8, 65.5, 67.2, 70]
        }
    },
    silver: {
        title: "أسعار الفضة",
        day: {
            value: "950.00",
            change: "-0.32% (-3.00)",
            data: [24, 24.1, 24.2, 24, 23.9, 23.8, 23.7]
        },
        month: {
            value: "980.00",
            change: "+1.50% (14.50)",
            data: [22.5, 23, 23.5, 24, 24.3, 24.5, 24.4]
        },
        year: {
            value: "1,050.00",
            change: "+4.00% (40.00)",
            data: [20, 21.5, 22.5, 23.5, 24.2, 25, 26]
        },
        "5years": {
            value: "1,300.00",
            change: "+10.00% (120.00)",
            data: [15, 17.5, 20, 22.5, 25, 26, 27]
        }
    },
    oil: {
        title: "أسعار الخام",
        day: {
            value: "1,200.00",
            change: "-1.00% (-12.00)",
            data: [70, 71, 72, 71, 70, 69, 68]
        },
        month: {
            value: "1,260.00",
            change: "+1.20% (15.00)",
            data: [66, 68, 69, 70, 71, 72, 73]
        },
        year: {
            value: "1,400.00",
            change: "+3.50% (45.00)",
            data: [60, 63, 66, 69, 71, 72, 74]
        },
        "5years": {
            value: "1,600.00",
            change: "+8.00% (120.00)",
            data: [50, 55, 60, 65, 70, 72, 75]
        }
    }
};

let currentMetal = 'gold';
let currentPeriod = 'day';
let chart;

function renderChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    const selected = chartData[currentMetal][currentPeriod];

    // تحديث القيم
    $('#main-value').text(selected.value);
    $('#change').text(selected.change);
    $('#tab-title').text(chartData[currentMetal].title);

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [{
                data: selected.data,
                fill: true,
                backgroundColor: 'rgba(255,0,0,0.1)',
                borderColor: 'red',
                tension: 0.3
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

$(document).ready(function() {
    renderChart();

    $('.tab-button').click(function() {
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        currentMetal = $(this).data('metal');
        renderChart();
    });

    $('.days a').click(function() {
        $('.days a').removeClass('active');
        $(this).addClass('active');
        currentPeriod = $(this).data('period');
        renderChart();
    });
});


////// End  Chart