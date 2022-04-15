$(document).ready(function () {
  $(".js-section-about").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "50%",
    }
  );
  // Smooth scolling nav
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  // form section
  $("input[type='text']").focus(function () {
    $(this).addClass("inputfocus");
  });
  $("input[type='text']").blur(function () {
    $(this).removeClass("inputfocus");
  });
  $("input[type='email']").focus(function () {
    $(this).addClass("inputfocus");
  });
  $("input[type='email']").blur(function () {
    $(this).removeClass("inputfocus");
  });
  $("#comment").focus(function () {
    $(this).addClass("inputfocus");
  });
  $("#comment").blur(function () {
    $(this).removeClass("inputfocus");
  });

  $(".js-mobile-nav-icon").click(function () {
    $(".js-main-nav").slideToggle(200);
    if ($(".js-mobile-nav-icon i").hasClass("fa-bars")) {
      $(".js-mobile-nav-icon i").addClass("fa-times");
      $(".js-mobile-nav-icon i").removeClass("fa-bars");
    } else {
      $(".js-mobile-nav-icon i").addClass("fa-bars");
      $(".js-mobile-nav-icon i").removeClass("fa-times");
    }
  });
});
