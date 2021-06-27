function stateMap(state) {
  return {
    albums: state.data.albums,
    fetching: state.fetching,
    title: state.title,
  };
}

export default stateMap;
