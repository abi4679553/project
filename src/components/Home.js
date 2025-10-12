import React from 'react'
import video from '../assests/video.mp4'


const Home = () => {
    return (
        <div>
            <div className='text-center p-10 bg-purple-500 text-white '>
            <div className='p-10 text-2xl'>
            <p className='text-2xl'>Cheat Sense Online Proctoring</p>
            <p className='text-5xl p-5'> A Better Way to Test</p>
            <p>Integrity Matters. So Do People. Rethink How You Secure Exams.</p>
            </div>
            <video controls class  className='h-96 ml-60'>
                <source src={video} alt="video" className=' border border-none ' />
            </video>
        </div>
  
        </div>
    )
}

export default Home