import React from 'react'
import Image from 'next/image'

export default function Projects({darkMode}) {
  const projects = [
    {src:"/n.png",name:"Next Js Website"},
    {src:"/r.png",name:"React Js Website"},
    {src:"/v.png",name:"Vite Js Website"},
    {src:"/vu.png",name:"Vue Js Website"},
    {src:"/ne.png",name:"Nest Js Website"}

  ]
  return (
    <div id='projects' className={(darkMode?"bg-black text-white":"text-black")}>
        <div className='text-center md:text-5xl text-4xl'>My latest Project</div>
        <div className='md:p-10 p-5 flex flex-wrap justify-center '>
            {
                projects.map((item,index)=>{
                    return <div key={index} className='block w-96 h-52 hover:scale-125 relative md:m-10 my-5 duration-200'>
                        <Image alt='' className='object-top hover:object-bottom object-cover duration-[3s] rounded-xl cursor-pointer' src={item.src} fill/>
                        <div className='pt-44 text-center'>{item.name}</div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
