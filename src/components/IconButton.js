import React from 'react'
import { Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import { FaNodeJs as NodeJS, FaReact, FaMobileAlt as Mobile, FaPython as Python, FaDatabase as Data, FaSortAmountUpAlt as Algorithms, FaJava as Java, FaRegFileExcel as Excel } from 'react-icons/fa'
import { FcBiotech } from 'react-icons/fc'
import { GiArchiveResearch as Research, GiWaterfall as Waterfall, GiArtificialIntelligence as MachineLearning } from 'react-icons/gi'
import { GrMysql as MySQL, GrCloudSoftware as Software } from 'react-icons/gr'
import { RiVirusLine as Virus } from 'react-icons/ri'
import { SiMongodb as MongoDB, SiJavascript as Javascript, SiFlask as Flask, SiTypescript as TypeScript, SiNeo4J as Neo4J, SiDotNet as CSharp } from 'react-icons/si'

function IconButton({ iconName }) {
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
    })

    const iconSize = 30
    const styles = {
        buttonStyle: {
            opacity: 1,
            marginRight: 10,
            marginBottom: isMobile && 10,
            fontWeight: 'bold'
        },
        iconStyle: {
            paddingRight: 10,
        }
    }

    const switchIcon = () => {
        switch(iconName) {
            case 'NodeJS':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(48, 48, 48), rgb(104, 160, 99))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <NodeJS size={iconSize} style={styles.iconStyle} />
                            Node.js
                        </span>
                    </Button>
                )
            case 'MongoDB':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(77, 179, 61), rgb(63, 160, 55))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <MongoDB size={iconSize} style={styles.iconStyle} />
                            MongoDB
                        </span>
                    </Button>
                )
            case 'MySQL':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(0, 117, 143), rgb(242, 145, 17))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <MySQL size={iconSize} style={styles.iconStyle} />
                            MySQL
                        </span>
                    </Button>
                )
            case 'ExpressJS':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#F0DB4F' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Javascript size={iconSize} style={styles.iconStyle} />
                            Express
                        </span>
                    </Button>
                )
            case 'ReactJS':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#5dd1f0' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <FaReact size={iconSize} style={styles.iconStyle} />
                            React
                        </span>
                    </Button>
                )
            case 'React Native':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#5dd1f0' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <FaReact size={iconSize} style={styles.iconStyle} />
                            React Native
                        </span>
                    </Button>
                )
            case 'Mobile App':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#9e9e9e' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Mobile size={iconSize} style={styles.iconStyle} />
                            Mobile App
                        </span>
                    </Button>
                )
            case 'Agile':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#00d176' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Waterfall size={iconSize} style={styles.iconStyle} />
                            Agile
                        </span>
                    </Button>
                )
            case 'SAAS':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#ffc014' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Software size={iconSize} color='white' style={styles.iconStyle} />
                            SAAS
                        </span>
                    </Button>
                )
            case 'Python':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(48, 105, 152), rgb(255, 212, 59))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Python size={iconSize} style={styles.iconStyle} />
                            Python
                        </span>
                    </Button>
                )
            case 'Bioinformatics':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#12d4ff' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <FcBiotech size={iconSize} color={'white'} style={styles.iconStyle} />
                            Bioinformatics
                        </span>
                    </Button>
                )
            case 'Research':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#9e9e9e' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Research size={iconSize} style={styles.iconStyle} />
                            Research
                        </span>
                    </Button>
                )
            case 'Java':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(248, 152, 32), rgb(83, 130, 161))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Java size={iconSize} style={styles.iconStyle} />
                            Java
                        </span>
                    </Button>
                )
            case 'Data Structures':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#00d176' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Data size={iconSize} style={styles.iconStyle} />
                            Data Structures
                        </span>
                    </Button>
                )
            case 'Algorithms':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#8646f0' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Algorithms size={iconSize} style={styles.iconStyle} />
                            Algorithms
                        </span>
                    </Button>
                )
            case 'Machine Learning':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#4cd974' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <MachineLearning size={iconSize} style={styles.iconStyle} />
                            Machine Learning
                        </span>
                    </Button>
                )
            case 'Flask':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#383838' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Flask size={iconSize} style={styles.iconStyle} />
                            Flask
                        </span>
                    </Button>
                )
            case 'TypeScript':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#007acc' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <TypeScript size={iconSize} style={styles.iconStyle} />
                            TypeScript
                        </span>
                    </Button>
                )
            case 'C#':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#9b4993' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <CSharp size={iconSize} style={styles.iconStyle} />
                            C#
                        </span>
                    </Button>
                )
            case 'MS Excel':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#1D6F42' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Excel size={iconSize} style={styles.iconStyle} />
                            MS Excel
                        </span>
                    </Button>
                )
            case 'Neo4J':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#018bff' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Neo4J size={iconSize} style={styles.iconStyle} />
                            Neo4J
                        </span>
                    </Button>
                )
            case 'Simulation':
                return (
                    <Button id='iconButtons' disabled style={Object.assign({ backgroundColor: '#de1b21' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Virus size={iconSize} style={styles.iconStyle} />
                            Simulation
                        </span>
                    </Button>
                )
            default:
                return
        }
    }

    return (
        <div>
            { switchIcon() }
        </div>
    )
}

export default IconButton