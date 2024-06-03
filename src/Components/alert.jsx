import React from 'react'

const Alert = ({children}) => {
    return (
        <div className="alert alert-primary" role="alert">
            {children}
        </div>
    )
}

export default Alert