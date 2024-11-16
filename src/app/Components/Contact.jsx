import React, { useRef } from 'react'

export default function Contact({darkMode}) {
  const inputName = useRef()
  const inputMail = useRef()
  const inputMessage = useRef()
  const clear = () => {
    inputName.current.value=""
    inputMail.current.value=""
    inputMessage.current.value=""
  }
  return (
    <div id='contact' className={(darkMode?"bg-black text-white":"text-black")+" py-5"}>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <div className='text-center text-5xl py-10'>Contact Us !</div>
      <div className=' flex flex-col-reverse md:flex-row'>
        <div className='md:w-1/2 my-auto px-10 space-y-2'>
          <div className='flex text-left text-xl items-center space-x-3'>
            <i className={(!darkMode?"bg-black text-white":"text-black bg-white")+" p-5 rounded-full text-4xl uil uil-map-marker"}></i>
            <p>Tunisia, Sousse, Sahloul</p>
          </div>
          <div className='flex text-left text-xl items-center space-x-3'>
            <i className={(!darkMode?"bg-black text-white":"text-black bg-white")+" p-5 rounded-full text-4xl uil uil-phone"}></i>
            <p>55 555 555</p>
          </div>
          <div className='flex text-left text-xl items-center space-x-3'>
            <i className={(!darkMode?"bg-black text-white":"text-black bg-white")+" p-5 rounded-full text-4xl uil uil-mailbox"}></i>
            <p>contact@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col md:w-1/2 space-y-5 p-12'>
          <input ref={inputName} className={(darkMode?"bg-black text-white":"text-black")+" resize-none outline-none border-2 border-gray-600 rounded-xl text-xl p-3 "} placeholder='Enter your name ...' name="" id=""/>
          <input ref={inputMail} className={(darkMode?"bg-black text-white":"text-black")+" resize-none outline-none border-2 border-gray-600 rounded-xl text-xl p-3 "} placeholder='Enter your email ...' name="" id=""/>
          <textarea ref={inputMessage} className={(darkMode?"bg-black text-white":"text-black")+" resize-none outline-none border-2 border-gray-600 rounded-xl text-xl p-3 h-60"} placeholder='Enter your message ...' name="" id=""></textarea>
          <button className={(!darkMode?"bg-black text-white":"text-black bg-white")+" rounded-xl w-20 h-14 hover:scale-125 duration-300"} onClick={clear}>Send</button>
        </div>
      </div>
    </div>
  )
}