(function() {
  'use strict';

})();

(function() {
    let blogForm = $('#blog');

    blogForm.on('submit', function () {
        console.log('hohsofhvsdf');
        let title = blogForm.find('input[name="title"]');
        let date = blogForm.find('input[name="date"]');
        let text = blogForm.find('textarea[name="text"]');

        if (title.val().length > 0 && date.val().length > 0 && text.val().length > 0) {
            //console.log('.login-form submitted');
            let blogFormData = blogForm.serialize();

            let result = $.ajax({
                url: '/admin/addpost',
                type: 'POST',
                data: blogFormData,
                dataType: 'json'
            });

            //alert(result);
            //console.log(result);

            result.done(function(answer) {
                if(answer.status === 'Запись успешно добавлена') {
                    alert(answer.status);
                }
            });
            result.fail(function(answer) {
                alert(answer);
            });
        } else {
            alert('Заполните все поля!');
        }
        return false;
    });
})();
