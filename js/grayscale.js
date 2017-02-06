/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    /**if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }**/
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

function password() {
  var testV = 1;
  var pass1 = prompt('Enter Your Password', ' ');
  while (testV < 3) {
    if (!pass1)
      history.go(-1);
    if (pass1.toLowerCase() == "Guest") {
      alert('Password Correct');
      window.open("index.html");
      break;
    }
    testV += 1;
    var pass1 =
      prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
  }
  if (pass1.toLowerCase() != "password" & testV == 3)
    history.go(-1);
  return " ";
}