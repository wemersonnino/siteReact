import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
const Logo = () => {
    return(
        <Router>
            <Link to="/">
                <h1 className="logo">
                    <span>Editora MaujorTec</span>
                </h1>
            </Link>
        </Router>
    );
}
export default Logo;