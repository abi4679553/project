import React from 'react'
import { SiTicktick } from "react-icons/si";


export const Header = () => {
  return (
    <div>  <div className='bg-purple-800 p-5 text-white text-center flex justify-between items-center'>
            <p className='ml-64 font-bold '>ebook : preventing cheatbot cheating in online learning</p>
            <button className='bg-gray-200 rounded-3xl p-2 mr-96 px-5 text-black'>Access</button>
            </div>
           <div className='flex text-center border bg-white justify-between p-4 '>
            <div className='flex p-4'>
            <p className='text-3xl flex items-center gap-3'><SiTicktick />Cheat Sense</p>
            </div>
            <div className='flex gap-12 mt-5'>
            <p>Higher Ed</p>
            <p>Professional Ed</p>
            <p>Resources</p>
            <p>About Us</p>
           </div>
           <div className='flex gap-5 mt-3 '>
            <button className='bg-blue-500 rounded-full w-32 h-10 text-white'>Demo</button>
            <button className='bg-pink-500 rounded-full w-32 h-10 text-white '>support</button>
           </div>
           </div></div>
  )
}

