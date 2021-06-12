import React from 'react'
import PropTypes from 'prop-types'
import Typography from "antd/es/typography"
import Progress from './Progress.jsx'

const { Paragraph } = Typography;

const Skill = ({ Name, Percent }) => {
    return (
        <div className="skill">
            { Name && <Paragraph strong className="skill__title">{Name}</Paragraph> }
            <Progress Percent={Percent} />
        </div>
    )
}

Skill.propTypes = {
    Name: PropTypes.string,
    Percent: PropTypes.number
}

export default Skill
