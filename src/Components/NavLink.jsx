import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ href, className, children, onClick, target }) => {
  return (
    <Link to={href} target={target ? "_blank" :""}
      className={`block relative font-code text-2xl transition-colors 
    hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold 
     xl:px-12 lg:text-xl lg:leading-5 ${className || ''}`}
      onClick={onClick}>
      {children}
    </Link>
  )
}

export default NavLink