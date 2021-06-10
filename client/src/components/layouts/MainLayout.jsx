import React, { Fragment } from 'react'

import Header from '../public/Header.jsx'
import Footer from '../public/Footer.jsx'

import { Layout } from 'antd'

const { Content } = Layout;

const HeaderModel = {
    HeaderLogo: {
        Name: 'header logo',
        Url: 'https://i.postimg.cc/V6HYX1BZ/logo.png',
    },
    HeaderNavigation: [
        {
            Key: 1,
            Path: '/',
            Name: 'Home'
        },
        {
            Key: 2,
            Path: '/about',
            Name: 'About'
        },
        {
            Key: 3,
            Path: '/portfolio',
            Name: 'Portfolio'
        },
        {
            Key: 4,
            Path: '/blog',
            Name: 'Blog'
        },
        {
            Key: 5,
            Path: '/contact',
            Name: 'Contact'
        }
    ]
}

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header {...HeaderModel} />
            <Content className="main">
                {props.children}
            </Content>
            <Footer />
        </Fragment>
    )
}

export default MainLayout