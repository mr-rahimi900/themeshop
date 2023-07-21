$(function() {
    // $('.dropify-infos-message').css('fontSize', '10px');
    // Input_Edit_info_user-Panel
    $('.Part_button_Save_info').hide();
    $('.Inp_Page_user_panel').attr('disabled', 'disabled');
    $('.text_area_Page_user_panel').attr('disabled', 'disabled');
    $('.btn_Edit_info_User_panel').click(function(e) {
        e.preventDefault();
        $('.btn_Edit_info_User_panel').hide();
        $('.Part_button_Save_info').show();
        $('.Inp_Page_user_panel').attr('disabled', false);
        $('.text_area_Page_user_panel').attr('disabled', false);
    });

    // Uploader img
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function() {
        readURL(this);
    });

    // maxlength floatingTextarea
    $('#floatingTextarea').maxlength({
        alwaysShow: true
    });

    // rule change password
    $('.BTN_Change_Password').attr('disabled', 'disabled');
    var validateInput = $('input.validate');

    function validateInputs() {
        var password = $('#pass').val(),
            conf = $('#conf').val(),
            all_pass = true;

        var uppercase = password.match(/[A-Z]/),
            number = password.match(/[0-9]/);

        if (password.length < 8) {
            $('.password_length').removeClass('complete');
            all_pass = false;
        } else $('.password_length').addClass('complete');

        if (uppercase) $('.password_uppercase').addClass('complete');
        else {
            $('.password_uppercase').removeClass('complete');
            all_pass = false;
        }

        if (number) $('.password_number').addClass('complete');
        else {
            $('.password_number').removeClass('complete');
            all_pass = false
        }


        if (password == conf && password != '') $('.password_match').addClass('complete');
        else {
            $('.password_match').removeClass('complete')
            all_pass = false;
        }
        if (all_pass) {
            $('.BTN_Change_Password').attr('disabled', false);
        } else {
            $('.BTN_Change_Password').attr('disabled', 'disabled');
        }
    }
    validateInput.each(validateInputs).on('keyup', validateInputs);

    function showPassword() {
        if (validateInput.attr('type') === 'password') {
            validateInput.attr('type', 'text');
        } else if (validateInput.attr('type') === 'text') {
            console.log('else');
            validateInput.attr('type', 'password');
        }
    }
    $('.togglePassword').on('click', showPassword);


});