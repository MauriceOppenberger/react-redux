import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import CreateTweet from "./CreateTweet";
const TweetPage = (props) => {
  const { id, tweet } = props;
  console.log(props);
  return (
    <div>
      <Tweet id={id} />
      <CreateTweet />
      <h3 className="center">Replies</h3>
      <ul>
        {tweet.replies.map((id) => {
          return (
            <li key={id}>
              <Tweet id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(
  { tweets },
  {
    match: {
      params: { id },
    },
  }
) {
  const tweet = tweets[id];
  return {
    tweet,
    id,
  };
}
export default connect(mapStateToProps)(TweetPage);
