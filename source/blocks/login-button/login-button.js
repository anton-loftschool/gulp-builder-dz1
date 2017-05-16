(function(){
    var button = $('.login-button');
    button.on('click', function (e) {
        var self = $(this);
        $('.flipper').toggleClass('flipper--flip');
        e.preventDefault();
        if (self.hasClass('login-button')) {
            self.hide();
        } else {
            button.show();
        }
    });
})();
