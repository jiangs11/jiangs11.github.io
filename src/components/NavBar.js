import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Routes } from './../routes'

function NavBar() {
    return (        
        <Navbar bg='light' variant='light' expand='lg' fixed='top' style={{ padding: '20px 0 20px' }}>
            <Navbar.Brand href={Routes.Home.path} style={{ marginLeft: 50, marginRight: 50, fontWeight: 'bold', fontSize: 22 }}>
                Steven Jiang
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbar-hamburger' />

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav as='ul'>
                    <Nav.Link href={Routes.Resume.path} as='li'>
                        <a href='/resume'>Resume</a>
                    </Nav.Link>

                    <Nav.Link href={Routes.Experience.path} as='li'>
                        <a href='/experience'>Experience</a>
                    </Nav.Link>

                    <Nav.Link href={Routes.Papers.path} as='li'>
                        <a href='/papers'>Papers</a>
                    </Nav.Link>

                    <Nav.Link href={Routes.Photos.path} as='li'>
                        <a href='/photos'>Photos</a>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar