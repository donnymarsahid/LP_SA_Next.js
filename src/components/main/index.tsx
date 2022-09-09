import React, { useRef } from "react";

import Image from "next/image";
import { Pagination } from 'swiper';
import { Button } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "@redux/actions";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

// interface RootState {
//   counter: { count: number }
// }

export const Main: React.FC = () => {

  // =============================== Redux Start =============================== //

  // const counter = useSelector((state: RootState) => state.counter.count)
  // const dispatch = useDispatch()

  // const increment = () => dispatch(increase()) // Add count number state
  // const decrement = () => dispatch(decrease())  // Delete count number state

  // =============================== Redux End =============================== //

  const router = useRouter()
  const lazyRoot = useRef(null)
  // console.log(router.asPath, 'router');


  return (
    <div className="bg-background">
      <div className="w-full h-700px bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/img/bg-header.png')` }}>
        <div className="container mx-auto flex  md:flex-row lg:flex-row sm:flex-row justify-between lg:w-11/12 pt-20 xs:flex xs:flex-col-reverse" >
          <div className="flex items-center lg:p-0 md:w-96 sm:w-6/12  lg:w-6/12  md:pl-16 sm:pl-16  px-3">
            <div className="content">
              <h1 className="lg:text-4xl md:text-22px font-bold text-dark">Social Media Academy</h1>
              <h3 className="lg:text-2xl md:text-18px font-medium text-dark mt-3">Berkarir Sebagai Konten Kreator
                Di Semua Platform.</h3>
              <p className="text-mute lg:text-sm mt-35px md:text-12px sm:text-12px">Teknologilah yang bisa memberikan dampak sosial terbesar
                di negara ini, bukan kebijakan atau policy.    - Nadiem Makarim</p>
              <div className="c-button mt-28px md:flex ">
                <Button className="bg-primary mr-2 xs:p-1 md:text-12px sm:text-12px lg:text-18px hover:bg-primary-dark text-white lg:px-5 md:px-3 sm:px-3 sm:mb-2 py-1 rounded border-2 border-primary duration-75">
                  Daftar Sekarang
                </Button>
                <Button className="lg:px-5 md:px-3 sm:mb-2 xs:p-1 sm:px-3 py-1  md:text-12px sm:text-12px lg:text-18px rounded border-2 border-primary text-primary hover:bg-primary hover:text-white duration-75">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
          {/* <Image src="/assets/img/bg-img.png" alt="nextjs" width="520" height="520" /> */}
          <div className="content-image md:w-96 sm:w-6/12  lg:w-6/12 flex xs:flex-col justify-between xs:justify-center">
            <span></span>
            <div className="p-16 xs:p-8 xs:flex xs:justify-center">
              <img src={"/assets/img/bg-img.png"} className="w-full xs:w-3/4" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Platform Medsos ===================== */}
      <div className="container mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="font-bold text-2xl text-dark">Platform Media Sosial</h1>
        <div className="medsos flex mt-5 md:flex-row lg:flex-row sm:flex-row xs:flex-col" >
          <img className="md:mx-10 lg:mx-10 sm:mx-10 xs:mt-5 mt-3 lg:w-183 md:w-28 sm:w-20 xs:w-44  " src={'/assets/img/ict-yt.png'} alt="youtube" />
          <img className="md:mx-10 lg:mx-10 sm:mx-10 xs:mt-5 mt-3 lg:w-194 md:w-28 sm:w-20 xs:w-44  " src={'/assets/img/ict-fb.png'} alt="facebook" />
          <img className="md:mx-10 lg:mx-10 sm:mx-10 xs:mt-5 mt-3 lg:w-135 md:w-28 sm:w-20 xs:w-44  " src={'/assets/img/ict-tiktok.png'} alt="tiktok" />
          <img className="md:mx-10 lg:mx-10 sm:mx-10 xs:mt-5 mt-3 lg:w-203 md:w-28 sm:w-20 xs:w-44  " src={'/assets/img/ict-ig.png'} alt="instagram" />
        </div>
      </div>
      {/* ===================== Carousel ===================== */}
      <div className="lg:container lg:mx-auto mb-96 mt-28 lg:w-11/12">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg-no-repeat bg-cover w-full h-96 rounded-md flex justify-between items-center" style={{ backgroundImage: `url('/assets/img/banner.svg')` }}>
              <img src={'/assets/img/il-1.svg'} width="430" alt="il" />
              <div className="text-content text-center px-32">
                <h1 className="text-2xl text-bold text-white">Youtuber Kreator</h1>
                <h3 className="text-2xltext-medium text-white">Program persiapan menjadi youtuber, melakukan hal yg disenangi dan menjadi influecer</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
