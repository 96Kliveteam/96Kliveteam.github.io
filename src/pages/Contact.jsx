import React, { useEffect } from 'react'
import Header from '../Components/Header'
import bacgroundImageUrl from '../assets/CHHTOUR.jpg'
import Section from '../Components/Section'
import { contact } from '../constants/constants'
import Button from '../Components/Button'
import Form from '../Components/Form'

const Contact = () => {
    const GoToForm = () => {
        window.location = '#form';
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
        let subPath = window.location.hash;
        if (subPath) {
            window.location = subPath;
        }
    }, [])
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section id='info' className='bg-white'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10'>
                    <div className='mb-10 md:col-span-2'>
                        <h2 className='text-n-9 text-4xl md:text-5xl mb-5'>Find us</h2>
                        <p className='text-n-9'>{contact.address}</p>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-n-9 text-4xl md:text-5xl mb-5'>Mail us</h2>
                        <p className='text-n-9 mb-5'>{contact.email}</p>
                        <Button onClick={GoToForm}>Make a web inquery</Button>
                    </div>
                    <div>
                        <div className='mb-10 md:mb-10'>
                            <h2 className='text-n-9 text-4xl md:text-5xl mb-5'>Call us</h2>
                            <p className='text-n-9'>{contact.mobileNo}</p>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-n-9 text-left text-4xl md:text-5xl mb-5'>Follow us</h2>
                            <div className='flex'>
                                {contact.socials.map((item, index) => {
                                    return (
                                        <Button href={item.link} key={index} className='mr-10 text-xl' target={true}>
                                            {item.icon}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='bg-white' id='form'>
                <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-15'>Web enquiry</h2>
                <Form className='md:max-w-6xl'></Form>
            </Section>
        </>

    )
}

export default Contact