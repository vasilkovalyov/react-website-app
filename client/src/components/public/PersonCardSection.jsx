import React from  'react'
import { Row, Col } from "antd"
import Layout from 'antd/es/layout/index.js'
import Typography from "antd/es/typography"

import PersonCard from './PersonCard.jsx'

const { Title, Text } = Typography;

const PersonCardSection = ({ Heading, SubHeading, Items }) => {
    return (
        <Layout className="section-persons">
            <div className="container">
                <div className="section-persons__content ta-c">
                    { Heading && <Title className="section-persons__heading text-uppercase" level={2}>{Heading}</Title> }
                    { SubHeading && <Text className="section-persons__subheading">{SubHeading}</Text> }
                </div>
                {
                    Items && <Row gutter={{ xs: 16, sm: 20, md: 24, lg: 32 }} >
                        {
                            Items.map(item => (
                                <Col xs={24} sm={12} md={8} key={item.Id}>
                                    <PersonCard {...item} />
                                </Col>
                            ))
                        }
                    </Row>
                }
            </div>
        </Layout>
    )
}

export default PersonCardSection
