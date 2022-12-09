//function that checks tweet counter.
$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const textLength = 140;
    const textLeft = textLength - $(this).val().length;
    const counter = $(".counter");

    counter.html(textLeft);
    if (textLeft < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'black');
    }
  });

});



