import React from 'react'
import Header from '../Components/Header'
import Section from '../Components/Section'
import bacgroundImageUrl from '../assets/CHHTOUR.jpg'
import Button from '../Components/Button'
import { home_Service, home_About } from '../constants/constants'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section id='service' className="bg-n-1">
                <h2 className='text-n-9 text-5xl text-center mb-5 lg:mb-10'>Service</h2>
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
                    <div className='flex flex-col justify-between items-start order-1'>
                        <div className='py-5'>
                            <h2 className='text-color-1 text-5xl text-center mb-5 lg:mb-10'>About</h2>
                            <div className='border-b-2 border-white m-auto'></div>
                            <div className='mt-10'>
                                {home_About.aboutItems.map((item) => {
                                    return (
                                        <div key={item.id} className='my-10'>
                                            <p className='text-white underline underline-offset-4'>{item.title}</p>
                                            <p className='text-white'>{item.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Button href={home_About.link} className='m-auto text-2xl' dark={true}>{home_About.btnText}</Button>
                    </div>
                    <div className='md:order-1'>
                        <img src={home_About.imgUrl} alt='about' className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                </div>
            </Section>
            <Footer></Footer>
        </>
    )
}
export default Home