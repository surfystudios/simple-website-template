


  //Display message and a field to enter your name and button

  //On click store value in variable and display thank you message

  //User can close the window now per x-click

$(document).ready(function(){
  //notify when something scrolls
  $(window).scroll(function(){
   var y = $(document).scrollTop();
    console.log(y);

    //Add Class for fade in animation on scroll 4800
    if (y > 4300){
      console.log("popup show now")
      $('.popup-window').addClass("popup-window--active");}

    else {
      console.log('popup fade out now')
      // $('.popup-window').removeClass("popup-window--active");}
  });

});
