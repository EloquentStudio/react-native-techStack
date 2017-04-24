export default (state = null, action) => {
  switch (action.type) {
    case 'SelectLibrary':
      return action.payload.libraryId;
      break;
    default:
      return state;
  }
}
