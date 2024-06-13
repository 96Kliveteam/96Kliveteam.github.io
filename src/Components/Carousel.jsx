import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Button from './Button';

const Carousel = ({ children: slides,
    autoSlide = false,
    autoSlideInterval = 3000, }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () =>
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1))

    const next = () =>
        setCurrentIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1))

    useEffect(() => {
        if (!autoSlide) return
        const interval = setInterval(next, autoSlideInterval)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="overflow-hidden relative pb-12">
            <div className="h-full flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between pb-12">
                <Button onClick={prev}
                    className="p-0.5 rounded-full bg-white/80">
                    <FaAngleLeft/>
                </Button>
                <Button onClick={next}
                    className="p-0.5 rounded-full bg-white/80">
                    <FaAngleRight/>
                </Button>
            </div>

            <div className="absolute bottom-0 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i}
                            className={`
                  transition-all w-3 h-3 bg-n-9 rounded-full
                  ${currentIndex === i ? "p-2" : "bg-opacity-50"}
                `} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel