import React from 'react'
import cn from 'classnames'
import List from 'antd/es/list/index.js'
import Icon from './Icon.jsx'
import { Link } from 'react-router-dom'

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
                        }} target="_blank">
                            <Icon size={15} icon={item.Name} color="#000" />
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default SocialList
