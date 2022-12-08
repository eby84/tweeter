/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  


const createTweetElement = function(tweets){
  const $tweets =  $(`<article class="tweets">
  <header >
    
    <div class="img-name">
    <img src=${tweets.user.avatars}>
    <div id="name">${tweets.user.name}</div>
  </div>
 
  <div id="lastName">${tweets.user.handle}</div>

  </header>
  <textarea name="text" placeholder=${tweets.content.text}
    id="tweet-text"></textarea>
  <footer>
    <div>${tweets.created_at}</div>
      <div class="image-class">
        <i class="fa-solid fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
        
    </div>

  </footer>

</article>`);
return $tweets;
};




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


const renderTweets = (tweets) => {
  //loop through the array
  for (const tweet of tweets) {
    const $tweets = createTweetElement(tweet);
// append the $tweets to the DOM
$(".tweet-container").append($tweets);
  }
};

renderTweets(data);
});