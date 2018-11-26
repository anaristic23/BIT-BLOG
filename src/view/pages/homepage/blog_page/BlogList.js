import React, { Component } from 'react';
import { BlogItem } from './BlogItem';
import { fetchPosts } from '../../../../services/PostsService';

class BlogList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    fetchPosts = () => {
        fetchPosts()
            .then(posts => this.setState({ posts }))
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        const { posts } = this.state;

        const postItems = posts.map((post, id) => {
            return <BlogItem key={id} postsList={post} />
        })

        return (
            <div className="container">
                <h4>POSTS</h4>

                {postItems}
            </div>
        )
    }
}

export { BlogList }