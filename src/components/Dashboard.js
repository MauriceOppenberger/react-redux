import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul>
        {props.tweetIds.map((id) => {
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

function mapStateToProps({ tweets }) {
  const tweetIds = Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  );

  return {
    tweetIds,
  };
}
export default connect(mapStateToProps)(Dashboard);
