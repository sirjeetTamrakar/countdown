import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <Navbar expanded={expanded} sticky='top' className='header px-2' expand="lg">
                <Link to='/' className='linkh'><h1>COUNTDOWN</h1></Link>
                <Navbar.Toggle style={{color:'#6648fc'}} onClick={() => setExpanded(expanded ? false : "expanded")} >{!expanded ? <i className="far fa-calendar-alt"></i> : <i className="fas fa-times"></i>}</Navbar.Toggle>
                <Navbar.Collapse onClick={() => setExpanded(expanded ? false : "expanded")} className="justify-content-end">
                <Nav>
                    <Link  className='linki' to='/'>Home</Link>
                    <Link  className='linki' to='/form'>Form</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
    )
}

export default NavBar
