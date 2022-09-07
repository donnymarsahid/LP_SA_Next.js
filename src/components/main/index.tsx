import React, { useRef } from "react";

import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Button } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "@redux/actions";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <div className="container mx-auto flex justify-between pt-20 " >
          <div className="w-2/4  flex items-center">
            <div className="content">
              <h1 className="text-4xl font-bold text-dark">Social Media Academy</h1>
              <h3 className="text-2xl font-medium text-dark mt-3">Berkarir Sebagai Konten Kreator
                <br /> Di Semua Platform.</h3>
              <p className="text-mute text-sm mt-35px">Teknologilah yang bisa memberikan dampak sosial terbesar
                di negara ini, bukan kebijakan atau policy.    - Nadiem Makarim</p>
              <div className="c-button mt-28px">
                <Button className="bg-primary mr-2 hover:bg-primary-dark text-white px-5 py-1 rounded border-2 border-primary duration-75">
                  Daftar Sekarang
                </Button>
                <Button className="px-5 py-1 rounded border-2 border-primary text-primary hover:bg-primary hover:text-white duration-75">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
          <Image src="/assets/img/bg-img.png" alt="nextjs" width="520" height="520" />
        </div>
      </div>
      {/* ===================== Platform Medsos ===================== */}
      <div className="container mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="font-bold text-2xl text-dark">Platform Media Sosial</h1>
        <div className="medsos flex mt-5" >
          <img className="mx-10" width={203} height={56.71} src={'/assets/img/ict-yt.png'} alt="youtube" />
          <img className="mx-10" width={214} height={60} src={'/assets/img/ict-fb.png'} alt="facebook" />
          <img className="mx-10" width={155} height={64} src={'/assets/img/ict-tiktok.png'} alt="tiktok" />
          <img className="mx-10" width={223} height={56.71} src={'/assets/img/ict-ig.png'} alt="instagram" />
        </div>
      </div>
      {/* ===================== Carousel ===================== */}
      <div className="container mx-auto mb-96 mt-28">
        <Swiper style={{
          "--swiper-pagination-color": "#fff"
        }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
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
          <SwiperSlide><div className="bg-no-repeat bg-cover w-full h-96 rounded-md" style={{ backgroundImage: `url('/assets/img/banner.svg')` }}></div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
