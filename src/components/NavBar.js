import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Routes } from './../routes'

function NavBar() {
    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Navbar.Brand 
                href={Routes.Home.path}
                className='d-flex justify-content-center align-items-center'
                style={{ fontSize: 22, marginLeft: 10, backgroundColor: 'red', 
                    fontFamily: '-apple-system, .SFNSText-Regular, San Francisco, Roboto, Segoe UI, Helvetica Neue, Lucida Grande, Arial,sans-serif'
                }}
            >
                Steven Jiang
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-hamburger" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link
                        className="navLinks"
                        href={Routes.Home.path}
                        // style={{ paddingLeft: !isLarge && 20, backgroundColor: pathname === '/' && '#262626' }}
                    >
                        Home
                    </Nav.Link>

                    <Nav.Link 
                        className="navLinks"
                        href={Routes.Home.path}
                        // style={{ paddingLeft: !isLarge && 20, backgroundColor: pathname === Routes.PlanningHome.path && '#262626' }}
                    >
                        Planning
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar