$(document).ready(function() {
  $('footer').on('click','button',function() {
    clicked = $(this).data();
    $('body').removeClass().addClass(clicked.theme);
  });
});
