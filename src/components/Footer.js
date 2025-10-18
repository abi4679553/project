import React from 'react'
import { SiTicktick } from "react-icons/si";


const Footer = () => {
  return (
    <div>
        <div className='bg-purple-800 text-white'>
            <p className='flex gap-5 items-center text-2xl p-5'><SiTicktick />Cheat Sense</p>
            <hr></hr>
        </div>
        <div className='flex gap-40 p-5 bg-purple-800 text-white '>
        <div>
            <p className='text-xl'>Features</p>
            <hr></hr>
            <p className='pt-4'>Key Features</p>
            <p>Service Options</p>
            <p>Detects Cell Phones</p>
            <p>Protects Integrity</p>
        </div>
        <div>
           <p className='text-xl'>Customers</p>
            <hr></hr>
           <p className='pt-4'>Higher Education</p>
           <p>Professional Education</p>
           <p>Professional Education</p>
           <p>Professional Education</p>
           <p>Students</p>
        </div>
        <div>
          <p className='text-xl'>Resources</p>
          <hr></hr>
          <p className='pt-4'>Blog</p>
          <p>ebooks & Whitepapers</p>
          <p>Customer Stories</p>
          <p> Videos</p>
          <p>Proctoring 101</p>
          <p>AI Tools For Education</p>
        </div>
        <div>
          <p className='text-xl'>Support</p>
          <hr></hr>
          <p className='pt-4'>Chat</p>
          <p>FAQs</p>
          <p>Getting Started</p>
          <p>Knowledge Base</p>
          <p>System Requirements</p>
          <p>LMS Integrations</p>
          <p>Exam Prep Tips</p>
        </div>
        <div>
          <p className='text-xl'>Cheat Sense</p>
          <hr></hr>
          <p className='pt-4'>About Us</p>
          <p>Careers</p>
          <p>Proctoring Services</p>
          <p>Proctoring Software</p>
          <p>Contact</p>
          <p>Partnership with AWS</p>
        </div>
    </div>
    </div>
  )
}

export default Footer