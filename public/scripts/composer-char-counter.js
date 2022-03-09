$(document).ready(function () {
  $('#tweet-text').on('input', function () {
    const count = $(this).val().length;
    let counter = 140 - count;
    $('.tweet-button-counter').children('.counter').text(counter);
    if (counter < 0) {
      $('.tweet-button-counter').children('.counter').addClass('red');
    } else {
      $('.tweet-button-counter').children('.counter').removeClass('red');
    }
  });
});

// alternative style remaining characters
// if(remainingChar < 0) {
//   $counter.css('color', 'red');
// } else {
//   $counter.css('color', 'black');
// }
