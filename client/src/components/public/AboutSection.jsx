import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from "antd"
import Typography from "antd/es/typography"
import Layout from 'antd/es/layout/index.js'

import { default as ImageComponent } from '../common/Image.jsx'
import SkillList from './SkillList.jsx'

import imageModel from '../../models/Image.js'

const { Title, Paragraph, Text } = Typography;

const AboutSection = ({ AboutModel, SkillsModel }) => {
    return (
        <Layout className="section-about">
            <div className="container">
                <Row gutter={{ xs: 16, sm: 20, lg: 50 }}>
                    <Col xs={24} sm={12} md={11}>
                        <ImageComponent Image={AboutModel.Image} />
                    </Col>
                    <Col xs={24} md={12}>
                        { AboutModel.Title && <Title level={5} className="section-about__title text-uppercase">{AboutModel.Title}</Title> }
                        {
                            AboutModel.Text && AboutModel.Text.map((item, index) => (
                                <Paragraph key={index} className="section-about__paragraph">
                                    <Text>{item.Paragraph}</Text>
                                </Paragraph>
                            ))
                        }
                        { SkillsModel.Title && <Title level={5} className="section-about__title text-uppercase">{SkillsModel.Title}</Title> }
                        { SkillsModel.Items && <SkillList Items={SkillsModel.Items} /> }
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

AboutSection.propTypes = {
    AboutModel: PropTypes.shape({
        Image: PropTypes.shape(imageModel),
        Title: PropTypes.string,
        Text: PropTypes.arrayOf(PropTypes.shape({
            Paragraph: PropTypes.string
        }))
    }),
    SkillsModel: PropTypes.shape({
        Title: PropTypes.string,
        Items: PropTypes.arrayOf(PropTypes.shape(SkillList.propTypes))
    })
}

export default AboutSection
