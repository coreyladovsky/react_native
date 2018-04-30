export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'selectLibrary':
      return action.payload;
    default:
      return null;
  }
};
