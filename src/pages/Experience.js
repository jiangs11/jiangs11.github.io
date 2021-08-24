import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Experience() {
    return (
        <div>
            { experience.map((item, index) => {
                return (
                    <Row key={index}>
                        <Col>
                        
                        </Col>

                        <Col>
                        
                        </Col>
                    </Row>
                )
            })}
        </div>
    )
}

const experience = [
    {
        title: 'Full Stack Developer',
        location: 'Rowan University, Glassboro, NJ',
        date: 'June 2021 - Present',
        description: [
            'Designing and implementing a full stack web app to provide information on electric vehicles and to help multi-unit dwelling complex owners plan costs on installing ev chargers.',
        ],
        keywords: [
            'MySQL',
            'Express',
            'React',
            'NodeJS'
        ],
        images: [
            
        ],
        links: [

        ]
    },
    {
        title: 'Mobile App Developer',
        location: 'Arke Aeronautics',
        date: 'October 2020 - June 2021',
        description: [
            'Built a cross-platform iOS/Android mobile app to assist first responders from the moment a call arrives to the site of the emergency.',
            'Some notable features of this app are push notifications to alert users when calls/alarms come in and a map interface that not only provides navigation to the site of emergency, but also various metadata such as floor plans for a building (if applicable) near the site.',
            'Daily scrum meetings ensure communication is present in a remote environment and all members of the entire team are in sync.'
        ],
        keywords: [
            'React Native',
            'Mobile App',
            'Agile',
            'SAAS'
        ],
        images: [
            
        ],
        links: [

        ]
    },
    {
        title: 'Full Stack Intern',
        location: 'FuturFits',
        date: 'June 2020 - September 2020',
        description: [
            'Built a Web Application and Chrome Extension that allows users to save their favorite products during e-commerce shopping.',
            'Specific duties I worked on was modeling the application database, building the RESTful API using Express, as well as the Chrome Extension UI.',
        ],
        keywords: [
            'MongoDB',
            'Express',
            'React',
            'NodeJS'
        ],
        images: [
            
        ],
        links: [
            
        ]
    },
    {
        title: 'Data Visualization Research Assistant',
        location: 'Bristol Myers Squibb - Rowan University',
        date: 'July 2019 - January 2020',
        description: [
            'Undergraduate research collaboration with Bristol-Myers Squibb.',
            'Researched efficient ways of visualizing, pre-processing, and downsampling very large metabolomics data, specifically liquid chromatography - mass spectrometry.',
            'Built UI with Python library, Mayavi, that results in a seamless user interaction with the data.'
        ],
        keywords: [
            'Python',
            'Mayavi',
            'Bioinformatics',
            'Research'
        ],
        images: [
            
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
            'Communication',
            'Problem Solving',
            'Engaging'
        ],
        images: [
            
        ]
    }
]

export default Experience