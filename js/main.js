/*******************************************************************************

  Title: Service 4 Home
  Date: June 2013 

*******************************************************************************/

(function($) {

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.homeHieght();
      App.fixedNavi();
      App.anchorSlide();
      App.lightBox();
      App.parallaxScroll();
      App.contactForm();
      App.popupSliders();
    },





    /**
     * Home Screen Height
     */
    homeHieght: function() {
      var w = window.innerWidth;
      var m;
      if (w < 768) { m = 8 } else { m = 4 };
      var h = window.innerHeight;
      $('#head').height(h);
      $('.logo').css("margin-top", h / m);

      $(window).resize(function() {
        var w = window.innerWidth;
        var m;
        if (w < 1024) { m = 8 } else { m = 4 };
        var h = window.innerHeight;
        $('#head').height(h);
        $('.logo').css("margin-top", h / m);
      });


    },





    /**
     * Navigation Fixed Position
     */
    fixedNavi: function() {
      var off = $('#navigation').offset().top;
      $(window).resize(function() { off = $('#navigation').offset().top; });
      $(window).scroll(function() {
        var p = $(window).scrollTop();
        if ((p) > off) {
          $('body').addClass('fx')
        } else {
          $('body').removeClass('fx');
        }
      });
    },





    /**
     * Navigation Fixed Position
     */
    contactForm: function() {
      //contact form init
      var options = { target: "#alert" }
      $("#phone").intlTelInput();
      $("#contact-form").ajaxForm(options);
    },





    /**
     * Slide to next anchor navigation
     */
    anchorSlide: function() {
      $('#head .link, #navigation a, .arrow-up').on('click', function(e) {
        var goTo = $(this).attr('href');
        navH = $('#navigation').height();

        $('html, body').animate({
          scrollTop: $(goTo).offset().top - navH + 1
        }, 1400, "easeInOutExpo");

        e.preventDefault();
      });
    },




    /**
     * Lightbox init (fancybox 1)
     */
    lightBox: function() {
      $('figure a').fancybox();
    },




    /**
     * Parallax Scrolling
     */
    parallaxScroll: function() {

      var winW = $(window).innerWidth();
      var winH = $(window).innerHeight();

      if (winW > 1024) {
        // Cache the Window object
        $window = $(window);

        $('#head').each(function() {
          var $bgobj = $(this); // assigning the object

          $(window).scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!                
            var yPos = -($window.scrollTop() / 5);

            // Put together our final background position
            var coords = 'center ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

          }); // window scroll Ends

        });

        $('#about-us header').each(function() {
          var $bgobj = $(this); // assigning the object

          $(window).scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            var yPos = ($window.scrollTop() / 3) - 1600;

            // Put together our final background position
            var coords = 'center ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

          }); // window scroll Ends

        });

        $('#contact header').each(function() {
          var $bgobj = $(this); // assigning the object
          $(window).scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            var yPos = ($window.scrollTop() / 3) - 2200;

            // Put together our final background position
            var coords = 'center ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

          }); // window scroll Ends

        });

        $('#portfolio header').each(function() {
          var $bgobj = $(this); // assigning the object

          $(window).scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            var yPos = ($window.scrollTop() / 3) - 600;

            // Put together our final background position
            var coords = 'center ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

          }); // window scroll Ends

        });


        $('#services header').each(function() {
          var $bgobj = $(this); // assigning the object

          $(window).scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!                
            var yPos = ($window.scrollTop() / 3) - 1600;

            // Put together our final background position
            var coords = 'center ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

          }); // window scroll Ends

        });

      }

    },
    popupSliders: function() {
      var swifticSlider = $('.popup-slider.swiftic').find('.bxxslider');
      var nanitSlider = $('.popup-slider.nanit').find('.bxxslider');
      var anydoSlider = $('.popup-slider.anydo').find('.bxxslider');
      $('.open-slider.swiftic').on('click tap', function(){
        $('.popup-slider.swiftic').addClass('shown');
        setTimeout(function(){
          swifticSlider.bxSlider();
        },300);
        setTimeout(function(){
          swifticSlider.find('img').css('opacity', 1);
        },500);
      });
      swifticSlider.closest('.popup-slider').find('.close-btn').on('click tap', function(){
        $(this).closest('.popup-slider.shown').removeClass('shown').find('img').css('opacity', 0);
        swifticSlider.destroySlider();
      });
      swifticSlider.closest('.popup-slider').find('.close').on('click tap', function(){
        $(this).closest('.popup-slider.shown').removeClass('shown').find('img').css('opacity', 0);
        swifticSlider.destroySlider();
      });
      $('.open-slider.nanit').on('click tap', function(){
        $('.popup-slider.nanit').addClass('shown');
        slider = $('.popup-slider.nanit').find('.bxxslider');
        setTimeout(function(){
          nanitSlider.bxSlider();
        },300);
        setTimeout(function(){
          nanitSlider.find('img').css('opacity', 1);
        },500);
      });
      nanitSlider.closest('.popup-slider').find('.close-btn').on('click tap', function(){
        $(this).closest('.popup-slider.shown').removeClass('shown').find('img').css('opacity', 0);
        nanitSlider.destroySlider();
      });
      nanitSlider.closest('.popup-slider').find('.close').on('click tap', function(){
        $(this).closest('.popup-slider.shown').removeClass('shown').find('img').css('opacity', 0);
        nanitSlider.destroySlider();
      });
      $('.open-slider.anydo').on('click tap', function(){
        $('.popup-slider.anydo').addClass('shown');
        slider = $('.popup-slider.nanit').find('.bxxslider');
        setTimeout(function(){
          anydoSlider.bxSlider();
          document.getElementById('video').play();
        },300);
        setTimeout(function(){
          anydoSlider.find('img').css('opacity', 1);
        },500);
      });
      anydoSlider.closest('.popup-slider').find('.close-btn').on('click tap', function(){
        $(this).closest('.popup-slider.shown').removeClass('shown').find('img').css('opacity', 0);
        anydoSlider.destroySlider();
      });
      anydoSlider.closest('.popup-slider').find('.close').on('click tap', function(){
        $(this).closest('.popup-slider.shown').removeClass('shown').find('img').css('opacity', 0);
        anydoSlider.destroySlider();
      });
    }

  }


  $(function() {
    App.init();
  });


})(jQuery);