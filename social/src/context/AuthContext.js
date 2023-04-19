import { createContext, useReducer } from "react";
import React from "react";
import AuthReducer from "./AuthReducer";
import { CircularProgress } from "@mui/material";

const INITIAL_STATE = {
    user: null,
    isFecthing: false,
    error: false,

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFecthing,
                error: state.error,
                dispatch,
            }}
        >
            { children }
        </AuthContext.Provider>
    );
};