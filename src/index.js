import React from 'react';
import ReactDOM from 'react-dom';

import Root from "root";

import App from 'components/App';

// Root component is helper for testing (lets redux setup be easily re-used in test files)
ReactDOM.render(
    <Root >
        <App />
    </Root>, 
    document.querySelector('#root')
);