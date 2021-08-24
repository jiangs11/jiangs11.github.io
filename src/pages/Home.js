import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Me from './../assets/me.jpg'
import Tennessee from './../assets/tennessee.jpeg'

function Home() {
    const iconSize = 30
    const styles = {
        iconStyle: {
            marginRight: 10
        },
    }

    return (
        <div style={{ marginLeft: 50, marginRight: 50 }}>
            <Row xl={2} lg={2} md={2} sm={1} xs={1} style={{  }}>
                <Col className='d-flex' xl={4} lg={4} md={4} style={{ flexDirection: 'column', backgroundColor: 'green' }}>
                    <Image src={'https://via.placeholder.com/150'} roundedCircle style={{ width: '60%' }} />
                    <h1 className='myname'>Steven Jiang</h1>
                    <p>Masters student at Rowan University</p>
                    <p>
                        <MdLocationOn size={iconSize} style={styles.iconStyle} />
                        Glassboro, New Jersey
                    </p>
                    <p>
                        <MdEmail size={iconSize} style={styles.iconStyle} />
                        jiangsteven99@gmail
                    </p>
                    <p>
                        <FaGithub size={iconSize} style={styles.iconStyle} />
                        <a href='https://github.com/jiangs11' target='_blank' rel='noreferrer' style={{ all: 'revert', color: 'black' }}>GitHub</a>
                    </p>
                    <p>
                        <FaLinkedin size={iconSize} style={styles.iconStyle} />
                        <a href='https://www.linkedin.com/in/jiangsteven99/' target='_blank' rel='noreferrer' style={{ all: 'revert', color: 'black' }}>LinkedIn</a>
                    </p>
                </Col>
                <Col xl={8} lg={8} md={8} style={{ backgroundColor: 'orange' }}>
                    About Me
                </Col>
            </Row>
        </div>
    )
}

export default Home