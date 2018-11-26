import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo"><h5>BIT BLOG</h5></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home |</Link></li>
                    <li><Link to="/authors" >Authors |</Link></li>
                    <li><Link to="/about" >About</Link></li>
                </ul>
            </div>
        </nav>
    )

}
export { Header }