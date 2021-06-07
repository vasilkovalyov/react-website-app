import React from 'react'
import './assets/styles/main.less'

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
// pages
import { Home, About, Portfolio, Blog, Contact } from './views/main/main'
// layouts
import MainLayout from './components/layouts/MainLayout.jsx'
import AppRoute from './views/AppRoute.jsx'

const App = () => {
    return (
        <div id="wrapper">
            <Router>
                <div className="app">
                    <Switch>
                        <AppRoute exact path="/" component={Home} layout={MainLayout} />
                        <AppRoute path="/about" component={About} layout={MainLayout} />
                        <AppRoute path="/portfolio" component={Portfolio} layout={MainLayout} />
                        <AppRoute path="/blog" component={Blog} layout={MainLayout} />
                        <AppRoute path="/contact" component={Contact} layout={MainLayout} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App