import React from 'react'
import PropTypes from 'prop-types'
import Typography from "antd/es/typography"
import { Link } from 'react-router-dom'
import { default as LogoComponent } from '../common/Logo.jsx'
import SocialList from '../common/SocialList.jsx'

import linkModel from '../../models/Link.js'

const { Paragraph, Text } = Typography;

const Footer = ({ Social, Logo, Copyright }) => {
    return <footer className="footer">
        <div className="container">
            { Logo && <Paragraph className="ta-c">
                    <Link to="/" className="footer__logo-link d-inline-block">
                        <LogoComponent ClassName="header__logo" Image={Logo} />
                    </Link>
                </Paragraph>
            }
            { Social && <SocialList IconsList={Social} Indents={true} BorderedY={true} /> }
            {
                Copyright && <Paragraph className="ta-c">
                    <Text >{Copyright}</Text>
                </Paragraph>
            }
        </div>
    </footer>
}

Footer.propTypes = {
    Logo: PropTypes.shape({
        Name: PropTypes.string,
        Url: PropTypes.string,
    }),
    Social: PropTypes.arrayOf(PropTypes.exact(linkModel)),
    Copyright: PropTypes.string
}

export default Footer