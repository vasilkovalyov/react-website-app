import React from 'react'
import PropTypes from 'prop-types'
import Carousel from "antd/es/carousel"
import ImageBanner from './ImageBanner.jsx'

import Layout from 'antd/es/layout/index.js'

const HeroSection = ({ Slides, IsPagination, IsArrows }) => {
    return (
        <Layout className="section-hero">
            <Carousel
                dots={IsPagination}
                className="hero-slider"
                arrows={IsArrows}
                infinite={true}
                slidesToShow={1}
            >
                { Slides && Slides.map((item) => (
                    <ImageBanner {...item} key={item.id} />
                ))}
            </Carousel>
        </Layout>
    )
}

HeroSection.propTypes = {
    IsPagination: PropTypes.bool,
    IsArrows: PropTypes.bool
}

export default HeroSection
