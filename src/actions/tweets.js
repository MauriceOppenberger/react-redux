import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleLikeTweet({ id, hasLiked, authedUser }) {
  return {
    type: TOGGLE_LIKE,
    id,
    hasLiked,
    authedUser,
  };
}
export function handleLikeTweet(info) {
  return (dispatch) => {
    dispatch(toggleLikeTweet(info));
    return saveLikeToggle(info).catch((err) => {
      console.warn("There was an error:", err);
      dispatch(toggleLikeTweet(info));
      alert("Could not like tweet, please try again");
    });
  };
}

function receiveNewTweet(tweet) {
  return {
    type: RECEIVE_NEW_TWEET,
    tweet,
  };
}

export function handleNewTweet(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveTweet(info)
      .then((tweet) => {
        dispatch(receiveNewTweet(tweet));
      })
      .then(() => dispatch(hideLoading()));
  };
}
