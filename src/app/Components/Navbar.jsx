"use client"
import { Jolly_Lodger } from 'next/font/google';
const jolly_lodger = Jolly_Lodger({ subsets: ['latin'] ,weight:'400'});

import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar({darkMode}) {
    
    const[dark,setDark]=useState(false)
    const[scroll,setScroll]=useState(false)
    const[active,setActive]=useState(false)
    useEffect(()=>{
    darkMode(dark)
  })
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        setScroll(window.scrollY>10)
    })
  })
  return (
    <div className={"fixed flex justify-between items-center h-24 w-screen lg:text-3xl md:text-2xl lg:px-12 px-8 z-10 "+((dark&&scroll)?" text-white bg-black":(dark&&!scroll)?"bg-black":(!dark&&scroll)?"bg-white shadow-lg":"bg-white text-white")} >
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        <span className={jolly_lodger.className +" lg:text-5xl text-4xl duration-300"} >Mohamed Mehdi</span>
        <ul className='hidden md:flex flex-col md:flex-row space-x-5 rounded-xl md:relative absolute '>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 hover:px-5 cursor-pointer my-auto duration-300'><i className="uil uil-estate"></i> Home</Link>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 hover:px-5 cursor-pointer my-auto duration-300'><i className="uil uil-presentation-play"></i> Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}  className='hover:scale-125 hover:px-5 cursor-pointer my-auto duration-300'><i className="uil uil-envelope"></i> Contact</Link>            
            <button onClick={()=>setDark(!dark)} className={dark?"bg-white text-black rounded-xl":"bg-black text-white rounded-xl w-fit h-fit"}>
                <div className='hover:rotate-[360deg] h-full w-full text-4xl p-5 duration-500'>
                    {dark?(<i className="uil uil-moon"></i>):<i className="uil uil-sun"></i>}
                </div>
            </button>
        </ul>

        <button onClick={()=>setActive(!active)} className={"block md:hidden text-5xl"}>{(!active)?(<i className="uil uil-bars"></i>):(<i className="uil uil-multiply"></i>)} </button>

        <ul className={'md:hidden flex flex-col space-y-5 text-center absolute top-24 w-full text-2xl py-5 left-0 '+(dark?"text-white bg-black ":"text-black bg-white ")+(!active?"-translate-x-full":"")}>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><i className="uil uil-estate"></i> Home</Link>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500}><i className="uil uil-presentation-play"></i> Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} ><i className="uil uil-envelope"></i> Contact</Link>            
      
            <button onClick={()=>setDark(!dark)} className={(dark?" rounded-xl":" rounded-xl")+" p-5 w-full"}>
                {dark?(<i className="uil uil-moon p-5 bg-white text-black rounded-lg"></i>):<i className="uil uil-sun p-5 bg-black text-white rounded-lg"></i>}
            </button>
        </ul>
    </div>
  )
}
