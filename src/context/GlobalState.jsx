import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer"; // Import AppReducer from the separate file

// Initial State
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // // Load transactions from local storage on component mount
  // useEffect(() => {
  //   const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
  //   if (storedTransactions) {
  //     dispatch({ type: "LOAD_TRANSACTIONS", payload: storedTransactions });
  //   }
  // }, []);

  // // Save transactions to local storage whenever they change
  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(state.transactions));
  // }, [state.transactions]);

  //deleteTransactions Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  //addTransactions Action
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Add prop validation for children
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
