import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import imageModel from '../../models/Image.js'
import { BREAKPOINTS } from '../../shared/constants.js'

const Image = ({Image, ClassName, Ratio}) => {
    const imageExists = Image && (Image.DesktopUrl || Image.MobileUrl)
    return (
        <div className={cn(`image ${ClassName || ''}`, {
            'image--wide': Ratio ==='wide',
            'image--square': Ratio === 'square'
        })}>
            <figure>
                <picture>
                    {
                        imageExists && (
                            <Fragment>
                                <source
                                    srcSet={Image.TabletUrl}
                                    media={`(min-width: ${BREAKPOINTS.tablet})`} />
                                <source
                                    srcSet={Image.MobileUrl}
                                    media={`(min-width: ${BREAKPOINTS.smallMobile})`} />
                            </Fragment>
                        )
                    }
                    <img src={Image.DesktopUrl} alt={Image.Name} />
                </picture>
            </figure>
        </div>
    )
}

Image.propTypes = {
    Image: PropTypes.shape(imageModel),
    ClassName: PropTypes.string,
    Ratio: PropTypes.oneOf(["squared", "wide"]),
}

export default Image
