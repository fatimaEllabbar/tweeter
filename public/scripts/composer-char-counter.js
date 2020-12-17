$(document).ready(function() {

  // receiving the input event from the form
  $("#tweet-text").on('input',function(){
    //count the number of the caracters 
    let counter = $("#tweet-text").val().length;

    if(counter <= 140){
      // if the number below 140 remove the color red and print the counter in the output
      $('.counter').removeClass("change")
      $('.counter').val(140-counter);
    } else{
       // if the number over 140 the color become red and the counter grows negative
      $('.counter').addClass("change")
      $('.counter').val(140-counter);
    }
   
  })
});
