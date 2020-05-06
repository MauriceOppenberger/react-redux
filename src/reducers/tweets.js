import {
  RECEIVE_TWEETS,
  TOGGLE_LIKE,
  RECEIVE_NEW_TWEET,
} from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter(
                (uuid) => uuid !== action.authedUser
              )
            : state[action.id].likes.concat([action.authedUser]),
        },
      };
    case RECEIVE_NEW_TWEET:
      const { tweet } = action;

      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id]),
          },
        };
      }
      return {
        ...state,
        [tweet.id]: {
          ...tweet,
        },
      };
    default:
      return state;
  }
}