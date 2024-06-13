
import Header from '../Components/Header'
import bacgroundImageUrl from '../assets/IMG_4919.PNG'
import { about_OurPeople, about_Sliders, about_WhoWeAre, about_WhatWeDo } from '../constants/constants'
import Section from '../Components/Section'
import Carousel from '../Components/Carousel'
import Button from '../Components/Button'
import Card from '../Components/Card'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          })
      }, [])
    return (
        <>
            <Header bacgroundImageUrl={bacgroundImageUrl}></Header>
            <Section id='whatwedo' className='bg-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-15'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-n-9 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>What we do</h2>
                        <div className='mt-10 md:hidden'>
                            <img src={about_WhatWeDo.part_1.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                        </div>
                        <div>
                            {about_WhatWeDo.part_1.content.map((item) => {
                                return (
                                    <p key={item.id} className='text-center mt-10 text-n-9'>
                                        {item.text}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='hidden md:block xl:max-h-[600px]'>
                        <img src={about_WhatWeDo.part_1.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-15 mt-20'>
                    <div className='h-52 md:h-auto xl:max-h-[600px]'>
                        <img src={about_WhatWeDo.part_2.imgUrl_2} alt="" className='rounded-md h-full w-full object-cover object-center' />
                    </div>
                    <div className='flex flex-col justify-evenly'>
                        <p className='text-center mt-10 text-n-9'>{about_WhatWeDo.part_2.content}</p>
                        <div className='my-10 h-52 md:order-2 md:h-72'>
                            <img src={about_WhatWeDo.part_2.imgUrl_1} alt="" className='rounded-md h-full w-full object-cover object-center' />
                        </div>
                        <div className='text-center md:order-1 md:mt-10'>
                            <Button className='text-2xl' href={about_WhatWeDo.part_2.btnLink}>
                                {about_WhatWeDo.part_2.btnText}
                            </Button>
                        </div>

                    </div>
                </div>
            </Section>
            <Section id='whoweare'>
                <div className='lg:grid lg:grid-cols-2 gap-x-15'>
                    <div className='py-10'>
                        <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Who we are</h2>
                        <div>
                            {about_WhoWeAre.content.map((item, index) => {
                                return (
                                    <p key={index} className='text-center mt-10 text-white max-w-[768px] m-auto'>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='h-52 mt-10 md:mt-0 lg:h-auto xl:max-h-[720px]'>
                        <img src={about_WhoWeAre.imgUrl} alt="" className='rounded-md h-full w-full object-cover object-[0_70%] lg:object-center' />
                    </div>
                </div>
            </Section>
            <Section id='ourpeople'>
                <div>
                    <h2 className='text-color-1 text-4xl md:text-5xl text-center mb-5 lg:mb-10'>Our People</h2>
                    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-10'>
                        {about_OurPeople.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <div className='md:h-64'>
                                        <img src={item.imgAvatar} alt="" className='rounded-md h-full w-full object-cover object-[0_25%]' />
                                    </div>
                                    <div className='p-5'>
                                        <p className='text-xl'>{item.name}</p>
                                        <p className='mt-3 text-lg'>{item.title}</p>
                                        <div className='mt-3'>
                                            {item.profiles.map((subItem, subIndex) => {
                                                return (
                                                    <p className='mt-1 text-sm' key={subIndex}>
                                                        {subItem}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </Section>
            <Section className='bg-white'>
                <Carousel>
                    {about_Sliders.map((item, index) => {
                        return (
                            <div key={index} className='min-w-full px-8 md:px-0 flex h-full'>
                                <p className='flex items-center justify-center text-center leading-10 text-balance md:text-base md:leading-loose lg:text-xl lg:leading-loose max-w-4xl m-auto text-n-9'>{item}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </Section>
        </>

    )
}

export default About