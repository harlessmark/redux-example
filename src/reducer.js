const initialState = {
  results: [],
};

export default (state = initialState, { type, results }) => {
  if (type === "ADD_RESULTS") {
    return {
      ...state,
      results,
    };
  } else return state;
};
