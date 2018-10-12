/* Axuta Theme Scripts */

(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    /*=========================================================================
        Sticky Header
    =========================================================================*/
    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }

        });
    });

    /*=========================================================================
            Mobile Menu
    =========================================================================*/
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });


    /*=========================================================================
        Screenshot Carousel
    =========================================================================*/
    function getSlide() {
        var wW = $(window).width();
        if (wW < 991) {
            return 1;
        } else if (wW < 1170) {
            return 3;
        } else {
            return 5;
        }
    }

    function getSlideSpace() {
        var wW = $(window).width();
        if (wW < 991) {
            return 0;
        }
        return 20;
    }

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: getSlide(),
        loop: true,
        autoplay: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        spaceBetween: getSlideSpace()
    });


    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
        Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    /*=========================================================================
        WOW Active
    =========================================================================*/
    new WOW().init();

    /*=========================================================================
        MAILCHIMP
    =========================================================================*/
    // if ($('.subscribe_form').length > 0) {
    /*  MAILCHIMP  */
    $('.subscribe-form').ajaxChimp({
        language: 'en',
        callback: mailchimpCallback,
        url: "https://otchi.us16.list-manage.com/subscribe/post?u=777352d24bcd1d0325af0c653&amp;id=20be498be3"
    });

    // }

    function mailchimpCallback(resp) {
        $('#subscribe-result').show();
        if (resp.result === 'success') {
            $('.subscription-success').show();
            $('.subscription-error').hide();
            $('.subscribe-form').hide();

        } else if (resp.result === 'error') {
            $('.subscription-error').show();
            $('.subscription-success').hide();
        }
    }

    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

})(jQuery);
