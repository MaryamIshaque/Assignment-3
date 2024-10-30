import React from 'react'

const Contact = () => {
  return (
    <div className=' gap-5 flex flex-col text-black bg-white '>
    <h1>Contact Us</h1>
    <label htmlFor="name">Name:</label>
    <input className="bg-black border-b-2 border-white" placeholder='Name' type="text" id='name' />
    <label htmlFor="email">Email:</label>
    <input className="bg-black border-b-2 border-white" placeholder='Email' type="email" id='email' />
    <label htmlFor="message">Message:</label>
    <textarea  id='message' className="bg-black border-b-2 border-white" placeholder='Message'/>
    </div>
  )
}

export default Contact