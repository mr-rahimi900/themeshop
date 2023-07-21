$(function() {
    AOS.init();


    // Timer
    $('#Restart').hide();
    let sec = 59;
    let min = 1;
    let x = setInterval(function() {
        sec--;
        if (sec < 0) {
            sec = 59;
            min--;
        }
        if (sec === 0 && min === 0) {
            sec = 0;
            min = 0;
            $('#Restart').show();
            clearInterval(x)
        }
        $('#sec_timer').text(sec);
        $('#min_timer').text("0" + min);
    }, 1000)
    $('#Restart').click(function(e) {
        e.preventDefault();
        $('#Restart').hide();
        let sec = 59;
        let min = 1;
        let x = setInterval(function() {
            sec--;
            if (sec < 0) {
                sec = 59;
                min--;
            }
            if (sec === 0 && min === 0) {
                sec = 0;
                min = 0;
                clearInterval(x)
                $('#Restart').show();
            }
            $('#sec_timer').text(sec);
            $('#min_timer').text("0" + min);
        }, 1000)
    });

    $(document).ready(function() {
        $('select').niceSelect();
      });

    // tuning megaMenu width
    let WidthScreen = $('.auto_Width').width()
    WidthScreen -= 250;
    $('.Hide_MageMenu').css('width', WidthScreen);

    // tuning megaMenu width
    $(window).resize(function() {
        let WidthScreen = $('.auto_Width').width()
        WidthScreen -= 250;
        $('.Hide_MageMenu').css('width', WidthScreen);
    });
    $('.Hover_IN_Show_megaMenu,.Hide_MageMenu').hover(function() {
        // over

        $('.Hide_MageMenu').css('display', 'block');
        // $('.Overflow').css('display', 'block');

    }, function() {
        // out
        $('.Hide_MageMenu').css('display', 'none');
        // $('.Overflow').css('display', 'none');
    });

    // MegaMenuOpen(Event, 'item1')

});

     /* ************** verify-phone-number */
     if ($("#countdown-verify-end").length) {
        var $countdownOptionEnd = $("#countdown-verify-end");
    
        $countdownOptionEnd.countdown({
          date: new Date().getTime() + 120 * 1000, // 2 minute later
          text: '<span class="day">%s</span><span class="hour">%s</span><span> : %s</span><span>%s</span>',
          end: function () {
            $countdownOptionEnd.html(
              "<a href='' class='btn-link-border-resend-number-verify'>ارسال مجدد</a>"
            );
          },
        });
    
        $(".item-line-number-input-verify-password").keyup(function () {
          $(this).next().focus();
        });
      }

// JS_maga_menu_Vertical

$('.button-header-top-mobile-cate').click(function(e) {
    e.preventDefault();
    $('.MegaMenu_Vertical').animate({ right: '0' })
        // $('.Box_Click_Close_Menu').animate({ right: '410px' })
    $('.overlay-themeshop').show(0);
    $('.Box_Click_Close_Menu').show();

});
$('.btn_filter_category').click(function(e) {
    e.preventDefault();
    $('.Vertical_Menu_filter').animate({ right: '0' })
        // $('.Box_Click_Close_Menu').animate({ right: '410px' })
    $('.overlay-themeshop').show(0);
    $('.Box_Click_Close_Menu').show();

});
$('.Box_Click_Close_Menu').click(function(e) {
    e.preventDefault();
    $('.MegaMenu_Vertical').animate({ right: '-380px' })
    $('.overlay-themeshop').hide(0);
});
$('.overlay-themeshop').click(function(e) {
    e.preventDefault();
    $('.MegaMenu_Vertical').animate({ right: '-380px' })
    $('.Vertical_Menu_filter').animate({ right: '-380px' })
    $('.overlay-themeshop').hide(0);
});
 $('.Part_Close_Vertical_Menu_filter').click(function(e) {
    e.preventDefault();
    $('.vertical-menu-filter-category').animate({ right: '-380px' })
     $('.overlay-themeshop').hide(0);
 });
$('.Part_Close_Vertical_Menu_filter').click(function(e) {
    e.preventDefault();
    $('.vertical-menu-filter').animate({ right: '-380px' })
    $('.overlay-themeshop').hide(0);
});
$('.button-open-submenu-one').click(function(e) {
    e.preventDefault();
    $(this).parents('.has-submenu-megamenu-vertical-level-one').siblings('.list-mega-menu-vertical-level-two').slideToggle('slow');
    $(this).toggleClass('active');

});
$('.button-open-submenu-two').click(function(e) {
    e.preventDefault();
    $(this).parents('.has-submenu-megamenu-vertical-level-two').siblings('.list-mega-menu-vertical-level-three').slideToggle('slow');
    $(this).toggleClass('active');
})

$('.btn-header-top-login,.submenu-login').hover(
    function(){
        $('.submenu-login').css('display','block');
},
    function(){
    $('.submenu-login').css('display','none');
});

  /* scroll progress start */
  var offset = 50;
  var duration = 500;
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  //console.log(pathLength);
  progressPath.style.transition = 'none';
  progressPath.style.strokeDasharray = pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.style.transition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  $(window).on('scroll', function () {
      if ($(this).scrollTop() > offset) {
          $('.progress-wrap').addClass('active-progress');
      } else {
          $('.progress-wrap').removeClass('active-progress');
      }
  });
  $('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: 0 }, duration);
      return false;
  });
  /* scroll progress end */
// JS_MegaMenu
// function MegaMenuOpen(evt, ItemMega) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     // Show the current tab, and add an "active" class to the link that opened the tab
//     document.getElementById(ItemMega).style.display = "block";
//     evt.currentTarget.className += " active";
// }

