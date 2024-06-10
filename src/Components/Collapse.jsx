import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
const Collapse = (items) => {
    function onClick() {
        alert("1")
        
    }
    return (
        <>
            <div>
                <button className='flex items-center justify-between border-b-2 py-3' onClick={onClick}>
                    <h3 className='mr-5'>Question</h3>
                    <FaAngleDown/>
                </button>
                <div className='hidden'>
                    <p>Answer</p>
                </div>
            </div>
        </>
    )
}

export default Collapse