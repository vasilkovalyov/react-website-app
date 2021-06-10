import React, { Fragment } from 'react'

import Header from '../public/Header.jsx'
import Footer from '../public/Footer.jsx'

import { Layout } from 'antd'

const { Content } = Layout;

const headerNavigation = [
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

const logo = {
    Name: 'header logo',
	Url: 'https://i.postimg.cc/V6HYX1BZ/logo.png',
}


const FooterModel = {
    LogoFooter: {
        Name: 'header logo',
        Url: 'https://i.postimg.cc/V6HYX1BZ/logo.png',
    },
    Social: [
        {
            Name: 'facebook',
            Url: 'https://www.facebook.com/'
        },
        {
            Name: 'google-plus',
            Url: 'https://www.google.com/'
        },
        {
            Name: 'twitter',
            Url: 'https://twitter.com/?lang=uk'
        },
        {
            Name: 'linkedin',
            Url: 'https://www.linkedin.com/'
        },
        {
            Name: 'instagram',
            Url: 'https://www.instagram.com/'
        }
    ],
    Copyright: '© 2021 Mulitix Theme by ThemeForces. All Rights Reserved.'
}

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header NavLogo={logo} NavList={headerNavigation} />
            <Content className="main">
                {props.children}
            </Content>
            <Footer {...FooterModel} />
        </Fragment>
    )
}

export default MainLayout