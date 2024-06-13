import React, { useState } from 'react'
import Button from './Button'

const Form = ({className}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        alert("Your information has been received. Thank you for contacting")
    }

    return (
        <form onSubmit={handleSubmit} className={`m-auto ${className || ''}`}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="font-medium text-n-9 block mb-2">First Name</label>
                    <input type="text" name='first-name' id='first-name' value={firstName}
                        className="border-2 border-n-9/30 p-2 w-full rounded-lg focus:outline-none focus:border-n-9 text-n-9 bg-white" required
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="font-medium text-n-9 block mb-2">Last Name</label>
                    <input type="text" name='last-name' id='last-name' value={lastName}
                        className="border-2 border-n-9/30 p-2 w-full rounded-lg focus:outline-none focus:border-n-9 text-n-9 bg-white" required
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="font-medium text-n-9 block mb-2">Email</label>
                    <input type="email" name='email' id='email' value={email}
                        className="border-2 border-n-9/30 p-2 w-full rounded-lg focus:outline-none focus:border-n-9 text-n-9 bg-white" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone-number" className="font-medium text-n-9 block mb-2">Phone Number</label>
                    <input type="text" name='phone-number' id='phone-number' value={phoneNumber}
                        className="border-2 border-n-9/30 p-2 w-full rounded-lg focus:outline-none focus:border-n-9 text-n-9 bg-white" required
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="col-span-6">
                    <label htmlFor="message" className="font-medium text-n-9 block mb-2">Message</label>
                    <textarea type="text" name='message' id='message' value={message}
                        className="border-2 border-n-9/30 p-2 w-full rounded-lg focus:outline-none focus:border-n-9 text-n-9 bg-white" required
                        rows={5}
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
            </div>
            <div className='text-center mt-10'>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default Form