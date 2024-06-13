import React from 'react'
import { footer } from '../constants/constants'
import NavLink from './NavLink'

const Footer = () => {
  return (
    <>
      <div className='px-7.5 pt-12 pb-6 lg:px-10 lg:pt-14 lg:pb-7 xl:pt-20 xl:pb-12'>
      <div className='md:order-1 md:mb-0 w-10/12 max-w-sm mx-auto'>
          <img src={footer.shortLogoImgUrl} alt='about' className='h-full w-full object-cover object-center' />
        </div>
        <div className='md:order-1 mb-5 md:mb-0 w-10/12 max-w-lg mx-auto'>
          <img src={footer.logoImgUrl} alt='about' className='rounded-md h-full w-full object-cover object-center' />
        </div>
        <div className='flex justify-center flex-wrap'>
          {footer.socials.map((item, index) => {
            return (
              <NavLink href={item.link} key={index} target={true} className='md:text-3xl lg:text-4xl xl:text-4xl xl:leading-5'>
                {item.icon}
              </NavLink>
            )
          })}
        </div>
        <div className='flex justify-center flex-wrap mt-5 md:mt-0'>
          {footer.navItems.map((item, index) => {
            return (
              <NavLink href={item.link} key={index} className='text-lg lg:font-medium xl:px-5 py-4'>
                {item.title}
              </NavLink>
            )
          })}
        </div>
        <p className='text-center text-xs mt-10'>Copyright © 2024 96K Live - All rights reserved || Designed By: 96K Live</p>
      </div>
    </>

  )
}

export default Footer