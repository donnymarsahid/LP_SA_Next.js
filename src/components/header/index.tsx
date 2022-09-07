import React, { useEffect, useState } from "react";

import { Logo, Button } from "@components";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"


export const Header: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const [activeRoute, setActiveRoute] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    _conditionScroll()
  }, []);

  const _conditionScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) setScroll(true);
      else setScroll(false);
    });
  }
  return (
    <div className={`z-10 fixed top-0 left-0 right-0 ${scroll ? 'shadow-md bg-white' : 'bg-background'}`}>
      <div className="lg:container lg:mx-auto p-4 flex justify-between">
        <Logo />
        <div className=" md:flex lg:flex hidden link-navbar lg:ml-10  items-center">
          <a href="/" className={`px-3 font-semi-bold ${router.asPath === "/" ? "text-primary" : "text-disabled"}`}>Beranda</a>
          <a href="/program" className={`px-3 font-semi-bold ${router.asPath === "/program" ? "text-primary" : "text-disabled"}`}>Program</a>
          <a href="/events" className={`px-3 font-semi-bold ${router.asPath === "/events" ? "text-primary" : "text-disabled"}`}>Events</a>
          <a href="/tentang" className={`px-3 font-semi-bold ${router.asPath === "/tentang" ? "text-primary" : "text-disabled"}`}>Tentang Kami</a>
        </div>
        <div className="button-navbar lg:block md:block sm:block hidden">
          <Button className="bg-primary  mr-2 hover:bg-primary-dark text-white px-3 md:px-5 py-1 rounded border-2 border-primary duration-75">
            Masuk
          </Button>
          <Button className="px-3 md:px-5 py-1 rounded border-2 border-primary text-primary hover:bg-primary hover:text-white duration-75">
            Daftar
          </Button>
        </div>
        <div className="mobile-display lg:hidden md:hidden sm:hidden block " >
          <FontAwesomeIcon icon={faBars} size="2x" className="text-primary" />
        </div>
      </div>
    </div>
  );
};
