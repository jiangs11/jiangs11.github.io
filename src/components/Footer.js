import React from 'react'
// import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div style={{ backgroundColor: 'lightgray', overflow: 'hidden', paddingLeft: '5%', paddingRight: '5%' }}>
            <footer className='footer section py-4 d-flex align-items-center' style={{ fontFamily: 'Arial', fontSize: 16 }}>
                Footer in progress
                {/* <Row xl={2} lg={2} md={1} sm={1} xs={1} style={{ width: 800 }}>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <img alt='' src='https://www.rowan.edu/_files/_files/images/RowanLogo.png' title='https://www.rowan.edu/_files/_files/images/RowanLogo.png' />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center' style={{ flexDirection: 'column' }}>
                        <p className='mb-0'>
                            Copyright © Rowan University {new Date().getFullYear()}
                        </p>
                        <p className='mb-0'>
                            Website by <a href='https://github.com/jiangs11' target="_blank" rel="noreferrer" style={{ color: 'green' }}><b>Steven Jiang</b></a>
                        </p>
                    </Col>
                </Row> */}
            </footer>
        </div>
    )
}

export default Footer