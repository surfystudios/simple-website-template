// This would be better in CSS but it is good practice to re-write this in Javascript

$(document).ready(function(){
  console.log('ready for hovering!!!!!!')

    $('.icon').hover(function(){

       $(this).find('.icon__copy').toggleClass('icon__copy--active');

    });
});
