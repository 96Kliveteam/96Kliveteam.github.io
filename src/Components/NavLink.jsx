import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ href, className, children, onClick }) => {
  return (
    <Link to={href}
      className={`block relative font-code text-2xl transition-colors 
    hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold 
    lg:leading-5 xl:px-12 lg:text-xl ${className || ''}`}
      onClick={onClick}>
      {children}
    </Link>
  )
}

export default NavLink