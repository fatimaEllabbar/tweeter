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
      $('#tweets-container').append($tweet);
    }
  }


 
  $('form').on('submit', function(event) {
    //prevent the default form submission behaviour
    event.preventDefault();
console.log("Hhhhhhh")
 const user = "fatima"
    const tweet = {
      user: user,
      content: {
        text: $("#tweet-text").val()
      },
      created_at: Date.now()
    };

console.log(tweet)
  });

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
renderTweets(data);


});