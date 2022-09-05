import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../logo.svg'

const Home = ({ apiKey }) => {
    console.log(apiKey)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                    {apiKey}
                </a>
            </header>
        </div>
    )
}
Home.propTypes = {
    apiKey: PropTypes.string
}
export default Home
