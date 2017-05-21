let preloader = (function () {
   let percentagesTotal = 0,
       preloader = $('.preloader');

   let imgPath = $('*').map(function (ndx, element) {
       let background = $(element).css('background-image'),
           img = $(element).is('img'),
           path = '';

       if (background != 'none') {
           path = background.replace('url("', '').replace('")', '');
       }

       if (img) {
           path = $(element).attr('src');
       }

       if (path) {
           return path;
       }
   });

   let setPercentages = function (total, current) {
       let percentages = Math.ceil(current / total * 100);

       $('.preloader__percentages').text(percentages + '%');

       if (percentages >= 100) {
           preloader.fadeOut();
       }

   };

   // todo js#2 74:58
   let loadImages = function (images) {
       if (!images.length) {
           preloader.fadeOut();
       } else {
           images.forEach(function (img) {
               let fakeImage = $('<img>', {
                   attr: {
                       src: img
                   }
               });
               fakeImage.on('load error', function () {
                   percentagesTotal++;
                   setPercentages(images.length, percentagesTotal);
               });
           });
       }
   };

   return {
       init: function () {
           //console.log(imgPath);
           let imgs = imgPath.toArray();
           loadImages(imgs);
       }
   }

})();

$(function () {
    preloader.init();
});
