import React from 'react'
import Header from '../Components/Header'
import bacgroundImageUrl from '../assets/CHHTOUR.jpg'
import Section from '../Components/Section'
import { service_BuyNew, service_Hire, service_HireService, service_HireStock } from '../constants/constants'
import Card from '../Components/Card'
import Button from '../Components/Button'
import Collapse from '../Components/Collapse'

const Service = () => {
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section className='bg-white' id='hire'>
                <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Hire</h2>
                {service_Hire.map((item) => {
                    return (
                        <p key={item.id} className='text-center mt-10 text-n-9 max-w-3xl m-auto'>
                            {item.text}
                        </p>
                    )
                })}
            </Section>
            <Section id='hireserivce'>
                <h3 className='text-2xl md:text-3xl text-center mb-5 lg:mb-10'>Hire Serivce</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {service_HireService.catories.map((item) => {
                        return (
                            <Card key={item.id} className='pt-5 flex flex-col justify-between'>
                                <div>
                                    <h4 className='text-center text-xl'>{item.title}</h4>
                                    <p className='text-center my-3 px-2'>{item.text}</p>
                                </div>
                                <div>
                                    <img src={item.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className='text-center mt-15'>
                    <Button href={service_HireService.btnLink} dark={true}>{service_HireService.btnText}</Button>
                </div>
            </Section>
            <Section id='hirestock' className='bg-white'>
                <h3 className='text-2xl md:text-3xl text-center mb-5 lg:mb-10 text-n-9'>Hire Stock</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {service_HireStock.catories.map((item) => {
                        return (
                            <Card key={item.id} className='pt-5 flex flex-col justify-between' dark={true}>
                                <h4 className='text-center text-xl text-color-1 mb-5'>{item.title}</h4>
                                <div>
                                    <img src={item.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className='text-center mt-15'>
                    <Button href={service_HireService.btnLink}>{service_HireService.btnText}</Button>
                </div>
            </Section>
            <Section>
                <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Buy new</h2>
                <p className='text-center mt-10 text-white max-w-3xl m-auto'>
                    {service_BuyNew.text}
                </p>
                <div className='md:grid md:grid-flow-col md:gap-x-10 md:mt-10'>
                    <Collapse className='mt-5 md:mt-0' data={service_BuyNew.accordions}></Collapse>
                    <Collapse className='order-2' data={service_BuyNew.accordions2}></Collapse>
                    <div className='text-center mt-15 md:mt-0 md:order-1 relative'>
                        <Button href={service_BuyNew.btnLink} dark={true}>{service_HireService.btnText}</Button>
                    </div>
                </div>
            </Section>
            <Section className='bg-white'>
                    
            </Section>
        </>
    )
}

export default Service