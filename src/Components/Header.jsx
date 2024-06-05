import React from 'react'
import Navbar from './Navbar'

const Header = ({bacgroundImageUrl}) => {
    return (
        <div style={{ '--image-url': `url(${bacgroundImageUrl})` }}
            className="before:bg-[image:var(--image-url)] 
            before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:content-['']
            before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-30
            h-screen before:brightness-75 before:contrast-125">
            <Navbar></Navbar>         
        </div>
    )
}

export default Header