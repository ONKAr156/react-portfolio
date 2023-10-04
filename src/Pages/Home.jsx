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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  // console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 6
    }
  }

  return <>



    <div className='homeData img px-10    md:h-full  z-0 overflow-hidden scroll-smooth  '>

      <div className='grid grid-cols-12 h-screen  '>
        <div className=' sm:col-span-6 z-10  md:col-span-6  w-full  text-slate-100 flex  justify-center flex-col '>

          <div>
            <span className='text-xl opacity-95' >Hello I'm  </span>
            <span><strong className='text-2xl '>ONKAR</strong></span>

            <p className=' w-[20rem] md:w-[30rem] opacity-70 mt-3'> A <strong>Frontend Developer</strong> with an impeccable skill set in React.js. Crafting seamless and captivating user interfaces is my forte. I'm dedicated to delivering top-tier web experiences. Let's elevate your projects to the next level together.    </p>

            <Link to={Resume}
              download="ONKAR BORGAONKAR "
              target="_blank"
              rel="noreferrer">
              <button

                className='bg-blue-600 text-slate-100 px-3 py-1 md:px-5 md:py-2 rounded-md my-3 text-sm md:text-base'> Resume  </button>
            </Link>
          </div>
        </div>

        <div className=' hidden md:block  md:h-auto  md:col-span-6 '>
          <Lottie  animationData={lottie2}  style={{ height: "100%", width: "80%",opacity: "0.85", filter: "contrast(10%)"
          }}></Lottie>
        </div>
      </div>

      <motion.div
        variants={variants}
        animate="default"
        className='cursor'>
      </motion.div>





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