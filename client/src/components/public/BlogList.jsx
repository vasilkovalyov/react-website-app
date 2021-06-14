import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from "antd"

import BlogCard from './BlogCard.jsx'

const BlogList = ({ Items }) => {
    return (
        <Row gutter={{ xs: 16, sm: 30 }}>
            {
                Items && Items.map((card, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <BlogCard {...card}  />
                    </Col>
                ))
            }
        </Row>
    )
}

BlogList.propTypes = {
    Items: PropTypes.arrayOf(PropTypes.shape(BlogCard.propTypes))
}

export default BlogList