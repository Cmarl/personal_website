$(document).ready(function() {
  $('footer').on('click','button',function() {
    var clicked = $(this).data();
    $('body').removeClass().addClass(clicked.theme);
  });
});
