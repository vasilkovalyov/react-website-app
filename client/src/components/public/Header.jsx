import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import Logo from '../common/Logo.jsx'
import PropTypes from 'prop-types'
import { Row } from 'antd';

const HeaderPublic = ({HeaderLogo, HeaderNavigation}) => {
    const [navActive, setNavActive] = useState(false)
    return <header className={`header ${navActive ? 'header--active' : ''}`}>
        <div className="container">
        <Row justify="space-between" align="middle">
            {
                HeaderLogo && <Link to="/" className="header__logo-link d-inline-block">
                    <Logo ClassName="header__logo" Image={HeaderLogo} />
                </Link>
            }
            <nav className="header__navigation">
                <Menu className="d-flex d-flex--ended d-flex--center header__menu" theme="light">
                    {
                        HeaderNavigation && HeaderNavigation.map((item) => {
                            return (
                                <Menu.Item key={item.Key}>
                                    <Link to={item.Path} className="text-uppercase bold">{item.Name}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </nav>
            <button className="hamburger" onClick={() => setNavActive(!navActive)}>
                <span className="hamburger__box">
                    <span className="hamburger__inner"></span>
                </span>
            </button>
        </Row>
        </div>
    </header>
}

HeaderPublic.propTypes = {
    NavLogo: PropTypes.shape({
        Name: PropTypes.string,
        Url: PropTypes.string,
    }),
    NavList: PropTypes.arrayOf(PropTypes.shape({
        Name: PropTypes.string,
        Path: PropTypes.string
    })),
}

export default HeaderPublic