import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className='post_content'>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns"></div>
                <button>Delete!</button>
            </div>
        </div>
    );
};

export default PostItem;