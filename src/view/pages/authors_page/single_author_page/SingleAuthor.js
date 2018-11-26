import React from 'react';
import { Link } from 'react-router-dom';
import { AllAuthors } from '.././AllAuthors';
import { AuthorInfo } from './AuthorInfo';
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';

const SingleAuthor = () => {
    return (
        <div className="container">
            <Link to="./authors">All Authors</Link>
            <h4>Single Author</h4>
            <AuthorInfo />
            <AuthorAddress />
            <AuthorCompany />
        </div>
    )
}

export { SingleAuthor }