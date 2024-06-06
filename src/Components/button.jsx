import React from 'react'
import { Link } from 'react-router-dom';

function Button({ children, onClick, className, href, dark }) {

    const renderDarkButton = () => (
        <button onClick={onClick} className={`shadow-md shadow-color-2 border-2 border-color-2 p-3 rounded text-color-1 
        hover:text-n-9 hover:bg-color-1 hover:border-color-1 hover:brightness-125 hover:-translate-y-1
        active:translate-y-0 active:shadow-none
        transition-all ${className || ''}`}>
            {children}
        </button>
    )
    const renderDarkLink = () => (
        <Link to={href} className={`shadow-md shadow-color-2 inline-block border-2 border-color-2 p-3 rounded text-color-1 
        hover:text-n-9 hover:bg-color-1 hover:border-color-1 hover:brightness-125 hover:-translate-y-1
        active:translate-y-0 active:shadow-none
        transition-all hover:cursor-pointer ${className || ''}`}>
            {children}
        </Link>
    )

    const renderButton = () => (
        <button onClick={onClick} className={`shadow-md shadow-n-9 border-2 border-n-9 p-3 rounded text-n-9 
        hover:text-color-1 hover:bg-n-9 hover:border-n-9 hover:-translate-y-1
        active:translate-y-0 active:shadow-none
        transition-all ${className || ''}`}>
            {children}
        </button>
    )
    const renderLink = () => (
        <Link to={href} className={`shadow-md shadow-n-9 inline-block border-2 border-n-9 p-3 rounded text-n-9 
        hover:text-color-1 hover:bg-n-9 hover:border-n-9 hover:-translate-y-1
        active:translate-y-0 active:shadow-none
        transition-all hover:cursor-pointer ${className || ''}`}>
            {children}
        </Link>
    )
    if (dark) {
        return href ? renderDarkLink() : renderDarkButton();
    }
    return href ? renderLink() : renderButton();
}

export default Button