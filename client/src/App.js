import React from 'react'
import './assets/styles/main.less'

import Logo from './assets/images/logo.png'
import Icon from './components/Icon.jsx'

const App = () => {
    return (
        <div>
            <h1>React app</h1>
            <img src={Logo} alt="Logo" />
            <Icon size={26} icon="heart" color="#000" />
        </div>
    )
}

export default App