import React from "react";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo"><h5>BIT BLOG</h5></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a >Home |</a></li>
                    <li><a >Authors |</a></li>
                    <li><a >About</a></li>
                </ul>
            </div>
        </nav>
    )

}
export { Header }