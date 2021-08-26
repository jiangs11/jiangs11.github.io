import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import IconButton from '../components/IconButton'

function Projects() {
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
            <h1 style={styles.headerStyle}>Technical Projects</h1>

            <ListGroup variant='flush'>
            { projects.map((item, index) => {
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

const projects = [
    {
        title: 'ProfHacks 2021',
        location: 'Hackathon @ Rowan University',
        date: 'March 6-7, 2021',
        description: [
            ''
        ],
        keywords: [
            'React',
            'Python',
            'Machine Learning'
        ],
        links: [
            {
                'nameLink': 'GitHub Link',
                'hrefLink': 'https://github.com/jiangs11/ProfHacks2021'
            },
            {
                'nameLink': 'Website Link',
                'hrefLink': 'https://jiangs11.github.io/ProfHacks2021/',
                'misc': ''
            }
        ]
    },
    {
        title: 'OddJobs',
        location: 'Senior Project @ Rowan University',
        date: 'September 2020 - December 2020',
        description: [
            ''
        ],
        keywords: [
            'MySQL',
            'Flask',
            'React',
            'Typescript'
        ],
        links: [
            {
                'nameLink': 'GitHub Link',
                'hrefLink': 'https://github.com/jiangs11/Senior-Project-F20',
                'misc': 'Private due to API keys'
            },
            {
                'nameLink': 'Video Demo',
                'hrefLink': 'https://www.youtube.com/watch?v=bv3de-OYx8I&ab_channel=anttesoriero'
            }
        ]
    },
    {
        title: 'Course Scheduler',
        location: 'Software Engineering @ Rowan University',
        date: 'January 2020 - May 2020',
        description: [
            ''
        ],
        keywords: [
            'C#',
            'MySQL',
            'MS Excel',
        ],
        links: [
            {
                'nameLink': 'GitHub Link',
                'hrefLink': 'https://github.com/jiangs11/Course-Scheduler-Project'
            }
        ]
    },
    {
        title: 'Image Captioning',
        location: 'Machine Learning @ Rowan University',
        date: 'September 2020 - December 2020',
        description: [
            'Undergraduate research collaboration with Bristol-Myers Squibb.',
            'Researched efficient ways of visualizing, pre-processing, and downsampling very large metabolomics data, specifically liquid chromatography - mass spectrometry.',
            'Built UI with Python library, Mayavi, that results in a seamless user interaction with such large quantity of data.'
        ],
        keywords: [
            'Python',
            'Machine Learning',
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
        title: 'COVID-19 Simulation',
        location: 'Adv. Databases @ Rowan University',
        date: 'September 2020 - December 2020',
        description: [
            'Simulating COVID-19 virus spread using Java and Neo4J.',
            'Conditions/factors used for the simulation such as speed of spread and death rate are solely based on inference from previous pandemics and current knowledge of Covid.',
            'Each node in the graph database represents a person of the following three states: healthy/uninfected, infected, and deceased.'
        ],
        keywords: [
            'Java',
            'Neo4J',
            'Simulation'
        ],
        images: [
            'https://raw.githubusercontent.com/jiangs11/Neo4J-Pandemic/main/NeoScreenshots/8d82863891a5270f303ab3d8052cdb7b.png',
            ''
        ],
        links: [
            {
                'nameLink': 'GitHub Link',
                'hrefLink': 'https://github.com/jiangs11/Neo4J-Pandemic'
            }
        ]
    }
]

export default Projects