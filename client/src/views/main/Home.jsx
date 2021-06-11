import React, { Fragment } from 'react'

import HeroSectionModel from '../../static/common/hero-section.js'
import PersonsModel from '../../static/common/persons.js'

import HeroSection from '../../components/public/HeroSection.jsx'
import PersonCardSection from '../../components/public/PersonCardSection.jsx'

const Home = () => {
    return (
        <Fragment>
            <HeroSection Slides={HeroSectionModel} IsPagination={true} IsArrows={true} />
            <PersonCardSection {...PersonsModel} />
        </Fragment>
    )
}

export default Home