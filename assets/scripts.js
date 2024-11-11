$(document).ready(function() {
    /***********
     VARIABLES
     **********/
    var megaMenuItem = $('.mega-menu a');
    var hamburgerMenuItem = $('.hamburger-menu a');

    /***********
     SCROLL TO TOP
     **********/

    const $myButton = $('#toTop');
    $('body').on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $myButton.fadeIn();
        } else {
            $myButton.fadeOut();
        }
    });
    $myButton.on('click', function() {
        $('html, body').scrollTop(0);
    });

    /***********
     MENU BORDER
     **********/
    $(megaMenuItem).on('click', function() {

        $(megaMenuItem).removeClass('active');

        $(this).addClass('active');

    });
    /***************
     HAMBURGER MENU TOGGLE
     ******************/

    $('.hamburger-toggle').on('click', function() {
        $('.hamburger-menu-container').toggleClass('open');
    });

    hamburgerMenuItem.on('click', function() {
        $('.hamburger-menu-container').removeClass('open');
    });

    /*********
    FADE IN EFFECT
     *********/

    function checkVisibility() {
        $('.fade-in-section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height() - 100;

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }else{
                $(this).removeClass('visible');
            }
        });
    }

    checkVisibility();

    $('body').on('scroll', function() {
        checkVisibility();
    });

    /************
     ACORDION EXPAND/COLLAPSE
     *************/
    $('.accordion-short').on('click', function () {
        const moreInfo = $(this).next('.accordion-more-info');
        const icon = $(this).find('i.text-end');

        moreInfo.slideToggle(300);
        moreInfo.toggleClass('expand minimize');


        $(this).toggleClass('expand minimize');

        if (icon.hasClass('fa-plus')) {
            icon.removeClass('fa-plus').addClass('fa-minus');
            moreInfo.css('display', 'flex');
        } else {
            icon.removeClass('fa-minus').addClass('fa-plus');
        }
    });

    /*********
     DISPLAY IMAGES DYNAMICALLY
     *********/

    const imageContainer = $('#gallery-image-container');
    const totalImages = 68;

    for (let i = 0; i <= totalImages; i++) {

        const imageWrapper = $('<div>', {
            class: 'image-wrapper col-lg-3 col-md-4 col-sm-6 col-12'
        });

        const figure = $('<figure>');

        const img = $('<img>', {
            src: `/assets/images/gallery/life_in_digital_${i}.jpg`,
            alt: `life_in_digital_${i}`,
            class: 'dynamic-image'
        });

        figure.append(img);
        imageWrapper.append(figure);
        imageContainer.append(imageWrapper);
    }
});

