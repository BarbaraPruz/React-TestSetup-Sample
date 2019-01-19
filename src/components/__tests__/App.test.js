import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// NOTE:using "absolute" paths (relative to src) - see .env in root
// Also note that .env should work by itself but it isn't so NODE_PATH being set in package.json
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

beforeEach( () => {
    wrapped = shallow(<App />);
});

it ('shows a comment box', () => {
    // without Enzyme
    // const div = document.createElement('div');
    // ReactDOM.render ( <App />, div);
    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box'); // bad : testing inside knowledge of CommentBox component
    // ReactDOM.unmountComponentAtNode(div);

    // if using beforeEach() logic (see above the "shallow", requires enzyme + enzyme-adapter-react-<react version>.  See SetupTests.js and airbnb.io/enzyme
    expect(wrapped.find(CommentBox).length).toEqual(1)
});

it ('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
});