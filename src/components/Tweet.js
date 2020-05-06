import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate, formatTweet } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { handleLikeTweet } from "../actions/tweets";

const Tweet = (props) => {
  const { tweet } = props;
  const handleLike = (e) => {
    e.preventDefault();
    const { tweet, authedUser, dispatch } = props;

    dispatch(
      handleLikeTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser,
      })
    );
  };

  const toParent = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/tweet/${id}`);
  };
  return (
    <Link to={`/tweet/${tweet.id}`} className="tweet">
      <img className="avatar" src={tweet.avatar} alt="author image" />
      <div className="tweet-info">
        <div>
          <span>{tweet.name}</span>
          <div className="date">{formatDate(tweet.timestamp)}</div>
          {tweet.parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, tweet.parent.id)}
            >
              Replying to @ {tweet.parent.author}
            </button>
          )}
          <p>{tweet.text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{tweet.replies > 0 && tweet.replies}</span>
          <button onClick={handleLike} className="heart-button">
            {tweet.hasLiked ? (
              <TiHeartFullOutline color={"red"} className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{tweet.likes > 0 && tweet.likes}</span>
        </div>
      </div>
    </Link>
  );
};
function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  const author = users[tweet.author];
  const parentTweet = tweets[tweet.replyingTo];

  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, author, authedUser, parentTweet) : null,
  };
}
export default connect(mapStateToProps)(Tweet);
