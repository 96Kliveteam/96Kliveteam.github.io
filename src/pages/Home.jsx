import React from 'react'
import Header from '../Components/Header'
import Section from '../Components/Section'
import bacgroundImageUrl from '../assets/CHHTOUR.jpg'
import Button from '../Components/Button'
import { home_Service, home_About, home_Sliders } from '../constants/constants'
import Carousel from '../Components/Carousel'

const Home = () => {
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section id='service' className="bg-n-1">
                <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Service</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
                    {home_Service.map((item) => {
                        return (
                            <div className='text-center my-10' key={item.id}>
                                <Button href={item.link} className='mb-5'>{item.btnText}</Button>
                                <div className='h-96 w-full'>
                                    <img src={item.imgUrl} alt={item.alt} className='rounded-md h-full w-full object-cover object-center' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Section >
            <Section id='about'>
                <div className='grid grid-col-1 md:grid-cols-2 gap-x-10'>
                    <div className='flex flex-col justify-between items-start order-1 py-5'>
                        <div className='mb-10'>
                            <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>About</h2>
                            <div className='border-b-2 border-white mx-auto my-10'></div>
                            <div className='mt-10'>
                                {home_About.aboutItems.map((item) => {
                                    return (
                                        <div key={item.id} className='my-10'>
                                            <p className='text-sm text-white underline underline-offset-4'>{item.title}</p>
                                            <p className='text-sm text-white mt-3'>{item.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Button href={home_About.link} className='m-auto text-2xl' dark={true}>{home_About.btnText}</Button>
                    </div>
                    <div className='md:order-1 mb-10 md:mb-0'>
                        <img src={home_About.imgUrl} alt='about' className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                </div>
            </Section>
            <Section className='bg-white'>
                <Carousel>
                    {home_Sliders.map((item) => {
                        return (
                            <div  key={item.id} className='min-w-full px-8 md:px-0 flex h-full'>
                                <p className='flex items-center justify-center text-center leading-10 text-balance md:text-base md:leading-loose lg:text-xl lg:leading-loose max-w-4xl m-auto text-n-9'>{item.text}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </Section>
        </>
    )
}
export default Home