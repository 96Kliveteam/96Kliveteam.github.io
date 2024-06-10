import React from 'react'
import Header from '../Components/Header'
import bacgroundImageUrl from '../assets/CHHTOUR.jpg'
import Section from '../Components/Section'
import { contact } from '../constants/constants'
import Button from '../Components/Button'

const Contact = () => {
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section id='info' className='bg-white'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10'>
                    <div className='mb-10'>
                        <h2 className='text-n-9 text-4xl md:text-5xl mb-5'>Find us</h2>
                        <p className='text-n-9'>{contact.address}</p>
                    </div>
                    <div className='mb-10'>
                    <h2 className='text-n-9 text-4xl md:text-5xl mb-5'>Mail us</h2>
                            <p className='text-n-9 mb-5'>{contact.email}</p>
                            <Button href='/'>Make a web inquery</Button>
                    </div>
                    <div>
                        <div className='mb-10 md:mb-10'>
                            <h2 className='text-n-9 text-4xl md:text-5xl mb-5'>Call us</h2>
                            <p className='text-n-9'>{contact.mobileNo}</p>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-n-9 text-left text-4xl md:text-5xl mb-5'>Follow us</h2>
                            <div className='flex'>
                                {contact.socials.map((item) => {
                                    return (
                                        <Button href={item.link} key={item.id} className='mr-10 text-xl'>
                                            {item.icon}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>

    )
}

export default Contact