import React from 'react'
import PropTypes from 'prop-types'

const Progress = ({ Percent }) => {
    return (
        <div className="progress">
            <div className="progress__line" style={{width: `${Percent}%`}}>
                <div className="progress__line-point"></div>
                <div className="progress__count ta-c">{Percent}%</div>
            </div>
        </div>
    )
}

Progress.defaultProps = {
    Percent: 0
}

Progress.propTypes = {
    Percent: PropTypes.number
}

export default Progress
