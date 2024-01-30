import { navbar } from "./data.js";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="grid   gap-4  text-[white] justify-between bg-[#1b1f24] items-center px-[10px] py-[2px] pb-[10px]"
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
        className="cursor-pointer sm:hidden relative"
        onClick={() => setChecked(!checked)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/hqymfzvj.json"
          trigger="click"
        />
      </div>
      <nav
        className={`sm:flex sm:flex-row sm:gap-[70px] sm:mr-[10px] sm:visible absolute sm:sticky flex-col  w-full transition-all duration-100 ${
          checked
            ? "  bg-[#181616] top-[50px]  flex flex-col "
            : "  top-[-200px]"
        }`}
      >
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
