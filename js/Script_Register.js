$(function() {
    $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        // Show Password
    $('.eys_Hide').hide();
    $('.eys_Show').click(function(e) {
        e.preventDefault();
        $('.eys_Hide').show();
        $('.eys_Show').hide();
        $('#exampleFormControlInputPassword').attr('type', 'text');
    });
    $('.eys_Hide').click(function(e) {
        e.preventDefault();
        $('.eys_Show').show();
        $('.eys_Hide').hide();
        $('#exampleFormControlInputPassword').attr('type', 'password');
    });

});