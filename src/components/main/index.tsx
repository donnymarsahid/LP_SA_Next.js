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
    <div className="bg-background" style={{ backgroundColor: 'wheat' }}>
      <div className="w-full h-700px bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/img/bg-header.png')` }}>
        <div className="container mx-auto flex justify-between lg:w-11/12 pt-20" >
          <div className="flex items-center lg:p-0 md:w-96 sm:w-6/12  lg:w-6/12  md:pl-16 sm:pl-16">
            <div className="content">
              <h1 className="lg:text-4xl md:text-22px font-bold text-dark">Social Media Academy</h1>
              <h3 className="lg:text-2xl md:text-18px font-medium text-dark mt-3">Berkarir Sebagai Konten Kreator
                Di Semua Platform.</h3>
              <p className="text-mute lg:text-sm mt-35px md:text-12px sm:text-12px">Teknologilah yang bisa memberikan dampak sosial terbesar
                di negara ini, bukan kebijakan atau policy.    - Nadiem Makarim</p>
              <div className="c-button mt-28px md:flex ">
                <Button className="bg-primary mr-2 md:text-12px sm:text-12px lg:text-18px hover:bg-primary-dark text-white lg:px-5 md:px-3 sm:px-3 sm:mb-2 py-1 rounded border-2 border-primary duration-75">
                  Daftar Sekarang
                </Button>
                <Button className="lg:px-5 md:px-3 sm:mb-2 sm:px-3 py-1  md:text-12px sm:text-12px lg:text-18px rounded border-2 border-primary text-primary hover:bg-primary hover:text-white duration-75">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
          {/* <Image src="/assets/img/bg-img.png" alt="nextjs" width="520" height="520" /> */}
          <div className="content-image md:w-96 sm:w-6/12  lg:w-6/12 flex justify-between">
            <span></span>
            <div className="p-16">
              <img src={"/assets/img/bg-img.png"} className="w-full" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Platform Medsos ===================== */}
      <div className="container mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="font-bold text-2xl text-dark">Platform Media Sosial</h1>
        <div className="medsos flex mt-5" >
          {/* <img className="mx-10" width={203} height={56.71} src={'/assets/img/ict-yt.png'} alt="youtube" />
          <img className="mx-10" width={214} height={60} src={'/assets/img/ict-fb.png'} alt="facebook" />
          <img className="mx-10" width={155} height={64} src={'/assets/img/ict-tiktok.png'} alt="tiktok" />
          <img className="mx-10" width={223} height={56.71} src={'/assets/img/ict-ig.png'} alt="instagram" /> */}
        </div>
      </div>
      {/* ===================== Carousel ===================== */}
      <div className="container mx-auto mb-96 mt-28">
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
