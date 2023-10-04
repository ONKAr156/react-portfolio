import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import bg from "../assets/images/bg_home.jpg"
// import ecom from "../assets/projects/ecom.jpg"
import Data from './data';
import Footer from '../components/Footer';
const Projects = () => {
  return <>



    <div className=' img w-full h-screen flex flex-col gap-10 justify-center items-center homeData px-14 scroll-smooth'>
      <div>
        <span className=' text-2xl md:text-3xl text-slate-100 font-bold '>My Recent Works
</span>
      </div>
      <div className='my-10 w-full shadow-2xl shadow-cyan-500/50  cursor-pointer  '>
        <Swiper
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true ,
          }}

          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {
            Data.map(item => <SwiperSlide className=' text-slate-950 h-[20rem]   md:h-80 max-w-max md:w-96 bg-slate-200   ' key={item}>
              <div className=' h-full w-full relative  '>
                <img className='object-cover md:object-contain   md:max-h-max  ' src={item.img} alt="" />
                <div className='  h-full w-full text-slate-100 md:text-slate-950  bg-red-400 blur-0 hover:text-slate-100 hover:bg-blue-600 duration-700  bottom-0  translate-y-60 hover:translate-y-0.5 overflow-hidden absolute  px-3  '>
                  <h2 className='text-xl font-bold'> {item.title} </h2>
                  <p className='my-4 flex gap-3 items-center'>
                  <a href={item.git} target="_blank" > <i className='bi bi-github cursor-pointer'></i></a>
                  <a href={item.demo} target="_blank" >  <i class="bi bi-eye text-xl cursor-pointer"></i></a>
                   
                  </p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor mollitia amet blanditiis ex neque facere explicabo enim placeat aut.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore officiis eaque laudantium minus nisi distinctio itaque ea magnam error?</p>
                </div>
              </div>



            </SwiperSlide>)
          }
        </Swiper>
       
      </div>
    </div>
    {/* <Footer/> */}
  </>
}

export default Projects