import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from 'reducers';  // defaults to index.js (from reducers folder)

// initialState required for tests with setup that needs to specify redux state
export default ( {children, initialState={}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return (
        <Provider store={store} >
            {children}
        </Provider> 
    );
};