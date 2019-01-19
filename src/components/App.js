import React from 'react';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

export default() => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
};