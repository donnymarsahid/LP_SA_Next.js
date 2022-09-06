import React, { useEffect, useState } from "react";

import { Logo, Button } from "@components";
import { useRouter } from "next/router";

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
    <div className={`fixed top-0 left-0 right-0 ${scroll ? 'shadow-md bg-white' : ''}`}>
      <div className="container mx-auto p-4 lg:flex justify-between">
        <Logo />
        <div className="link-navbar lg:ml-10 flex items-center">
          <a href="/" className={`px-3 font-semi-bold ${router.asPath === "/" ? "text-primary" : "text-disabled"}`}>Beranda</a>
          <a href="/program" className={`px-3 font-semi-bold ${router.asPath === "/program" ? "text-primary" : "text-disabled"}`}>Program</a>
          <a href="/events" className={`px-3 font-semi-bold ${router.asPath === "/events" ? "text-primary" : "text-disabled"}`}>Events</a>
          <a href="/tentang" className={`px-3 font-semi-bold ${router.asPath === "/tentang" ? "text-primary" : "text-disabled"}`}>Tentang Kami</a>
        </div>
        <div className="button-navbar">
          <Button className="bg-primary mr-2 hover:bg-primary-dark text-white px-5 py-1 rounded border-2 border-primary duration-75">
            Masuk
          </Button>
          <Button className="px-5 py-1 rounded border-2 border-primary text-primary hover:bg-primary hover:text-white duration-75">
            Daftar
          </Button>
        </div>
      </div>
    </div>
  );
};
