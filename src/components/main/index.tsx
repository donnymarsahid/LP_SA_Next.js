import React from "react";

import Image from "next/image";

import { Button } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "@redux/actions";
import { useRouter } from "next/router";

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
  // console.log(router.asPath, 'router');


  return (
    <div>
      <div className="w-full h-700px bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/img/bg-header.png')` }}>
        <div className="container mx-auto flex justify-between pt-20 " >
          <div className="w-2/4  flex items-center">
            <div className="content">
              <h1 className="text-4xl font-bold text-dark">Social Media Academy</h1>
              <h3 className="text-2xl font-medium text-dark">Berkarir Sebagai Konten Kreator
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
    </div>
  );
};
