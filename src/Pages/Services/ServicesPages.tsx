import React from "react";
import { Link } from "react-router-dom";

const TypesOfServices: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className=" flex  flex-col items-center justify-center ">
        <h3 className="text-[30px]">What type of services you need</h3>
        <p className="sm:text-[18px] text-[15px]  text-[var(--dark-text)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eius
          voluptate fuga quidem modi exercitationem voluptas. Quibusdam
          temporibus et culpa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 sm:px-4 px-7">
        <div
          id="StaticPage"
          className="flex sm:flex-row flex-col justify-evenly gap-4 items-start sm:items-center w-full "
        >
          <div className="max-w-[400px] min-w-[100px] flex flex-col gap-5">
            <h3 className="sm:text-[30px] text-[25px] ">Static Website</h3>
            <p className="text-[14px] text-[var(--dark-text)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab dignissimos consequuntur, eum esse iusto deserunt sunt? Nihil,
              officia illo?
            </p>
            <div className="flex gap-3">
              <a href={"#"}>
                {" "}
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a href={"#"}>
                {" "}
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="https://i.pinimg.com/564x/5d/3f/33/5d3f33d433ff278073cb626695d3cf68.jpg"
              alt=""
              className=" w-[325px] h-[225px]"
            />
          </div>
        </div>
        <div
          id="EcommercePage"
          className="flex  flex-col items-start sm:flex-row-reverse justify-evenly gap-4 sm:items-center w-full "
        >
          <div className="max-w-[400px] min-w-[100px] flex flex-col gap-5">
            <h3 className="sm:text-[30px] text-[25px] ">Ecommerce platform</h3>
            <p className="text-[14px] text-[var(--dark-text)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab dignissimos consequuntur, eum esse iusto deserunt sunt? Nihil,
              officia illo?
            </p>
            <div className="flex gap-3">
              <a href={"#"}>
                {" "}
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a href={"#"}>
                {" "}
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="https://i.pinimg.com/564x/5d/3f/33/5d3f33d433ff278073cb626695d3cf68.jpg"
              alt=""
              className=" w-[325px] h-[225px]"
            />
          </div>
        </div>
        <div
          id="FullStackPage"
          className="flex  sm:flex-row flex-col items-start justify-evenly gap-4 sm:items-center w-full "
        >
          <div className="max-w-[400px] min-w-[100px] flex flex-col gap-5">
            <h3 className="sm:text-[30px] text-[25px] ">
              Full stack development
            </h3>
            <p className="text-[14px] text-[var(--dark-text)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab dignissimos consequuntur, eum esse iusto deserunt sunt? Nihil,
              officia illo?
            </p>
            <div className="flex gap-3">
              <a href={"#"}>
                {" "}
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a href={"#"}>
                {" "}
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="https://i.pinimg.com/564x/5d/3f/33/5d3f33d433ff278073cb626695d3cf68.jpg"
              alt=""
              className=" w-[325px] h-[225px]"
            />
          </div>
        </div>
        <div
          id="SingleApplicationPage"
          className="flex flex-col items-start   sm:flex-row-reverse justify-evenly gap-4 sm:items-center w-full "
        >
          <div className="max-w-[400px] min-w-[100px] flex flex-col gap-5">
            <h3 className="sm:text-[30px] text-[25px] ">
              Single Page Application
            </h3>
            <p className="text-[14px] text-[var(--dark-text)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab dignissimos consequuntur, eum esse iusto deserunt sunt? Nihil,
              officia illo?
            </p>
            <div className="flex gap-3">
              <a href={"#"}>
                {" "}
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a href={"#"}>
                {" "}
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="https://i.pinimg.com/564x/5d/3f/33/5d3f33d433ff278073cb626695d3cf68.jpg"
              alt=""
              className=" w-[325px] h-[225px]"
            />
          </div>
        </div>
        <div
          id="CMSPage"
          className="flex  flex-col items-start sm:flex-row  justify-evenly gap-4 sm:items-center w-full "
        >
          <div className="max-w-[400px] min-w-[100px] flex flex-col gap-5">
            <h3 className="sm:text-[30px] text-[25px] ">CMS Development</h3>
            <p className="text-[14px] text-[var(--dark-text)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ab dignissimos consequuntur, eum esse iusto deserunt sunt? Nihil,
              officia illo?
            </p>
            <div className="flex gap-3">
              <a href={"#"}>
                {" "}
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a href={"#"}>
                {" "}
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="https://i.pinimg.com/564x/5d/3f/33/5d3f33d433ff278073cb626695d3cf68.jpg"
              alt=""
              className=" w-[325px] h-[225px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesPages: React.FC = () => {
  return (
    <div className="w-full flex flex-col  gap-4 pb-52">
      <div className=' w-full flex flex-col gap-16 justify-center  items-stretch sm:pl-10 px-3 bg-[var(--primary-bg)] bg-[url("/photos/622.png")] bg-no-repeat bg-contain bg-right sm:h-[70vh] h-[50vh]'>
        <div className="w-full">
          <h3 className="text-[var(--light-text)] text-4xl">
            Web Development Services <span></span>
          </h3>
          <h3 className="text-[var(--light-text)]">
            We provide Web development services
          </h3>
        </div>
        <div className="flex sm:gap-3 gap-2 w-full justify-center items-center">
          <a href={"#"}>
            {" "}
            <button className=" px-2 text-[var(--light-background)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
              Request development services
            </button>
          </a>
       
            <Link
              to={"/services/cost"}
              className="px-2   text-[var(--light-background)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]"
            >
              Calculate my project cost
            </Link>
       
        </div>
      </div>
      <TypesOfServices />
    </div>
  );
};
