$(document).ready(function() {
  $('footer').on('click','button',function() {
    $('body').toggleClass('swapper');
    $('.jumbotron').toggleClass('swapper');
    var current = $(this).text();
    if (current == 'Dark Theme'){
      $(this).text('Light Theme')
    } else {
      $(this).text('Dark Theme')
    }
  });
});
