import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import "../css/about.css"
import line from "../assets/images/Line 3.png"
import bg from "../assets/images/bg1.png"

const About = () => {
  const [data, setData] = useState(true)
  const [data2, setData2] = useState(false)
  const [data3, setData3] = useState(false)

  const animationBasic = {
    initial: {
      x: "-100vw",
      opacity: 0
    },
    animation: {
      x: 0,
      opacity: 1
    },
    trasition: {
      delay: 0.75,
      duration: 1.2,
      type: "spring",
      stiffness: 90

    }

  }
  return <>
    <div className='img h-full  flex flex-col  w-full   items-center   p-4 scroll-smooth'>
      {/* About start------------------------------------- */}
      <motion.div
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1, }}
        transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 60 }}

        className='px-2 md:px-0 mx-10 md:mx-0 my-10 md:my-5   grid grid-cols-12 gap-2  md:gap-0 h-[20rem] w-screen  md:h-[15rem] md:w-[50rem] text-slate-100'>
        <div className=' col-span-12 md:col-span-2 md:border md:border-y-0 md:border-l-0 md:border-r-2 md:h-52   md:border-dashed md:border-opacity-60'>
          <h3 className=' text-xl md:text-2xl'><span className='text-red-600 font-bold'>A</span>bout me</h3>
        </div>
        <div className='  col-span-12 md:col-span-10  h-full flex flex-col gap-2 mx-3 '>
          <div>
            <span className='text-2xl md:text-3xl font-semibold '>I</span> <span className='text-2xl'>'m</span>
            <h2 className=' text-3xl md:text-4xl text-gray-400  '>ONKAR BORGAONKAR</h2>
          </div>

          <div>
            <span>
              Passionate and driven ReactJS developer with a strong foundation in MERN Stack and NextJS. Dedicated to creating dynamic and user-centric web applications. Eager to contribute my expertise in frontend frameworks, modern UI/UX design, and responsive development to a forward-thinking team, while continuously learning and growing in the ever-evolving world of web development.

            </span>
          </div>

        </div>
      </motion.div>
      {/* About end--------------------------------------- */}

      <br />
      {/*  */}
      <motion.div
        initial={{ y: "50vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1, }}
        transition={{ delay: 0.8, duration: 1, type: "keyframes", stiffness: 90 }}
        className='px-4 md:px-0 mx-10 md:mx-0 my-10 md:my-5   grid grid-cols-12 gap-2  md:gap-0 h-[20rem] w-screen  md:h-[15rem] md:w-[50rem] text-slate-100'>
        <div className='order-2 md:order-2  col-span-12 md:col-span-8  h-full flex flex-col gap-4 md:border md:border-y-0 md:border-l-0 md:border-r-2  md:h-52  md:border-dashed md:border-opacity-60 '>
          <div>
            <h3 className='font-semibold text-lg'>Sandip Institute of Technology and Research Center Nashik</h3>
            <p><span>BE Mechanical </span> <span className='mx-2 italic opacity-40'> 2018-2022</span></p>
            <p > <span className='italic opacity-40'>CGPA </span> <span className=' opacity-40'>:-</span>  8.23</p>
          </div>
          <div>
            <h3 className='font-semibold text-lg'>Vidyadham Jr. college</h3>
            <p><span>12th</span> <span className='mx-2 italic opacity-40'> 2017-2018</span></p>
            <p > <span className='italic opacity-40'>62.98%</span>  </p>
          </div>

          <div>
            <h3 className='font-semibold text-lg'>BSGM school</h3>
            <p><span>10th</span> <span className='mx-2 italic opacity-40'> 2016</span></p>
            <p > <span className='italic opacity-40'>77.89%</span>  </p>
          </div>

        </div>

        <div className=' order-1 md:order-2  col-span-12 md:col-span-4 h-full  md:h-52 '>
          <h3 className='text-2xl md:mx-5 '><span className='text-red-600 font-bold'>E</span>ducation </h3>
        </div>
      </motion.div>
      <br />
      {/* Tech stack started */}
      {/* Tech stack ended */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        // ref={ref}
        className=' px-4 md:mx-0 my-10 md:my-7   h-[20rem] w-screen  md:h-[10rem] md:w-[50rem] text-slate-100   '>
        <h3 className='text-center text-2xl font-bold font-mono my-2'>My Skills  </h3>
        <div className='w-full h-full border border-gray-500 border-t-0 rounded-lg shadow-xl shadow-cyan-500/50 '>
          <div className='text-center my-6'>
            <button onClick={e => { setData(!data), setData2(false), setData3(false) }} className={` ${data ? 'bg-blue-700' : 'bg-gray-400'}  p-2 cursor-pointer mx-2 text-slate-100 rounded-md  `}>Advance</button>
            <button onClick={e => { setData2(!data2), setData(false), setData3(false) }} className={` ${data2 ? 'bg-blue-700' : 'bg-gray-400'}  p-2 px-3 cursor-pointer mx-2 text-slate-100 rounded-md  `}>Good</button>
            <button onClick={e => { setData3(!data3), setData(false), setData2(false) }} className={` ${data3 ? 'bg-blue-700' : 'bg-gray-400'}  p-2 cursor-pointer mx-2 text-slate-100 rounded-md  `}>Familiar</button>
          </div>

          <div className='flex justify-center h-[50%] items-center  '>
            {
              data && data ? <Advance /> : false
            }
            {
              data2 && data2 ? <Good /> : false
            }
            {
              data3 && data3 ? <Familiar /> : false
            }
          </div>

        </div>

      </motion.div>
      <br />


    </div>

  </>
}

const Advance = () => {
  // console.log("clicked");
  return <>
    <div className='flex flex-wrap  gap-4 text-green-600 text-[1.19rem] md:text-lg p-2 '>
      <span>HTML</span>
      <span>CSS</span>
      <span>BOOTSTRAP</span>
      <span>TAILWIND CSS</span>
    </div>

  </>
}
const Good = () => {
  // console.log("clicked");
  return <>
    <div className='flex flex-wrap gap-4 text-orange-400  text-[1.19rem] md:text-lg p-2'>
      <span>JAVASCRIPT</span>
      <span>REACT</span>
      <span>NODE.JS</span>
      <span>EXPRESS.JS</span>
    </div>

  </>
}
const Familiar = () => {
  // console.log("clicked");
  return <>
    <div className='flex flex-wrap-reverse text-center gap-4 text-gray-400 text-[1.19rem] md:text-lg p-2
     '>
      <span>FRAMER MOTION</span>
      <span>GSAP</span>
      <span>TYPESCRIPT</span>
      <span>NEXT.JS</span>
      <span>MONGO DB</span>
    </div>

  </>
}
export default About