import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from './routes'
import './scss/index.scss'

import Home from './pages/Home'
import Error404 from './pages/Error404'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <StandardRoute exact path={Routes.Home.path} component={Home} />
                {/* <StandardRoute exact path={Routes.EV.path} component={EV} /> */}
                {/* <StandardRoute exact path={Routes.EVChargers.path} component={EVChargers} /> */}

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
                    <Component {...props} />
                    <Footer />
                </>
            )}
        />
    )
}

export default App