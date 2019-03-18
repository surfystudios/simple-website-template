//Javascript for my entire project

var timeRemaining = 10;

$(document).ready(function(){

  var timer = setInterval(function(){
       console.log("tick "+ timeRemaining);
       timeRemaining--;

    $("#count-down").html(timeRemaining);

    if(timeRemaining == 0){
      showImages();
      clearInterval(timer);
    }

  }, 1000);

});

function showImages(){

  $("[data-img-path]").each(function(){

      var theImage = $(this);

      console.log(theImage.attr("id"));

      var path = theImage.data('img-path');
      theImage.attr("src", path);
      theImage.removeClass("hidden");

  });
};
