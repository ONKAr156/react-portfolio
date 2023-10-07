import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import bg from "../assets/images/default.jpg"
import xc1 from "../assets/images/2.jpeg"
import arrow from "../assets/images/Arrow 1.svg"
import line from "../assets/images/Line 3.png"
import boy from "../assets/images/default.jpg"
import values1 from "../assets/images/strategy.png"
import Lottie from "lottie-react"
import lottie2 from "../assets/images/2.json"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"
import Resume from "../assets/Resume.pdf"
import { Link } from 'react-router-dom'
const Home = () => {

  return <>
    <div className='homeData img px-10    md:h-full  z-0 overflow-hidden scroll-smooth  '>

      <div className='grid grid-cols-12 h-screen  '>
        <motion.div
          initial={{ y: "100vh", opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
          className=' sm:col-span-6 z-10  md:col-span-6  w-full  text-slate-100 flex  justify-center flex-col '>

          <div>
            <span className='text-xl opacity-95' >Hello I'm  </span>
            <span><strong className='text-2xl '>ONKAR</strong></span>

            <motion.p

              className=' text-lg w-[20rem] md:w-[30rem] opacity-70 mt-3 '>  As a budding <strong>Frontend Developer</strong>  
              , I wield the tools of the trade, including React.js, Next.js, TypeScript, Redux, and JavaScript.  My portfolio is a canvas of simplicity and professionalism, where I craft web experiences that are both functional and uniquely engaging.  
              </motion.p>



            <Link to={Resume}
              download="ONKAR BORGAONKAR "
              target="_blank"
              rel="noreferrer">
              <button

                className='bg-blue-600 text-slate-100 px-3 py-1 md:px-5 md:py-2 rounded-md my-3 text-sm md:text-base'> Resume  </button>
            </Link>
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className='h-4 w-60  my-3  flex  gap-3 items-center ' >
            <p className='  '>Connect me on </p>
            <div className='my-3 flex  '>
              <Link to={'https://github.com/ONKAr156'} target="_blank">
                <i className='cursor-pointer mx-2 bi bi-github'></i>
              </Link>
              <Link to={'https://www.linkedin.com/in/onkar-borgaonkar/'} target="_blank">
                <i className='cursor-pointer mx-2 bi bi-linkedin'></i>
              </Link>

            </div>

          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: "100vh", opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className=' hidden md:block  md:h-auto  md:col-span-6 '>
          <Lottie animationData={lottie2} style={{
            height: "100%", width: "80%", opacity: "0.85", filter: "contrast(10%)"
          }}></Lottie>
        </motion.div>
      </div>

      {/* <marquee className=" py-5  text-slate-100" behavior="scroll" direction="right" scrollamount="8" loop="infinite" >
        <i className='text-slate-50 bi bi-flag-fill mx-5' ></i>
        <span className='text-slate-50'>connect me on </span>
        <i className=' text-slate-50 mx-5 bi bi-github'></i>
        <i className=' text-slate-50 mx-5 bi bi-linkedin'></i>
        <i className=' text-slate-50 mx-5 bi bi-meta'></i>
        <i className=' text-slate-50 mx-5 bi bi-twitter'></i>

      </marquee> */}
    </div>

  </>





}

export default Home