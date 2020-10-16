import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="nav">
            <div className='item'>
                <a href="#s">Profile</a>
            </div>
            <div className='item'>
                <a href="#s">Messages</a>
            </div>
            <div className='item'>
                <a href="#s">News</a>
            </div>
            <div className='item'>
                <a href="#s">Settings</a>
            </div>
        </div>
    );
}

export default Navbar;
