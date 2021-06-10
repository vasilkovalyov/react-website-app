import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import List from 'antd/es/list/index.js'
import Icon from './Icon.jsx'
import { Link } from 'react-router-dom'

import linkModel from '../../models/Link.js'

const SocialList = ({ IconsList, Indents, BorderedY }) => {
    return (
        <div className={cn(
            'social-list',
            {
                'social-list--indents': Indents,
                'social-list--bordered-y': BorderedY
            }
        )}>
            <List
                dataSource={IconsList}
                renderItem={item => (
                    <List.Item>
                        <Link to={{
                            pathname: item.Url
                        }} target={item.Target}>
                            <Icon size={15} icon={item.Name} color="#000" />
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    )
}

SocialList.propTypes = {
    IconsList: PropTypes.arrayOf(PropTypes.shape(linkModel)),
    Indents: PropTypes.bool,
    BorderedY: PropTypes.bool
}

export default SocialList
