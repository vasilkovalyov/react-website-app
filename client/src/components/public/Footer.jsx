import React from 'react'
import PropTypes from 'prop-types'
import Typography from "antd/es/typography"
import { Link } from 'react-router-dom'
import Logo from '../common/Logo.jsx'
import SocialList from '../common/SocialList.jsx'

import linkModel from '../../models/Link.js'

const { Paragraph, Text } = Typography;

const Footer = ({Social, LogoFooter, Copyright}) => {
    return <footer className="footer">
        <div className="container">
            <Paragraph className="ta-c">
                <Link to="/" className="footer__logo-link d-inline-block">
                    <Logo ClassName="header__logo" Image={LogoFooter} />
                </Link>
            </Paragraph>
            <SocialList IconsList={Social} Indents={true} BorderedY={true} />
            <Paragraph className="ta-c">
                <Text >{Copyright}</Text>
            </Paragraph>
        </div>
    </footer>
}

Footer.propTypes = {
    Social: PropTypes.arrayOf(PropTypes.exact(linkModel)),
    LogoFooter: PropTypes.shape({
        Name: PropTypes.string,
        Url: PropTypes.string,
    }),
    Copyright: PropTypes.string
}

export default Footer