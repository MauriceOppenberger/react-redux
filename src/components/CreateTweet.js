import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { handleNewTweet } from "../actions/tweets";

const CreateTweet = (props) => {
  const [value, updateValue] = useState("");
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authedUser } = props;

    dispatch(
      handleNewTweet({ text: value, author: authedUser, replyingTo: null })
    );
    props.history.push("/");
  };
  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          maxLength="280"
          placeholder="What's happening?"
          onChange={(e) => updateValue(e.target.value)}
          value={value}
        />
        <button className="btn" type="submit" disabled={!value.length > 0}>
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(CreateTweet);
