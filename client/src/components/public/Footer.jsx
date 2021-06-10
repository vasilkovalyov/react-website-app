import React from 'react'
import Typography from "antd/es/typography"
import { Link } from 'react-router-dom'
import Logo from '../common/Logo.jsx'
import SocialList from '../common/SocialList.jsx'

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

export default Footer