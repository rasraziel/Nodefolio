//Navigation menu highlighting
$(document).ready(function() {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname.slice(0, -1) + '"]').closest('li').addClass('active'); 
    console.log(location.pathname);
  });