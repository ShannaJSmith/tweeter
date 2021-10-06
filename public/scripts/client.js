/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $(document).ready(function() {
// });
//jQuery shortform of document.ready:

$(() => {
  const renderTweets = (tweets) => {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  }
  const createTweetElement = (tweet) => {
    const $tweet = $(`<article class="tweet">Hello world</article>`);
    return $tweet;
  }
  renderTweets(data);
  // const $tweet = createTweetElement(tweetData);
  // $('#tweets-container').append($tweet);
  // const timePassed = timeago.format(tweetData.created_at);
  // console.log('TWEET HERE:', $tweet);
})

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

 // to add it to the page so we can make sure it's got all the right elements, classes, etc.