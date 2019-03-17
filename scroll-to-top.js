// This button scrolls you back to the beginning of the scroll section
$(document).ready(function(){
  //notify when something scrolls
  $(window).scroll(function(){
   var y = $(document).scrollTop();
    console.log(y);

    if( y < 2700 || y > 4300){
      console.log('button should show now');
      // $('.button').fadeIn('slow');
      $('.button').removeClass('show');
    }
    else {
      console.log('scroll section has passed button should dissappear now');
      // $('.button').fadeOut('slow');
      $('.button').addClass('show');
    }
  });

  $('.button').click(function(){
    console.log('button clicked')
     // $(document).scrollTop(0);
    $('html, body').animate({scrollTop: 2700}, 2000);
  })

});
