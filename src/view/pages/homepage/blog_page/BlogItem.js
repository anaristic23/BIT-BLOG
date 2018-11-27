import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../../entities/Post'


const BlogItem = (props) => {
    const { singlePost } = props;
    const { title, body, id } = singlePost;

    return (
        <div>
            <div className="divider"></div>
            <div className="section">
                <h5><Link to={"/single/" + id} >{title}</Link></h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

export { BlogItem }