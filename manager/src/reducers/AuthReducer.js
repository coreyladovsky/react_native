import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../actions/types";

const INITIAL_STATE = { email: "" , password: ""};

export default (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.text };
    case PASSWORD_CHANGED:
    return { ...state, password: action.text};
    default:
      return state;
  }
};
