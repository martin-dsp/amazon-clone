// Setup data layer!
// So it's like creating global variables 
// that can be passed around in a React app 
// instead of passing props from grandparent to parent to child!
// (props drilling~) >> PLEASE READ BELOW NOT TO BE CONFUSED!
// https://velog.io/@kimu2370/%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%97%86%EC%9D%B4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0hookscontext
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// This IS THE DATA LAYER
export const StateContext = createContext()


// Build a provider
// initialState = how the data layer looks in the beginning
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)