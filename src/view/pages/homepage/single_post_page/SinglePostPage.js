import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../../../services/PostsService';
// import { SingleAuthor } from '../../authors_page/SingleAuthor';
import { RelatedPost } from './RelatedPosts';

class SinglePostPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }
    }
    fetchPost = () => {
        fetchPost(this.props.match.params.id)
            .then(postData => this.setState({ post: postData }))
    }
    componentDidMount() {
        this.fetchPost()
    }


    render() {
        const { title, body } = this.state.post;

        return (
            <div>

                <div className="container" >
                    <h4>{title}</h4>
                    <h5><Link to="/single_author" >Author Name</Link></h5>
                    <p>{body}</p>
                    <hr />
                    <h5>more posts from same author</h5>
                    <RelatedPost />
                </div>
            </div>
        )
    }
}

export { SinglePostPage }