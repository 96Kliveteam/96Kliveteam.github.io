import React, {useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
const Collapse = ({ className, data = [] }) => {
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
        // setCurrentCheck(key)
        // setIsOpen(!isOpen);
    }
    return (
        <>
            {data.map(item => {
                return (
                    <div key={item.id} className={`w-full ${className || ''}`}>
                        <button className='flex items-center justify-between border-b-2 border-color-1 py-3 w-full mb-3' onClick={(e) => onClick(item.id, e)}>
                            <h3 className='mr-5 text-xl'>{item.title}</h3>
                            <FaAngleDown className={`text-color-1 transition-all text-xl ${item.id === currentCheck && isOpen ? "rotate-180" : ""}`}/>
                        </button>
                        <div className={`grid overflow-hidden transition-all ${(item.id === currentCheck && isOpen) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className='overflow-hidden'>
                            {item.answer.map((text,index)=>(<p className='mb-3 text-sm' key={index}>{text}</p>))}
                            </div>             
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Collapse