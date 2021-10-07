/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Sample data from initial-tweets.json
const data = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
];

// $(document).ready(function() {
// });   <-jQuery shortform of document.ready:

// returns a tweet article element containing the full HTML of the tweet
$(() => {
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      datatype: "json",
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (error) => {
        console.log(`there is an error: ${error}`);
      }
    });
  };

  const renderTweets = (tweets) => {
    // const tweetContainer = $("#tweets-container");
    // tweetContainer.empty();
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container. "prepend" makes the latest posts come first
      $('#tweets-container').prepend($tweet);
    }
  };
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  //Creating the tweet element
  const createTweetElement = (tweet) => {
    const $tweet = `<article class="article-tweets">
    <header class="article-tweet-header">
      <div class="user-profile">
        <img class="user-icon" src=${tweet.user.avatars}/>
      <h5>${tweet.user.name}</h5>
    </div>
    <div class="username">
      <h5>${tweet.user.handle}</h5>
    </div>
  </header>
      <p class="tweet-text">${escape(tweet.content.text)}</p>
    <footer>
      <p class="date">${timeago.format(tweet.created_at)}</p>
      <section class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
      </section>
    </footer> 
  </article>`;
    return $tweet;
  };
  renderTweets(data);

  $('#tweet-form').submit(function(event) {
    //stops form from refreshing
    event.preventDefault();
    //grabs the tweet text submitted on the page
    const serializedData = $(this).serialize();
    const tweetLength = $('#tweet-text').val().length;
    //console.log(tweetLength)
    if (tweetLength === 0 || tweetLength === null) {
      alert("Um, you have to write something in your tweet...");
    }
    if (tweetLength > 140) {
      return alert("Oh my, you have a lot to say! Looks like you exceeded the tweet character limit (140 max)! Keep it short!");
    }
    $.post("/tweets", serializedData, (response) => {
      loadTweets();
      console.log('response:', response);
    });
  });
});
