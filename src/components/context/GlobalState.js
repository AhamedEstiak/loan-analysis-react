import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    loanInfo: {},
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const setLoanInfo = (info) => {
        const newInfo = {...state.loanInfo, ...info};

        dispatch({
            type: 'SET_LOAN_INFO',
            payload: newInfo
        });
    };

    const updateLoanInfo = (info) => {
        dispatch({
            type: 'SET_LOAN_INFO',
            payload: info
        });
    };

    return (<GlobalContext.Provider value={{
        loanInfo: state.loanInfo,
        setLoanInfo,
    }}>
        {children}
    </GlobalContext.Provider>);
}
