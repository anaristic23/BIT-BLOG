import React from 'react';
import { Link } from 'react-router-dom';


const AuthorLink = (props) => {
    const { user } = props;
    const { name, id } = user;

    return (
        <div>
            <div className="divider"></div>
            <div className="section">
                <h5><Link to={"/single_author/" + id} >{name}</Link></h5>
            </div>
        </div>
    )
}

export { AuthorLink }