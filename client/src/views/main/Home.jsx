import React, { Fragment } from 'react'

import HeroSectionModel from '../../static/common/hero-section.js'
import PersonsModel from '../../static/common/persons.js'
import { StoryAboutModel, StorySkillsModel } from '../../static/common/about-story.js'

import HeroSection from '../../components/public/HeroSection.jsx'
import PersonCardSection from '../../components/public/PersonCardSection.jsx'
import AboutSection from '../../components/public/AboutSection.jsx'


const Home = () => {
    return (
        <Fragment>
            <HeroSection Slides={HeroSectionModel} IsPagination={true} IsArrows={true} />
            <PersonCardSection {...PersonsModel} />
            <AboutSection AboutModel={StoryAboutModel} SkillsModel={StorySkillsModel} />
        </Fragment>
    )
}

export default Home