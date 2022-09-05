import './App.css'

import Home from 'pages/home'
import React from 'react'

class App extends React.Component {
    componentDidCatch(error, errorInfo) {
        console.error(error)
        console.log(errorInfo)
    }

    render() {
        return <Home apiKey={process.env.REACT_APP_SPORTSMONK_API_KEY} />
    }
}

export default App
