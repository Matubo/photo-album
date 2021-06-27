function stateMap(state) {
  return {
    albums: state.albums,
    fetching: state.fetching,
    title: state.title,
  };
}

export default stateMap;
