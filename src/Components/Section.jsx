import React from 'react'

const Section = ({ id, className, children }) => {
    return (
        <>
            <section id={id} className={`px-7.5 py-12 lg:px-10 lg:py-14 xl:py-24 ${className || ''}`}>
                {children}
            </section>
        </>

    )
}

export default Section