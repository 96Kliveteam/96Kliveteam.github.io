import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
const Collapse = ({ className, dark = false, data = [] }) => {
    const [currentCheck, setCurrentCheck] = useState("-1");
    const [isOpen, setIsOpen] = useState(true);
    const onClick = (key, event) => {
        if (currentCheck === key) {
            setIsOpen(!isOpen);
        }
        else {
            setCurrentCheck(key)
            setIsOpen(true);
        }
    }
    return (
        !dark ?
            <>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={`w-full ${className || ''}`}>
                            <button className='flex items-center justify-between border-b-2 border-color-1 py-3 w-full mb-3'
                                onClick={(e) => onClick(index, e)}>
                                <h3 className='mr-5 text-xl'>{item.title}</h3>
                                <FaAngleDown className={`text-color-1 transition-all text-xl 
                                ${index === currentCheck && isOpen ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`grid overflow-hidden transition-all 
                            ${(index === currentCheck && isOpen) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className='overflow-hidden'>
                                    {item.answer.map((text, subIndex) => (<p className='mb-3 text-sm' key={subIndex}>{text}</p>))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
            :
            <>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={`w-full ${className || ''}`}>
                            <button className='flex items-center justify-between border-b-2 border-n-9 py-3 w-full mb-3'
                                onClick={(e) => onClick(index, e)}>
                                <h3 className='mr-5 text-xl text-n-9'>{item.title}</h3>
                                <FaAngleDown className={`text-n-9 transition-all text-xl 
                            ${index === currentCheck && isOpen ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`grid overflow-hidden transition-all 
                        ${(index === currentCheck && isOpen) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className='overflow-hidden'>
                                    {item.answer.map((text, subIndex) => (<p className='mb-3 text-sm text-n-9' key={subIndex}>{text}</p>))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
    )
}

export default Collapse