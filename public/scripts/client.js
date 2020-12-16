//const userHelper    = require("../../server/lib/util/user-helper");
$(document).ready(function() {



  const timePassed = (time) => {
    let Difference_In_Time = Date.now() - new Date(time)
    let Difference_In_Secondes= Difference_In_Time / 1000
    let Difference_In_Minutes = Difference_In_Time / (1000 * 60)
    let Difference_In_Hours = Difference_In_Time / (1000 * 3600);
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let Difference_In_Years = Difference_In_Days /360
    if (Difference_In_Years >= 1) {
      return Math.trunc(Difference_In_Years) + " years";
    } else if (Difference_In_Days >= 1) {
      return Math.trunc(Difference_In_Days) + " days";
    } else if (Difference_In_Hours >= 1) {
      return Math.trunc(Difference_In_Hours) + " hours";
    } else if (Difference_In_Minutes >= 1) {
      return Math.trunc(Difference_In_Minutes) + " minutes";
    } else {
      return Math.trunc(Difference_In_Secondes) +" secondes"
    }
  }
  
  // create an article
  const createTweetElement = (tweet) => {
    const element = 
      `<article>
          <header class="tweet-header">
            <div class="image">
              <image class="avatar" src="${tweet.user.avatars}">
              <h5>${tweet.user.name}</h5>
            </div>
            <h3 class="hide">${tweet.user.handle}</h3>
          </header>
          <div class ="tweet-content">
            <p>${tweet.content.text}</p>
          </div>
          <footer class ="footer-tweet">
            <output> ${timePassed(tweet.created_at)}</output>
            <span class="emoji">🏴 ↹ 🖤❤</span>
          </footer>
      </article>`

    return element;
  }

  // add the new articles to the section in the page html
  const renderTweets = (tweets) => {

    //loop throught the tweets 
    for (const tweet of tweets) {

      // create article for each tweet
      const $tweet = createTweetElement(tweet);
      //add the article to the DOM
      $('#tweets-container').prepend($tweet);
    }
  }
 
  // using AJAX to fetch tweets 
  const loadTweets = () => {
     // create the url for the request
     const url = `http://localhost:8080/tweets`;

     // Create an AJAX request GET
     $.ajax({
       method: 'GET', 
       url: url,
     })
       .then((result) => {
         // success. getting the result here
         console.log(result);
         renderTweets(result);
       })
       .catch((err) => console.log(err));
  }

  // on loading fetch the tweets and add them to the DOM
  loadTweets();


  $('form').on('submit', function(event) {
    //prevent the default form submission behaviour
    event.preventDefault();
    // create the url for the request
    const url = `http://localhost:8080/tweets`;
    // if the tweet is not empty and below 140 cararcters post the tweet 
    if ($("#tweet-text").val() && $("#tweet-text").val().length <=140) {
      //turn the data into a query string
      const values = $("#tweet-text").serialize();
      // Create an AJAX request POST
      $.ajax({
          url: url,
          type: "post",
          data: values ,
          success: function (response) {
            $("#tweet-text").val("");
            console.log("request done");
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
          }
      });
    } else if ($("#tweet-text").val() && $("#tweet-text").val().length > 140) {
      alert("The tweet content is too long");
    } else {
      alert("The tweet is not present");
    }
   
   
});   

});