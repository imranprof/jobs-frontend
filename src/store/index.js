import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from './reducers'

// initial states here
const initialState = {};

// creating store
export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger)),
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
