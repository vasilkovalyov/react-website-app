import React from 'react'
import PropTypes from 'prop-types'
import Skill from './Skill.jsx'

const SkillList = ({ Items }) => {
    return (
        <div>
            { Items && Items.map((item) => <Skill {...item} key={item.Id} /> )}
        </div>
    )
}

SkillList.propTypes = {
    Items: PropTypes.arrayOf(PropTypes.shape({
        Id: PropTypes.number,
        Name: PropTypes.string,
        Percent: PropTypes.number
    }))
}

export default SkillList
