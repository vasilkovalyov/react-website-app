import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Typography from "antd/es/typography"

import { default as ImageComponent } from '../common/Image.jsx'

const { Title, Paragraph, Text } = Typography;

const ImageBanner = ({Heading, SubHeading, Image, Size, AlignedContent}) => {
    return (
        <div className={cn('image-banner d-flex d-flex--aligned-center', {
            'image-banner--large': Size ==='large',
        })}>
            <ImageComponent Image={Image} Ratio="wide" />
            <div className="container">
                <div className={cn('image-banner__content', {
                    'ta-l': AlignedContent === 'left',
                    'ta-c': AlignedContent === 'center',
                    'ta-r': AlignedContent === 'right'
                })}>
                    <Paragraph>
                        <Title className="text-uppercase image-banner__heading d-inline-block">{Heading}</Title>
                    </Paragraph>
                    <Text className="text-uppercase image-banner__subheading">{SubHeading}</Text>
                </div>
            </div>
        </div>
    )
}

ImageBanner.propTypes = {
    Size: PropTypes.oneOf(["large"]),
    AlignedContent: PropTypes.oneOf(["left", "center", "right"]),
}

export default ImageBanner
