import React from 'react';

import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'root';
import App from 'components/App';

beforeEach( () => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [
            { name: "Fetched 1"},
            { name: "Fetched 2"},
            { name: "Fetched 3"}                        
        ]
    });
});

afterEach( () => {
    moxios.uninstall();
});

// done used to make sure jest waits for setTimeout code to complete
it('can fetch a list of comments and display them', (done) =>{
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');
    // axios -> moxios -> axios is async and is going to take time.  
    // can do something like setTimeout for 100 msec but better is moxios wait
    moxios.wait ( () => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(3);
        done();
        wrapped.unmount();
    });
    
});