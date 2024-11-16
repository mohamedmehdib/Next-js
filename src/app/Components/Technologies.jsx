import React from 'react'
import Image from 'next/image'

export default function Technologies({darkMode}) {
  const tech1 = [
    {src:"/html5.png" , name:"Html"},
    {src:"/css3.png" , name:"Css"},
    {src:"/sass.png" , name:"Sass"},
    {src:"/js.png" , name:"JavaScript"},
    {src:"/ts.webp" , name:"TypeScript"},
    {src:"/nodejs.png" , name:"Node js"},
    {src:"/reactjs.png" , name:"React js"},
    {src:"/nextjs.svg" , name:"Next js"},
    {src:"/python.jpg" , name:"Python"},
  ]
  const tech2 = [
    {src:"/postman.png" , name:"Postman"},
    {src:"/mamp.png" , name:"Mamp"},
    {src:"/social-square.jpg" , name:"Tailwind"},
    {src:"/strapi.png" , name:"Strapi"},
    {src:"/reduxjs.jpg" , name:"Redux"},
    {src:"/flet.svg" , name:"Flet"},
    {src:"/npm.png" , name:"Npm"},
  ]
  return (
    <div className={(darkMode?"bg-black text-white":"text-black")} >
        <div className='text-center py-10 md:text-5xl text-3xl'>Technologies I use</div>
        <div className='overflow-hidden flex md:mx-10 mx-3'>
            <div className='md:gap-10 gap-5 flex animate-swipe1 hover:[animation-play-state:paused]'>
            {
                [...tech1,...tech1,...tech1,...tech1,...tech1,...tech1,...tech1,...tech1,...tech1,...tech1,...tech1].map((item,index)=>{
                    return (
                        <div key={index} className='flex flex-col items-start flex-shrink-0'>
                            <Image alt={item.name} src={item.src} width={140} height={140} className='md:p-4 p-2 md:w-36 w-24 hover:p-2 border-2 border-black duration-200 rounded-lg bg-white'/>
                            <p className='text-lg md:text-2xl text-center mx-auto'>{item.name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div className='overflow-hidden flex md:mx-10 mx-3 py-10'>
            <div className='md:gap-10 gap-5 flex animate-swipe2 hover:[animation-play-state:paused]'>
            {
                [...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2,...tech2].map((item,index)=>{
                    return (
                        <div key={index} className='flex flex-col items-start flex-shrink-0'>
                            <Image alt={item.name} src={item.src} width={140} height={140} className='md:p-4 p-2 md:w-36 w-24 hover:p-2 border-2 border-black duration-200 rounded-lg bg-white'/>
                            <p className='text-lg md:text-2xl text-center mx-auto'>{item.name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}
