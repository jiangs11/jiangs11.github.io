import React from 'react'
import { Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import { FaNodeJs as NodeJS, FaReact, FaMobileAlt as Mobile, FaPython as Python, FaDatabase as Data, FaSortAmountUpAlt as Algorithms, FaJava as Java } from 'react-icons/fa'
import { FcBiotech } from 'react-icons/fc'
import { GiArchiveResearch as Research, GiWaterfall as Waterfall } from 'react-icons/gi'
import { GrMysql as MySQL, GrCloudSoftware as Software } from 'react-icons/gr'
import { MdGraphicEq as Graphic } from 'react-icons/md'
import { SiMongodb as MongoDB, SiJavascript as Javascript } from 'react-icons/si'

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
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(48, 48, 48), rgb(104, 160, 99))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <NodeJS size={iconSize} style={styles.iconStyle} />
                            Node.js
                        </span>
                    </Button>
                )
            case 'MongoDB':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(77, 179, 61), rgb(63, 160, 55))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <MongoDB size={iconSize} style={styles.iconStyle} />
                            MongoDB
                        </span>
                    </Button>
                )
            case 'MySQL':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(0, 117, 143), rgb(242, 145, 17))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <MySQL size={iconSize} style={styles.iconStyle} />
                            MySQL
                        </span>
                    </Button>
                )
            case 'ExpressJS':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundColor: '#F0DB4F' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Javascript size={iconSize} style={styles.iconStyle} />
                            Express
                        </span>
                    </Button>
                )
            case 'ReactJS':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundColor: '#5dd1f0' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <FaReact size={iconSize} style={styles.iconStyle} />
                            React
                        </span>
                    </Button>
                )
            case 'React Native':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundColor: '#5dd1f0' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <FaReact size={iconSize} style={styles.iconStyle} />
                            React Native
                        </span>
                    </Button>
                )
            case 'Mobile App':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient( 180.4deg, rgb(188, 120, 236) -2.2%, rgb(29, 133, 163) 83.5% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Mobile size={iconSize} style={styles.iconStyle} />
                            Mobile App
                        </span>
                    </Button>
                )
            case 'Agile':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'radial-gradient( circle 759px at -6.7% 50%, rgb(80, 131, 73) 0%, rgb(140, 209, 131) 26.2%, rgb(178, 231, 170) 50.6%, rgb(144, 213, 135) 74.1%, rgb(75, 118, 69) 100.3% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Waterfall size={iconSize} style={styles.iconStyle} />
                            Agile
                        </span>
                    </Button>
                )
            case 'SAAS':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%, rgb(255, 209, 67) 0%, rgb(255, 145, 83) 90% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Software size={iconSize} color='white' style={styles.iconStyle} />
                            SAAS
                        </span>
                    </Button>
                )
            case 'Python':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(48, 105, 152), rgb(255, 212, 59))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Python size={iconSize} style={styles.iconStyle} />
                            Python
                        </span>
                    </Button>
                )
            case 'Bioinformatics':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'radial-gradient( circle 935px at 3.1% 5.8%, rgb(182, 255, 139) 0%, rgb(8, 88, 127) 100.2% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <FcBiotech size={iconSize} color={'white'} style={styles.iconStyle} />
                            Bioinformatics
                        </span>
                    </Button>
                )
            case 'Research':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'radial-gradient( circle 597px at 93% 9.8%, rgb(255, 61, 89) 1.7%, rgb(252, 251, 44) 97% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Research size={iconSize} style={styles.iconStyle} />
                            Research
                        </span>
                    </Button>
                )
            case 'Java':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient(to right, rgb(248, 152, 32), rgb(83, 130, 161))' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Java size={iconSize} style={styles.iconStyle} />
                            Java
                        </span>
                    </Button>
                )
            case 'Data Structures':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'linear-gradient( 109.7deg, rgb(202, 50, 50) 5.7%, rgb(252, 195, 12) 92.4% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Data size={iconSize} style={styles.iconStyle} />
                            Data Structures
                        </span>
                    </Button>
                )
            case 'Algorithms':
                return (
                    <Button variant='dark' disabled style={Object.assign({ backgroundImage: 'radial-gradient( circle 300px at 8% 89.3%, rgb(20, 157, 208) 0%, rgb(140, 63, 226) 90% )' }, styles.buttonStyle)}>
                        <span className='d-flex justify-content-center align-items-center'>
                            <Algorithms size={iconSize} style={styles.iconStyle} />
                            Algorithms
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