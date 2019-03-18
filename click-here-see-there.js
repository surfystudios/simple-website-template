// This is the base of what we use on our people and planet page to implement the makers map with the pins for the different factories!
$(document).ready(function(){

  $('[data-info]').click(function(){

    $('.info').removeClass('info--active');

    $($(this).data('info')).addClass('info--active');

  });

});
