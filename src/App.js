import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/index.scss'

import Home from './pages/Home'
import Resume from './pages/Resume'
import Experience from './pages/Experience'
import Photos from './pages/Photos'
import Papers from './pages/Papers'
import Error404 from './pages/Error404'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <StandardRoute exact path={Routes.Home.path} component={Home} />
                <StandardRoute exact path={Routes.Resume.path} component={Resume} />
                <StandardRoute exact path={Routes.Experience.path} component={Experience} />
                <StandardRoute exact path={Routes.Photos.path} component={Photos} />
                <StandardRoute exact path={Routes.Papers.path} component={Papers} />

                <Route path='*' component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

const StandardRoute = ({ component: Component, ...rest }) => {  
    return (
        <Route
            {...rest}
            render={props => (
                <>
                    <NavBar />
                    <div style={{ height: 100 }} />
                    <Component {...props} />
                    {/* <Footer /> */}
                </>
            )}
        />
    )
}

export default App