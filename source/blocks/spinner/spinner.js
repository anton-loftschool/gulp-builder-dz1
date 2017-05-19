(function () {

  var path;
  var imgsTotal;
  var imgs = [];
  var percentsTotal = 1;
  var $spinner = $('.spinner');
  var $spinnerPercents = $('.spinner__percents');

  // todo map
  $.each($('*'), function () {
    var $this = $(this);
    var background = $this.css('background-image');
    var img = $this.is('img');

    if (background.indexOf('url')>-1){
      path = background.slice(5, -2);
      imgs.push(path);
    }
    if (img) {
      path = $this.attr('src');
      if (path) {
        imgs.push(path);
      }
    }
  });

  imgsTotal = imgs.length;

  imgs.forEach(function (item, i, array) {
    var $image = $('<img>', {
      attr: {
        src: array[i]
      }
    });
    $image.on({
      load: function () {
        setPercents(imgsTotal,percentsTotal);
        percentsTotal++;

      },
      error: function () {
        percentsTotal++;
        setPercents(imgsTotal,percentsTotal);
      }
    });
  });

  function setPercents(total, current) {
    var percent = Math.ceil(current / total * 100);
    if (percent >= 100) {
      $spinner.fadeOut();
    }
    $spinnerPercents.text(percent+'%');
  }

})();
