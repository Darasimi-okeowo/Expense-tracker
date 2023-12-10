import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer"; // Import AppReducer from the separate file

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Add prop validation for children
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
