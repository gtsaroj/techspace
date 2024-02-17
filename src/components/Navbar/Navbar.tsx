import { navbar } from "../data.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex justify-between sm:px-10  px-[5px] py-2 items-center ">
      <div className="text-[var(--dark-text)] text-2xl transform scale-100">Techspace</div>
      <div className="md:hidden">
        <div className="relative flex items-center justify-center  w-[129px] h-8 cursor-pointer"
          onClick={() => setChecked(!checked)}>
    {checked ? <X/> : <Menu/>}
</div>
        <ul
          className={`  absolute gap-7 h-screen b-[0px] w-[129px] py-5 px-3 flex flex-col transition-all duration-100 ${
            checked ? "visible left-[0px]" : "invisible left-[-200px]"
          } bg-[var(--dark-foreground)] text-[var(--light-secondary-text)] top-[50px]`}
        >
          <h3 className="flex items-center  justify-center text-red-600 font-bold text-lg pb-2 border-b-[1px]">
            Techspace
          </h3>
          {navbar?.map((SingleNavbar) => (
            <li
              className="font-[400] text-lg relative group/navbar cursor-pointer "
              key={SingleNavbar.id}
            >
              <a href={SingleNavbar.href}></a>
              {SingleNavbar.title}
              <div className="bg-[var(--primary-color)] transition-all duration-150 w-[30px] h-[2px] translate-x-[-10px] group-hover/navbar:translate-x-[0px] group-hover/navbar:visible invisible   rounded-2xl absolute"></div>
            </li>
          ))}
        </ul>
      </div>

      <ul className=" hidden gap-10 py-3 px-3 md:flex ">
        {navbar?.map((SingleNavbar) => (
          <li
            className="font-[400] text-xl relative group/navbar cursor-pointer "
            key={SingleNavbar.id}
          >
            <a href={SingleNavbar.href}></a>
            {SingleNavbar.title}
            <div className="bg-[var(--primary-color)] transition-all duration-150 w-[30px] h-[2px] translate-x-[-10px] group-hover/navbar:translate-x-[0px] group-hover/navbar:visible invisible   rounded-2xl absolute"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
