import React, { Fragment } from 'react'

import Header from '../public/Header.jsx'
import Footer from '../public/Footer.jsx'

import { Layout } from 'antd';

const { Content } = Layout;

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header />
            <Content className="main">
                {props.children}
            </Content>
            <Footer />
        </Fragment>
    )
}

export default MainLayout