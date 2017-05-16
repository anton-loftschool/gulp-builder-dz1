'use strict';

module.exports = function() {
    $.gulp.task('copy:water', function() {
        return $.gulp.src('./source/js/water.js', { since: $.gulp.lastRun('copy:water') })
            .pipe($.gulp.dest($.config.root + '/assets/js'));
    });
};
