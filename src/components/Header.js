import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header class="row justify-space-between nav-bar">
            <h1 class="page-title">
                <Link to='/reactPortfolio'>
                    Lorenzo Street S
                </Link> 
            </h1>
            <nav>
                <Link to="/About">
                    aboutMe
                </Link>
                <Link to="/Portfolio">
                    portfolio
                </Link>
                <Link to="/Contact">
                    reachMe
                </Link>
            </nav>
        </header>
    );
}

export default Nav;