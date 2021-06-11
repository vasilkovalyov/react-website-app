import React from 'react'
import Card from 'antd/es/card/index.js'
import Typography from "antd/es/typography"
import { default as ImageComponent } from '../common/Image.jsx'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const PersonCard = ({ Image, Heading, SubHeading, Description }) => {
    return (
        <Card
            className="person-card"
            cover={ Image && <ImageComponent Image={Image} /> }
        >
            <Meta 
                title={ Heading && <Title className="person-card__heading text-uppercase" level={3}>{Heading}</Title> } 
                description={ SubHeading && <Paragraph strong className="person-card__subheading">{SubHeading}</Paragraph> } 
            />
            { Description && (
                <Text className="person-card__description">{Description}</Text>
            )}
        </Card>
    )
}

export default PersonCard
