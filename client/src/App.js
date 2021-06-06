import React from 'react'
import './assets/styles/main.less'

import Logo from './assets/images/logo.png'

const App = () => {
    return (
        <div>
            <h1>React app</h1>
            <img src={Logo} alt="Logo" />
        </div>
    )
}

export default App