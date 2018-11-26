import React from 'react';
import { Link } from 'react-router-dom';

const AllAuthorLinks = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className="section">
                <h5><Link to="/single_author" >Title 1</Link></h5>
            </div>
        </div>
    )
}

export { AllAuthorLinks }