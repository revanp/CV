(function ($) {
  "use strict";
  jQuery(document).ready(function () {
    $(window).on("load", function () {
      $("#status").fadeOut();
      $("#preloader").delay(500).fadeOut("slow");
      $(".owl-carousel").owlCarousel({
        loop:true,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        responsive:{
          0:{
            items:3
          },
          600:{
            items:5
          },
          1000:{
            items:8
          }
        }
      });
    });
    $(window).on("load", function () {
      $(".typing").typed({
        strings: [
          "I am Web Developer,",
          "Back-End Developer,",
          "Mobile Developer,",
          "Freelance Photographer,",
          "and I will make amazing work for you.",
        ],
        typeSpeed: 70,
      });
    });
    AOS.init({ duration: 1200, once: true, disable: "mobile" });
    var parallax = function () {
      $(window).stellar({
        // responsive: true,
      });
    };
    $(function () {
      parallax();
    });
    var arrowBounce = function () {
      var arrow = $(".arrow");
      if (arrow.hasClass("lift")) {
        arrow.removeClass("lift");
      } else {
        arrow.addClass("lift");
      }
    };
    setInterval(arrowBounce, 800);
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("#navigation").addClass("navigation-background");
      } else {
        $("#navigation").removeClass("navigation-background");
      }
    });
    $(document).on("click", ".navbar-collapse.in", function (e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });
    $("body").scrollspy({ target: ".navbar-collapse", offset: 195 });
    $("a.smoth-scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate({ scrollTop: $(anchor.attr("href")).offset().top - 50 }, 1e3);
      e.preventDefault();
    });
    $("#port-image").mixItUp();
    $(".flexslider").flexslider({ animation: "slide" });
    $(function () {
      $("#contact-form").validate({
        rules: {
          name: { required: true, minlength: 2 },
          email: { required: true },
          message: { required: true },
        },
        messages: {
          name: {
            required: "Please Input Your Name",
            minlength: "your name must consist of at least 2 characters",
          },
          email: { required: "Please Input Your Email" },
          message: { required: "Your Message Required" },
        },
        submitHandler: function (form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "php/process.php",
            success: function () {
              $("#contact :input").attr("disabled", "disabled");
              $("#contact").fadeTo("slow", 1, function () {
                $(this).find(":input").attr("disabled", "disabled");
                $(this).find("label").css("cursor", "default");
                $("#success").fadeIn();
              });
            },
            error: function () {
              $("#contact").fadeTo("slow", 1, function () {
                $("#error").fadeIn();
              });
            },
          });
        },
      });
    });
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 500) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });
    $(".scroll-to-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
})(jQuery);
