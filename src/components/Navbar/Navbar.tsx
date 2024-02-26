import { navbar } from "../data.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const RenderToNextPage = (id: number) => {
    const pathUrl = navbar.find((object) => object.id === id);
    console.log(pathUrl?.path);
    try {
      navigate(`${pathUrl?.path}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex   justify-start sm:justify-between sm:px-10  sm:gap-20 gap-0  px-[5px] py-2 items-center ">
      <div className="text-[var(--dark-text)] w-[50px]  text-2xl">
        <img
          src="https://res.cloudinary.com/dhnvpzxt6/image/upload/v1708875424/techspacelogo_ewufvo.png"
          alt=""
          className="h-[50px] scale-[1.3]"
        />
      </div>

      <div className="md:hidden">
      <div
        className="relative flex items-center justify-center  w-[60px] scale-[1.4] h-8 cursor-pointer"
        onClick={() => setChecked(!checked)}
      >
        {checked ? <X /> : <Menu />}
      </div>
      <ul
        className={`  absolute gap-7 h-screen b-[0px] w-[129px] py-5 px-3 flex flex-col transition-all duration-100 ${
          checked ? "visible left-[0px]" : "invisible left-[-200px]"
        } bg-[var(--dark-foreground)] text-[var(--light-secondary-text)] top-[66px]`}
      >
        <h3 className="flex items-center  justify-center text-red-600 font-bold text-lg pb-2 border-b-[1px]">
          Techspace
        </h3>
        {navbar?.map((SingleNavbar) => (
          <li
            className="font-[400] text-lg relative group/navbar cursor-pointer "
            key={SingleNavbar.id}
            onClick={() => RenderToNextPage(SingleNavbar.id)}
          >
            <a> {SingleNavbar.title}</a>

            <div className="bg-[var(--primary-color)] transition-all duration-150 w-[30px] h-[2px] translate-x-[-10px] group-hover/navbar:translate-x-[0px] group-hover/navbar:visible invisible   rounded-2xl absolute"></div>
          </li>
        ))}
      </ul>
    </div>
      <ul className=" hidden gap-10 py-3 px-3 md:flex ">
        {navbar?.map((SingleNavbar) => (
          <li
            className={`font-[400]   text-xl relative group/navbar cursor-pointer `}
            key={SingleNavbar.id}
            onClick={() => RenderToNextPage(SingleNavbar.id)}
          >
            <a className={` `}>{SingleNavbar.title}</a>

            <div
              className={`bg-[var(--primary-color)] transition-all duration-150 w-[30px] h-[2px] translate-x-[-10px] group-hover/navbar:translate-x-[0px] group-focus/navbar:translate-x-[0px] group-focus/navbar:visible group-hover/navbar:visible invisible rounded-2xl absolute`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

export const Suscribe = () => {
  const ScrollTOSuscribe = () => {
    const Suscribe1 = document.querySelector("#Suscribe");

    Suscribe1?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={ScrollTOSuscribe}
      className="py-2  ring-black px-7 text-[var(--light-text)]  rounded-md bg-[var(--primary-color)] duration-150 hover:bg-[var(--primary-bg)] "
    >
      Suscribe
    </button>
  );
};

