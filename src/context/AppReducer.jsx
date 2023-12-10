const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    // Handle other cases as needed
    default:
      return state;
  }
};

export default AppReducer;
