import React, { Fragment } from 'react'

import HeroSectionModel from '../../static/common/hero-section.js'
import HeroSection from '../../components/public/HeroSection.jsx'

const Home = () => {
    return (
        <Fragment>
            <HeroSection Slides={HeroSectionModel} IsPagination={true} IsArrows={true} />
        </Fragment>
    )
}

export default Home