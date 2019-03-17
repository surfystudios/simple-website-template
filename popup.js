
  //Display message and a field to enter your name and button

  //On click store value in variable and display thank you message

  //User can close the window now per x-click

$(document).ready(function(){
  console.log('document ready');
  //notify when something scrolls

  $(window).scroll(function(){
   var y = $(document).scrollTop();

    if (y > 4300){
      console.log("popup show now");
      $('.popup-window').addClass("popup-window--active");
    }

    else {
      console.log('not showing');
      $('.popup-window').removeClass("popup-window--active");
    }

  });

});
