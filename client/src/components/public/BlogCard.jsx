import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import Card from 'antd/es/card/index.js'
import Typography from "antd/es/typography"
import { Link } from 'react-router-dom'

import { default as ImageComponent } from '../common/Image.jsx'
import Icon from '../common/Icon.jsx'

import imageModel from '../../models/Image.js'

import formatDate from '../../shared/formatDate.js'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const getFormatDate = (date) => moment(date).format(formatDate.baseFormat);

const BlogCard = ({ Image, Category, Heading, Autor, Description, DateCreated, TypePost }) => {
    return (
        <Card
            className={
                cn(
                    "blog-card",
                    `${Image === undefined ? 'blog-card--without-image' : ''}`,
                    {
                        'blog-card--video': TypePost === 'video',
                        'blog-card--image-hover': TypePost === 'imageHover'
                    }
                )
            }
            cover={ Image && <ImageComponent Image={Image} /> }
        >
            {
                Category && <Text className="blog-card__category text-uppercase">
                    { Category }
                </Text>
            }
            <Meta 
                title={ Heading && <Title strong className="blog-card__heading" level={4}>
                    <Link to={'/'}>
                        {Heading}
                    </Link>
                </Title> } 
                description={ Autor && <Paragraph strong className="blog-card__author">
                    <Icon size={15} icon="user" color="#ccc" /> by {Autor}
                </Paragraph> } 
            />
            { Description && (
                <Paragraph className="blog-card__description">
                    <Text>{Description}</Text>
                </Paragraph>
            )}
            { DateCreated && (
                <Paragraph>
                    <Text className="blog-card__date-created">
                        <Icon size={15} icon="calendar" color="#ccc" />
                        {'on ' + getFormatDate(DateCreated)}
                    </Text>
                </Paragraph>
            )}
        </Card>
    )
}

BlogCard.defaultProps = {
    TypePost: 'base'
}


BlogCard.propTypes = {
    Image: PropTypes.shape(imageModel),
    Category: PropTypes.string,
    Heading: PropTypes.string,
    Autor: PropTypes.string,
    Description: PropTypes.string,
    Date: PropTypes.string,
    TypePost: PropTypes.oneOf(['base', 'video', 'imageHover']),
}

export default BlogCard