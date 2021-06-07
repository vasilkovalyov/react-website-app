import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <header className="header">
        <div className="container">
                <ul className="d-flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
        </div>
    </header>
}

export default Header