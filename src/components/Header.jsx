import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ text }) => {
    return (
        <Link to="/" className="link">
            <header className="header">
                <div className="container">
                    <h2>{text}</h2>
                </div>
            </header>
        </Link>
    )
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header