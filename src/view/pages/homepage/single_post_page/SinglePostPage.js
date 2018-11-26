import React from 'react';
import { Link } from 'react-router-dom';
// import { SingleAuthor } from '../../authors_page/SingleAuthor';
import { RelatedPost } from './RelatedPosts';

const SinglePostPage = () => {
    return (
        <div className="container">
            <h4>SINGLE POST TITLE</h4>
            <h5><Link to="/single_author" >Author Name</Link></h5>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
            <hr />
            <h5>more posts from same author</h5>
            <RelatedPost />
        </div>
    )
}

export { SinglePostPage }