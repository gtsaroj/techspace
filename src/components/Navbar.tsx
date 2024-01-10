import { navbar } from "./data.js";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="grid   gap-4 justify-between bg-[#1b1f24] items-center px-[10px] py-[2px] pb-[10px]"
      style={{
        gridTemplateColumns: "1fr 0.1fr 0.1fr",
      }}
    >
      <div>
        <img
          src="/photos/logo.png"
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>

      <div
        className="cursor-pointer sm:hidden"
        onClick={() => setChecked(!checked)}
      >
        <MenuIcon
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </div>
      {checked && (
        <nav
          className="flex flex-col gap-[20px] bg-[#5b97e0]  w-full duration-1000 ease-in-out py-[5px] text-[17px] 
          sm:hidden
          absolute right-0 transition-opacity delay-100 top-[55px]"
          style={{
            position: "absolute",
          }}
        >
          {navbar?.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className="  w-full hover:bg-[#181b1f] bg-[#1B1F24] text-white py-2 px-7"
            >
              {item.title}
            </a>
          ))}
        </nav>
      )}
      <nav className="sm:flex sm:gap-[70px] sm:mr-[10px] hidden">
        {navbar?.map((item) => (
          <a href={item.href} key={item.id} className="">
            {item.title}
          </a>
        ))}
      </nav>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Navbar;
