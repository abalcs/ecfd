import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import Title from './components/Title'
import Main from './components/Main';
import Footer from './components/Footer'

import About from './components/About'
import Members from './components/Members'
import Events from './components/Events'
import Images from './components/Images'

const App = () => {

    return (
        <Router>
            <Header/>
            <Title/>
                <Switch>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/members'>
                        <Members/>
                    </Route>
                    <Route path='/events'>
                        <Events/>
                    </Route>
                </Switch>
            <Images/>
            <Main/>
            <Footer/>
        </Router>
    )
}

export default App;