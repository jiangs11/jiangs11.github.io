import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-image-lightbox/style.css'
import './scss/index.scss'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Photos from './pages/Photos'
import Error404 from './pages/Error404'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <StandardRoute exact path={Routes.Home.path} component={Home} />
                <StandardRoute exact path={Routes.Experience.path} component={Experience} />
                <StandardRoute exact path={Routes.Projects.path} component={Projects} />
                <StandardRoute exact path={Routes.Photos.path} component={Photos} />

                <Route component={Error404} />
            </Switch>
        </Router>
    )
}

const StandardRoute = ({ component: Component, ...rest }) => {  
    return (
        <Route
            {...rest}
            render={props => (
                <>
                    <NavBar />
                    <div style={{ height: 130 }} />
                    <Component {...props} />
                    <div style={{ height: 30 }} />
                    <Footer />
                </>
            )}
        />
    )
}

export default App