"use client"
import { Jolly_Lodger } from 'next/font/google';
const jolly_lodger = Jolly_Lodger({ subsets: ['latin'],weight:'400'});


export default function Footer({darkMode}) {
  return (
    <div className={(darkMode?"bg-black text-white":"text-black")+" text-center border-t-2 border-gray-500 py-10 space-y-14"}>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <div className={jolly_lodger.className+" text-8xl"}>
        Mohamed Mehdi
      </div>
      <ul className='text-4xl space-x-5'>
        <a href=""><i className="hover:text-blue-700 duration-300 uil uil-facebook"></i></a>
        <a href=""><i className="hover:text-purple-700 duration-300 uil uil-instagram"></i></a>
        <a href="https://github.com/mohamedmehdib"><i className="hover:text-gray-700 duration-300 uil uil-github"></i></a>
        <a href=""><i className="hover:text-green-700 duration-300 uil uil-whatsapp"></i></a>
      </ul>
      <div>
        Copyrights Ⓒ 2024 . All rights reserved
      </div>
    </div>
  )
}
