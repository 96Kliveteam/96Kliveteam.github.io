import React from 'react'

const Card = ({children, className, dark}) => {
    const renderCard = () => {
        return (
            <>
                <div className={`shadow-lg shadow-color-2 hover:shadow-color-1 h-min md:h-auto md:mb-0 md:mt-0 
                w-full max-w-xl m-auto rounded-md bg-white text-n-9 ${className || ''}`}>
                    {children}
                </div>
            </>
        )
    }
    const renderDarkCard = () => {
        return (
            <>
                <div className={`shadow-xl shadow-n-9/70 hover:shadow-n-9 h-min md:h-auto md:mb-0 md:mt-0 
                w-full max-w-xl m-auto rounded-md bg-n-9 text-white ${className || ''}`}>
                    {children}
                </div>
            </>
        )
    }
    return dark ? renderDarkCard() : renderCard()
}

export default Card