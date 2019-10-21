import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
const Nav = props => {
    return(
        <Navbar bg="dark" varient="dark">
            <Link to="/" className="navbar-brand">Home</Link>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to='/blogs'>Blogs</Link>
                </li>
            </ul>

        </Navbar>
    )
}

export default Nav