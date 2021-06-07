import React, { Fragment } from 'react'

import Header from '../public/Header.jsx'
import Footer from '../public/Footer.jsx'

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default MainLayout