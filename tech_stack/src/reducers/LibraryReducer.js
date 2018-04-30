import data from './LibraryList.json';

export default (state = data, action) => {
  Object.freeze(state);
  return state;
};
