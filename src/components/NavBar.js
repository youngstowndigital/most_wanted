import React from 'react'
import { Link } from 'react-router-dom'
import fbi_logo from '../fbi_logo.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={fbi_logo} className="logo mx-3" />
                    FBI Most Wanted
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
