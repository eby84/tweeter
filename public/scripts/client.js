
$(() => {

  

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(data) {
    const $tweets = $(`
    <article class="tweets">
  <header>
    
    <div class="img-name">
    <img src=${escape(data.user.avatars)}>
    <div id="name">${escape(data.user.name)}</div>
  </div>
 
  <div id="lastName">${escape(data.user.handle)}</div>

  </header>
  <p class="tweet-text" name="tweet-text">${escape(data.content.text)}</p>
  <footer>
    <div>${escape(timeago.format(data.created_at))}</div>
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
    $('.errorText').slideUp(100).text('');
    // get the data from the form (urlencoded data)
    const data = $form.serialize();

    if (data.length === 5) {
      $('.errorText').text('⚠ Tweet cannot be empty! Put in some words! ⚠').slideDown();
      $('.errorText').css('border-style', 'solid');
      return;
    }
    if (data.length > 145) {
      $('.errorText').text('⚠ Tweet content is too long! ⚠').slideDown();
      $('.errorText').css('border-style', 'solid');
      return;
    }
    $form[0].reset();
    // make a post request to the server
    $.post('/tweets', data, (response) => {
      console.log(response);
      loadTweets();
    });

  });

});

