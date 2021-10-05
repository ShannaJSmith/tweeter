$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const count = $(this).val().length;
    let counter = 140 - count;
    $('.tweet-button-counter').children('.counter').text(counter);
    if (counter < 0) {
      $('.tweet-button-counter').children('.counter').css('color', 'red');
    }
  });
});
