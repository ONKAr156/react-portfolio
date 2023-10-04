import React, { useState } from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../assets/images/onkar-logo 1.svg"
import gif from "../assets/images/gif5.gif"
const Navbar = () => {
  const [data, setData] = useState(false)
  const check = () => {
    setData(false)
  }
  return <>
    <div className='text-slate-50 border border-opacity-20  border-x-0 border-red-400 img w-full h-[4rem] px-8 flex justify-between items-center '>
      <Link to={"/"}>
        <img src={gif} className='object-contain h-[3.5rem] max-w-max rounded-full' alt="" />
      </Link>

      <div className=' hidden md:block'>
        <div className='flex gap-4'>
          <Link to={"/"} className='text-base text-start font-medium  '> 1.  Home</Link>
          <Link to={"/about"} className='text-base font-medium'>2.  About</Link>
          <Link to={"/projects"} className='text-base px- font-medium '>3.  Projects</Link>
        </div>
      </div>

      <div className='md:hidden '>
        <button onClick={() => setData(!data)} className='px-3'><i className='bi bi-list text-2xl sm:text-3xl '></i></button>
      </div>

    </div>

    <div onMouseLeave={check} >
      {
        data ? <ShowNav /> : false
      }

    </div>
  </>

}
const ShowNav = () => {
 
  return <>
    <div className='shadow-lg shadow-cyan-500/50   md:hidden lg:hidden bg-slate-500  text-slate-100'>
      <div className='flex flex-col  h-30 py-4 px-5 gap-4 '>
        <Link to={"/"} className='text-base text-start font-medium '>Home</Link>
        <Link to={"/about"} className='text-base font-medium'>About</Link>
        <Link to={"/projects"} className='text-base px- font-medium '>Projects</Link>

      </div>

    </div>
  </>
}

export default Navbar