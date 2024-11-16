import React from 'react'
import Image from 'next/image'
import { ReactTyped } from "react-typed";
import { Jolly_Lodger } from 'next/font/google';
const jolly_lodger = Jolly_Lodger({ subsets: ['latin'],weight:'400'});


export default function Hero({darkMode}) {
  return (
    <div id='hero' className={' md:h-screen flex md:flex-row flex-col-reverse justify-between items-center md:p-10 p-5 pt-24 md:pt-0 '+(darkMode?"text-white bg-black":"")} >
        <div className='md:w-1/2 pt-10'>
            <p className='md:text-4xl text-3xl font-semibold'>
                I'm{' '}
                <ReactTyped className='text-red-500'
                    strings={["Mohamed Mehdi"]}
                    typeSpeed={70}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                />
            </p>
            <p className='text-xl md:text-2xl py-5'>
                I'm a web developer with in-depth experience in UI/UX design. My journey began during college, where I discovered my passion for creating seamless and user-friendly web experiences. Since then, I’ve honed my skills and expertise in front-end development, back-end technologies, and responsive design.
            </p>
        </div>
        <div className='md:w-1/2 pb-14 md:pb-0'>
            <Image src="/he.png" alt='image' width={400} height={400} className=' mx-auto my-auto rounded-xl'/>
        </div>
    </div>
  )
}
