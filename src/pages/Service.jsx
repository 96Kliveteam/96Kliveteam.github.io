import React, { useEffect } from 'react'
import Header from '../Components/Header'
import bacgroundImageUrl from '../assets/TODss3.jpeg'
import Section from '../Components/Section'
import { service_BuyAndSellUsed, service_BuyNew, service_Hire, service_HireService, service_HireStock, service_Logo } from '../constants/constants'
import Card from '../Components/Card'
import Button from '../Components/Button'
import Collapse from '../Components/Collapse'

const Service = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        })
        let subPath = window.location.hash;
        if (subPath) {
            window.location = subPath;
        }
    }, [])
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section className='bg-white' id='hire'>
                <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Hire</h2>
                {service_Hire.map((item, index) => {
                    return (
                        <p key={index} className='text-center mt-10 text-n-9 max-w-3xl m-auto'>
                            {item}
                        </p>
                    )
                })}
            </Section>
            <Section id='hireserivce'>
                <h3 className='text-2xl md:text-3xl text-center mb-5 lg:mb-10'>Hire Serivce</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {service_HireService.catories.map((item, index) => {
                        return (
                            <Card key={index} className='pt-5 flex flex-col justify-between'>
                                <div>
                                    <h4 className='text-center text-xl'>{item.title}</h4>
                                    <p className='text-center my-3 px-2'>{item.text}</p>
                                </div>
                                <div className='lg:max-h-96 p-5'>
                                    <img src={item.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className='text-center mt-15'>
                    <Button className='text-2xl' href={service_HireService.btnLink} dark={true}>{service_HireService.btnText}</Button>
                </div>
            </Section>
            <Section id='hirestock' className='bg-white'>
                <h3 className='text-2xl md:text-3xl text-center mb-5 lg:mb-10 text-n-9'>Hire Stock</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {service_HireStock.catories.map((item, index) => {
                        return (
                            <Card key={index} className='pt-5 flex flex-col justify-between' dark={true}>
                                <h4 className='text-center text-xl text-color-1 mb-5'>{item.title}</h4>
                                <div className='h-[360px] p-5'>
                                    <img src={item.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className='text-center mt-15'>
                    <Button className='text-2xl' href={service_HireService.btnLink}>{service_HireService.btnText}</Button>
                </div>
            </Section>
            <Section id='buy'>
                <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Buy new</h2>
                <p className='text-center mt-10 text-white max-w-3xl m-auto'>
                    {service_BuyNew.text}
                </p>
                <div className='md:grid md:grid-flow-col md:grid-cols-5 md:gap-x-10 md:mt-15'>
                    <Collapse className='mt-10 md:mt-0 md:col-span-2' data={service_BuyNew.accordions}></Collapse>
                    <Collapse className='order-2 md:col-span-2' data={service_BuyNew.accordions2}></Collapse>
                    <div className='text-center mt-10 md:mt-0 md:order-1'>
                        <Button className='text-2xl' href={service_BuyNew.btnLink} dark={true}>{service_HireService.btnText}</Button>
                    </div>
                </div>
                <div className='grid gap-y-5 mt-15 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10 xl:gap-10'>
                    {service_Logo.map((imgUrl, index) => {
                        return (
                            <div key={index} className='bg-white rounded-lg h-60 w-80 lg:w-full lg:h-[420px] text-center m-auto object-cover object-center'>
                                <img src={imgUrl} alt="" className='w-full h-full rounded' />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section className='bg-white' id='buyandsell'>
                <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-15'>Buy and sell Used Gear</h2>
                <div className='md:grid grid-cols-2 md:gap-x-10'>
                    <div>
                        {service_BuyAndSellUsed.text.map((item, index) => {
                            return (
                                <p key={index} className='text-center text-n-9 max-w-3xl m-auto mb-5'>
                                    {item}
                                </p>
                            )
                        })}
                    </div>

                    <div>
                        <Collapse className='mt-5 md:mt-0' data={service_BuyAndSellUsed.accordions} dark={true}></Collapse>
                    </div>
                </div>
                <div className='text-center mt-15'>
                    <Button className='text-2xl' href={service_BuyAndSellUsed.btnLink}>{service_BuyAndSellUsed.btnText}</Button>
                </div>
            </Section>
        </>
    )
}

export default Service