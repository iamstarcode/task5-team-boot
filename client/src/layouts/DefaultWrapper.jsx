import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const DefaultWrapper = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

DefaultWrapper.propTypes = {
    children: PropTypes.any,
}

export default DefaultWrapper
