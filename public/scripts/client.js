/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {

  $.get('/tweets', (tweets) => {
    console.log(tweets);
  });

  const createTweetElement = function(data) {
    const $tweets = $(`<article class="tweets">
  <header >
    
    <div class="img-name">
    <img src=${data.user.avatars}>
    <div id="name">${data.user.name}</div>
  </div>
 
  <div id="lastName">${data.user.handle}</div>

  </header>
  <p class="tweet-text">${data.content.text}</p>
  <footer>
    <div>${timeago.format(data.created_at)}</div>
      <div class="image-class">
        <i class="fa-solid fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
        
    </div>

  </footer>

</article>`);
    return $tweets;
  };







  const renderTweets = (data) => {
    $(".tweet-container").empty();
    //loop through the array
    for (const tweet of data) {
      const $tweets = createTweetElement(tweet);
      // append the $tweets to the DOM
      $(".tweet-container").prepend($tweets);
    }
  };

  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
      .then((tweets) => {
        console.log("Tweets received!");
        renderTweets(tweets);
      })
      .catch((err) => {
        console.log("An error has occured!");
      });
  };
  loadTweets();




  //form from index.html
  $form = $(".tweetSubmit");

  $form.on('submit', (event) => {

    event.preventDefault();

    // get the data from the form (urlencoded data)
    const data = $form.serialize();

    if (data.length === 5) {
      alert("Tweet cannot be empty!");
      return;
    }
    if (data.length > 145) {
      alert("Tweet content is too long!");
      return;
    }
    // make a post request to the server
    $.post('/tweets', data, (response) => {
      console.log(response);
      loadTweets();
    });




  });




});

