import React, { Fragment } from 'react'

import Header from '../public/Header.jsx'
import Footer from '../public/Footer.jsx'

import { Layout } from 'antd'

const { Content } = Layout;

import HeaderModel from '../../static/layouts/header.js'
import FooterModel from '../../static/layouts/footer.js'

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header {...HeaderModel} />
            <Content className="main">
                {props.children}
            </Content>
            <Footer {...FooterModel} />
        </Fragment>
    )
}

export default MainLayout