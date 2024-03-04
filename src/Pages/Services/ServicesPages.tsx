import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const TypesOfServices: React.FC = () => {
  
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10">
      <div className=" flex  flex-col items-center justify-center ">
        <h3 className="text-[30px]">What type of services you need</h3>
        <p className="sm:text-[18px] text-[15px]  text-[var(--dark-text)]">
        We provide seamless user experience & provide modern customized solution to our costumers.Here are features we provided to our customers.
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
              Our team specializes in creafting modern website that meet your
              specific needs. we proiritize of user experience, ufnctionality, &
              modern UI to ensure yuor online present in modern stand out.
            </p>
            <div className="flex gap-3">
              <a onClick={()=>navigate("/contact")}>
              
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a onClick={()=>navigate("/services/cost")}>
                {" "}
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="../../../photos/static.png"
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
              Out team assist to our customer to transform your online store
              with our robust ecommerce solution. we provide fast performance &
              reliable product management & scure payment processing to
              empowering your business in digital world
            </p>
            <div className="flex gap-3">
            <a onClick={()=>navigate("/contact")}>
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a onClick={()=>navigate("/services/cost")}>
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[200px]">
            <img
              src="../../../photos/ecommerce.png"
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
              Our team assist to unlock the ful potential of your projects ith
              oru comprehensive full stack development services. we provide from
              front-end iterface to backend functionality end-to-end solutions
              customized to our customer needs & we ensure to reliable, seamless
              user experience & robust performance of our customer web project.
            </p>
            <div className="flex gap-3">
            <a onClick={()=>navigate("/contact")}>
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a onClick={()=>navigate("/services/cost")}>
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
              Our team assist to web application into single web application
              which reduces the page reload & gives seamless performance & user
              experience.
            </p>
            <div className="flex gap-3">
            <a onClick={()=>navigate("/contact")}>
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a onClick={()=>navigate("/services/cost")}>
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="../../../photos/singlepage.png"
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
              Our team assist to empower your content management with our
              cutomized web solutions. we provide reliable simplified content
              management control & automatic updates to our customer website. we
              offer user friendly interface, filter content functionality, fast
              performance CMS.
            </p>
            <div className="flex gap-3">
            <a onClick={()=>navigate("/contact")}>
                <button className=" px-2 text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                  Request Quotes
                </button>
              </a>
              <a onClick={()=>navigate("/services/cost")}>
                <button className="px-2   text-[var(--dark-text)] sm:py-[7px] py-[4px] sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
                  Calculate my project cost
                </button>
              </a>{" "}
            </div>
          </div>
          <div className="w-[325px] h-[225px]">
            <img
              src="../../../photos/cms.png"
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
  const navigate = useNavigate()
  const [PreLoading, SetPreLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      SetPreLoading(false);
    }, 1000);
  }, [PreLoading]);
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div
        className={`w-full flex flex-col  gap-4 pb-52 ${
          PreLoading ? "blur-lg" : "blur-none"
        }`}
      >
        <div
          className={` w-full flex flex-col gap-16 justify-center  items-stretch sm:pl-10 px-3 bg-[var(--primary-bg)] bg-[url("/photos/622.png")] bg-no-repeat bg-contain bg-right sm:h-[70vh] h-[50vh]`}
        >
          <div className="w-full">
            <h3 className="text-[var(--light-text)] text-4xl">
              Web Development Services <span></span>
            </h3>
            <h3 className="text-[var(--light-text)]">
              We provide Web development services
            </h3>
          </div>
          <div className="flex sm:gap-3 gap-2 w-full justify-start items-center">
          <a onClick={()=>navigate("/contact")}>
              <button className=" px-2  text-[var(--light-background)] sm:py-[7px] py-2 sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
                Request  services
              </button>
            </a>

            <Link
              to={"/services/cost"}
              className="px-2  cursor-pointer text-[var(--light-background)] sm:py-[7px] py-2 sm:text-[16px] text-[14px] duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]"
            >
              Calculate my project cost
            </Link>
          </div>
        </div>
        <TypesOfServices />
      </div>
      <div
        className={`${
          PreLoading ? "absolute" : "hidden"
        }  w-full top-0 left-0 right-0 h-[100vh] flex flex-col justify-center bg-[#856d6d00]  items-center`}
      >
        <ReactLoading
          type="balls"
          className={`w-[40px] h-[30px] ${
            PreLoading ? "flex items-center justify-center" : "hidden"
          }`}
          color="var(--primary-color)"
        ></ReactLoading>
      </div>
    </div>
  );
};
