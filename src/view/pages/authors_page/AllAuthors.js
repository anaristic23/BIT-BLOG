import React, { Component } from 'react';
import { AuthorLink } from './AuthorLink';
import { fetchAuthors } from '../../../services/UserService';

class AllAuthors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    fetchAuthors = () => {
        fetchAuthors()
            .then(users => this.setState({ users }))
    }

    componentDidMount() {
        this.fetchAuthors()
    }

    render() {
        const { users } = this.state;
        const userData = users.map((user, id) => {
            return <AuthorLink key={id} user={user} />
        })
        return (

            <div className="container" >
                <h4>AUTHORS</h4>
                {userData}

            </div>
        )

    }

}

export { AllAuthors }