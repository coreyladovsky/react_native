import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types";
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    text
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    text
  };
};
