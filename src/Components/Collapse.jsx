import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
const Collapse = ({ className, data = [] }) => {
    const [currentCheck, setCurrentCheck] = useState("-1");
    const [isOpen, setIsOpen] = useState(true);
    const onClick = (key) => {
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
                    <div key={item.id} className={className}>
                        <button className='flex items-center justify-between border-b-2 py-3' onClick={() => onClick(item.id)}>
                            <h3 className='mr-5'>{item.title}</h3>
                            <FaAngleDown className={item.id === currentCheck && isOpen ? "rotate-180" : ""}/>
                        </button>
                        <div className={`transition-all origin-top overflow-hidden ${(item.id === currentCheck && isOpen) ? "max-h-20" : "max-h-0"}`}>
                            {item.answer.map((text,index)=>(<p className='h-full' key={index}>{text}</p>))}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Collapse