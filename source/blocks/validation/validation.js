(function () {

    $('.feedback-form').on('submit', function () {
        console.log('.feedback-form submitted');
        return false;
    });

    let loginForm = $('.login-form');

    loginForm.on('submit', function () {
        let login = loginForm.find('#user-login-name');
        let pwd = loginForm.find('#user-password');
        let uCheck = loginForm.find('#user-check');
        let uYes = loginForm.find('#user-radio-yes');
        let uNo = loginForm.find('#user-radio-no');

        let valid = true;

        if (login.val().length > 0) {
            login.removeClass('invalid');
        } else {
            login.addClass('invalid');
            valid = false;
        }

        if (pwd.val().length > 0) {
            pwd.removeClass('invalid');
        } else {
            pwd.addClass('invalid');
            valid = false;
        }

        if (uCheck.prop('checked') && uYes.prop('checked')) {
            loginForm.find('.login-form__user-question').removeClass('invalid');
        } else {
            loginForm.find('.login-form__user-question').addClass('invalid');
            valid = false;
        }

        if (valid) {
            //console.log('.login-form submitted');
            let loginFormData = loginForm.serialize();

            let result = $.ajax({
                url: '/login',
                type: 'POST',
                data: loginFormData,
                dataType: 'json'
            });

            //alert(result);
            //console.log(result);

            result.done(function(answer) {
                if(answer.status === 'Авторизация успешна!') {
                    window.location = '/admin';
                }else{
                    alert(answer.status);
                }
            });
            result.fail(function(answer) {
                alert(answer);
            });
        } else {
            // invalid
        }

        return false;
    });

})();
