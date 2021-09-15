import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
// import ThemeToggle from './ThemeToggle'
import { Routes } from './../routes'

function NavBar() {
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
    })

    return (
        <Navbar bg='light' variant='light' expand='lg' fixed='top' style={{ padding: '20px 0 20px' }}>
            <Navbar.Brand href={Routes.Home.path} style={{ marginLeft: isMobile ? 15 : 50, marginRight: !isMobile && 50, fontWeight: 'bold', fontSize: 22 }}>
                Steven Jiang
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbar-hamburger' />

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav as='ul'>
                    <Nav.Link href='/' as='li'>
                        <a href={process.env.PUBLIC_URL + '/Jiang_Resume.pdf'} target='_blank' rel='noreferrer'>Resume</a>
                    </Nav.Link>

                    <Nav.Link href={Routes.Experience.path} as='li'>
                        <a href='/experience'>Experience</a>
                    </Nav.Link>

                    <Nav.Link href={Routes.Projects.path} as='li'>
                        <a href='/projects'>Projects</a>
                    </Nav.Link>

                    <Nav.Link href={Routes.Photos.path} as='li'>
                        <a href='/photos'>Photos</a>
                    </Nav.Link>

                </Nav>
                {/* <ThemeToggle /> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar