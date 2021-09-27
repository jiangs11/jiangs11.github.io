import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import IconButton from '../components/IconButton'

function Experience() {
    const isLarge = useMediaQuery({
        query: '(min-width: 992px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
    })

    const styles = {
        headerStyle: {
            textAlign: 'center',
            fontFamily: 'Montserrat, sans-serif',
            textDecorationLine: 'underline',
            fontSize: 42,
        },
        listItemStyle: {
            paddingTop: isMobile ? 40 : 30,
            paddingRight: 30,
            paddingBottom: isMobile ? 40 : 30,
            paddingLeft: 30,
        },
        titleStyle: {
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 'bold',
            fontSize: 34,
        },
        locationStyle: {
            fontSize: 20,
            fontFamily: 'Roboto, sans-serif',
        },
        descriptionStyle: {
            fontFamily: 'Montserrat, sans-serif',
            all: 'revert',
            lineHeight: 1.8,
            fontSize: 20,
            clear: 'both',
        },
        dateStyle: {
            fontSize: 22,
            fontFamily: 'Sora, sans-serif',
            marginBottom: isLarge && 30,
            color: 'gray',
        },
        mobileLinkStyle: {
            marginBottom: 20,
            clear: 'left',
            float: 'left',
            marginLeft: 0,
        },
        regularLinkStyle: {
            marginBottom: 20,
            clear: 'right',
            float: 'right',
        }
    }

    return (
        <div>
            <h1 style={styles.headerStyle}>Work Experience</h1>

            <ListGroup variant='flush'>
            { experience.map((item, index) => {
                const { title, location, date, description, keywords, links } = item

                return (
                    <ListGroup.Item style={styles.listItemStyle}>
                        <Row key={index} style={{ padding: !isMobile && 25 }}>
                            <Col xl={8} lg={8} md={12} sm={12} xs={12}>
                                <h2 style={styles.titleStyle}>{ title }</h2>

                                <p style={styles.locationStyle}>{ location }</p>
                                <p className='d-block d-sm-block d-md-block d-lg-none d-xl-none' style={styles.dateStyle}>{ date }</p>

                                { links?.map((link, i) => (
                                    <a key={i} className='d-block d-sm-block d-md-block d-lg-none d-xl-none' href={link.hrefLink} target='_blank' rel='noreferrer' style={styles.mobileLinkStyle}>{ link.nameLink }</a>
                                ))}
                                
                                <ul style={styles.descriptionStyle}>
                                    { description.map((point, i) => (
                                        <li key={i} style={{ all: 'revert' }}>
                                            { point }
                                        </li>
                                    ))}
                                </ul>

                                <div className='d-none d-sm-block' style={{ clear: 'both' }}>
                                    <div className='d-flex' style={{ flexDirection: 'row' }}>
                                        { keywords.map((keyword, i) => (
                                            <IconButton key={i} iconName={keyword} />
                                        ))}
                                    </div>
                                </div>
                            </Col>

                            <Col xl={4} lg={4} className='d-none d-lg-block d-flex justify-content-center align-items-center' style={{ flexDirection: 'column', textAlign: 'right' }}>
                                <p style={styles.dateStyle}>{ date }</p>

                                { links?.map((link, i) => (
                                    <a key={i} href={link.hrefLink} target='_blank' rel='noreferrer' style={styles.regularLinkStyle}>{ link.nameLink }</a>
                                ))}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            })}
            </ListGroup>
        </div>
    )
}

const experience = [
    {
        title: 'Full Stack Developer',
        location: 'Rowan University, Glassboro, NJ',
        date: 'June 2021 - Present',
        description: [
            'Designing and implementing a web-based online tool to provide information on electric vehicles and to help multi-unit dwelling complex owners plan costs on installing ev chargers.',
        ],
        keywords: [
            'MySQL',
            'ExpressJS',
            'ReactJS',
            'NodeJS'
        ],
        links: [
            {
                'nameLink': 'Website Link',
                'hrefLink': 'https://rowan-mud.herokuapp.com/'
            }
        ]
    },
    {
        title: 'Mobile App Developer',
        location: 'Arke Aeronautics',
        date: 'October 2020 - June 2021',
        description: [
            'Built a cross-platform iOS/Android mobile app to assist first responders from the moment a call arrives to the site of the emergency.',
            'Some notable features of this app are push notifications to alert users when calls/alarms come in and a map interface that not only provides navigation to the site of emergency, but also various metadata such as floor plans for a building (if applicable) near the site.',
            'Daily scrum meetings ensure communication is present in a remote and agile environment so that all members of the entire team are in sync and productive.'
        ],
        keywords: [
            'React Native',
            'Mobile App',
            'Agile',
            'SAAS'
        ],
        links: [
            {
                'nameLink': 'Website Link',
                'hrefLink': 'https://www.arkelive.com/'
            },
            {
                'nameLink': 'FAA Challenge Video',
                'hrefLink': 'https://livestream.com/viewnow/faachallenge'
            },
            {
                'nameLink': 'App Store Link',
                'hrefLink': 'https://apps.apple.com/us/app/arkemobile/id1571373102'
            }
        ]
    },
    {
        title: 'Full Stack Developer Intern',
        location: 'FuturFits',
        date: 'June 2020 - September 2020',
        description: [
            'Helped early-stage startup by taking their product idea and bringing it to life.',
            'Built a web application and Chrome extension that allows users to save their favorite products during e-commerce shopping.',
            'Specific duties I worked on was modeling the application database, building the RESTful API using Express, as well as the Chrome Extension UI.'
        ],
        keywords: [
            'MongoDB',
            'ExpressJS',
            'ReactJS',
            'NodeJS'
        ],
        links: [
            {
                'nameLink': 'Website Link',
                'hrefLink': 'http://www.futurfits.com/'
            },
            {
                'nameLink': 'Chrome Extension Link',
                'hrefLink': 'https://chrome.google.com/webstore/detail/futurfits/lbijjbmhbdcmgohdcppmpgamaopncbig?hl=en-US'
            }
        ]
    },
    {
        title: 'Data Visualization Research Assistant',
        location: 'Bristol Myers Squibb - Rowan University',
        date: 'July 2019 - January 2020',
        description: [
            'Undergraduate research collaboration with Bristol-Myers Squibb.',
            'Researched efficient ways of visualizing, pre-processing, and downsampling very large metabolomics data, specifically liquid chromatography - mass spectrometry.',
            'Built UI with Python library, Mayavi, that results in a seamless user interaction with such large quantity of data.'
        ],
        keywords: [
            'Python',
            'Bioinformatics',
            'Research'
        ],
        links: [
            {
                'nameLink': 'GitHub Link',
                'hrefLink': 'https://github.com/jiangs11/LCMS-Data-Visualization'
            }
        ]
    },
    {
        title: 'Computer Science Learning Assistant / Tutor',
        location: 'Rowan University, Glassboro, NJ',
        date: 'September 2019 - May 2021',
        description: [
            'Served as a peer, student-centered learning assistant with direct focus on facilitating student learning in the classroom lab environment.',
            'Provided students with additional resources and engaged students in critical thinking to solve problems.',
            'Helped answer student questions in various computer science courses on topics such as object-oriented programming and data structures.'
        ],
        keywords: [
            'Data Structures',
            'Algorithms',
            'Java'
        ],
        links: [
            {
                'nameLink': 'Department Link',
                'hrefLink': 'https://csm.rowan.edu/departments/cs/index.html'
            }
        ]
    }
]

export default Experience