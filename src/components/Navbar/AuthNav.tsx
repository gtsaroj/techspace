import React from "react";
import {
  MessageCircleCodeIcon,
  PhoneCallIcon,
  Facebook,
  XIcon,
  LinkedinIcon,
} from "lucide-react";
import Navbar, { Suscribe } from "./Navbar";

const AuthNav: React.FC = () => {
  const [IsSticky, setIsSticky ] = React.useState<boolean>(false)

  React.useEffect(() => {
    const scrollation = () => {
      if (window.scrollY > 0) {
        setIsSticky(!IsSticky)
      }
      else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", scrollation)

    return () => {
       window.removeEventListener("scroll", scrollation)
     }
  }, [])





  return (
    <div className="relative flex flex-col items-center">
      <div className={`flex ${IsSticky ? "opacity-0 duration-150 transition-all   translate-y-[-100px]" : "opacity-[1]  translate-y-[0px]  "} duration-150 transition-all  w-full gap-3 items-start justify-between px-5 bg-[var(--dark-background)] py-1`}>
        <div className="flex gap-1">
          <div className="flex items-center justify-center gap-[0px]">
            <MessageCircleCodeIcon className=" w-8 h-5 text-[var(--light-text)]" />
            <p className="text-[14px] text-[var(--light-text)] ">sarojgt326@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-[0px]">
            <PhoneCallIcon className=" w-8 h-5 text-[var(--light-text)]" />
            <p className=" text-[14px] text-[var(--light-text)] ">+977-9825506216</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Facebook className="text-[var(--light-text)]" />
          <XIcon className=" w-8 h-5 text-[var(--light-text)]" />
          <LinkedinIcon className=" w-8 h-5 text-[var(--light-text)]" />
        </div>
      </div>
      <div className={`  flex   justify-between  px-2 transition-all duration-150 ${IsSticky ? "fixed shadow-xl top-[0px]" : "sticky top-[25px]"}  z-[+1]    w-full   justify-center items-center bg-slate-100`}>
        <Navbar />
        <Suscribe/>
      </div>
    </div>
  );
};

export default AuthNav;
