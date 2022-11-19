import React from 'react'
import PropTypes from 'prop-types'
const Button = props => {
    const { variant = 'primary', children, ...rest } = props
    return (
        <button className={`button ${variant} `} {...rest}>
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.any,
    variant: PropTypes.string,
}
