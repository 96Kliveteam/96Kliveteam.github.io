import React from 'react'
import Navbar from './Navbar'

const Header = ({ bacgroundImageUrl }) => {
    return (
        <div style={{ '--image-url': `url(${bacgroundImageUrl})` }}
            className="before:bg-[image:var(--image-url)] 
            before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:content-['']
            before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-30
            h-screen before:brightness-75 before:contrast-125 relative">
                            
            <Navbar></Navbar>
            <h2 className="px-7.5 lg:px-10 w-full text-center uppercase absolute left-2/4 top-[45%] -translate-x-2/4 -translate-y-2/4 
            text-color-1 z-40 animate-glow leading-loose text-2xl tracking-wide
            md:text-4xl md:leading-loose
            lg:text-5xl lg:leading-loose
            xl:text-6xl xl:leading-loose">
                The Vietnam’s next generation <br/> live production services
            </h2>

        </div>
    )
}

export default Header