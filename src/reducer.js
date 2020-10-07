const initialState = {
  dateSearched: null,
  searchQuery: null,
  results: [],
};

export default (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      dateSearched: Date.now(),
      searchQuery: action.searchQuery,
      results: action.results,
    };
  } else return state;
};
