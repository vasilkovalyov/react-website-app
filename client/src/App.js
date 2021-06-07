import React from 'react'
import './assets/styles/main.less'

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
// pages
import { Home, About, Portfolio, Blog, Contact } from './views/public/index'
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
                        <AppRoute exact path="/about" component={About} layout={MainLayout} />
                        <AppRoute exact path="/portfolio" component={Portfolio} layout={MainLayout} />
                        <AppRoute exact path="/blog" component={Blog} layout={MainLayout} />
                        <AppRoute exact path="/contact" component={Contact} layout={MainLayout} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App