$(document).ready(function() {
  // --- our code goes here ---

  $("#tweet-text").on('input',function(){
    let counter = $("#tweet-text").val().length;

    if(counter <= 140){
      $('.counter').removeClass("change")
      $('.counter').val(counter);
    } else{
      $('.counter').addClass("change")
      $('.counter').val(140-counter);
    }
   
  })
});
