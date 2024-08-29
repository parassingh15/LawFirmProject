import React from 'react';
import '../style/navbar.css';
import { Outlet, Link } from "react-router-dom";

function navbar() {
    return (
        <div className='navbarMainDiv'>
            <div className="navMenu">

            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="navBtn">
                <h5>Home</h5>
                <h4>____</h4>
                </div>
            </Link>

            <Link to="/practiceArea" style={{ textDecoration: 'none' }}>
                <div className="navBtn">
                <h5>Practice Areas</h5>
                <h4>__________</h4>
                </div>
            </Link>

            <Link to="/attorneyPage" style={{ textDecoration: 'none' }}>
                <div className="navBtn">
                <h5>Attorney</h5>
                <h4>______</h4>
                </div>
            </Link>

            {/* <Link to="/attorneyPage" style={{ textDecoration: 'none' }}> */}

                <div className="navBtn">
                <h5>Case Study</h5>
                <h4>________</h4>
                </div>
            {/* </Link> */}

            {/* <Link to="/attorneyPage" style={{ textDecoration: 'none' }}> */}
                <div className="navBtn">
                <h5>Blog</h5>
                <h4>___</h4>
                </div>
            {/* </Link> */}

            </div>
            
        </div>
    );
}

export default navbar;