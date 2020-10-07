const initialState = {
  dateSearched: null,
  searchQuery: null,
  results: [],
};

export default (state = initialState, { type, searchQuery, results }) => {
  if (type === "ADD") {
    return {
      ...state,
      dateSearched: Date.now(),
      searchQuery,
      results,
    };
  } else return state;
};
