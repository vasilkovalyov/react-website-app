import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ ClassName, Image } ) => {
    return (
        <div className={`logo ${ClassName}`}>
            <img src={Image.Url} alt={Image.Name}  />
        </div>
    )
}

Logo.propTypes = {
    Name: PropTypes.string,
    Url: PropTypes.string
}

export default Logo