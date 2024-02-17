
import {ServerIcon} from "lucide-react";
import React from "react";


const Services : React.FC = () => {



  return (
    <div className="flex flex-col gap-[20px] px-[20px] py-[20px] bg-[#1B1F24]">
      <h3 className="text-[30px] text-white ">
        Simple pricing that scales with your business
      </h3>
      <span>Whether you’re an business in growth mode or a game studio</span>
      <div className="flex gap-[7px] md:flex-nowrap flex-wrap md:w-full justify-around">
      <div   
          className="flex flex-col gap-[15px] px-[10px] 
        rounded-md w-[350px]
        
         py-[20px] justify-center items-center bg-[#090909]"
        >
          <ServerIcon />
          <h3 className="flex gap-2 items-center text-white sm:text-[20px] text-[18px]">
            <span className="text-[35px] text-[#d3515b]">Basic</span>Small
            Business
          </h3>
          <h4 className="text-[20px] text-white">
            $ <span className="text-[#ffffff] text-[35px]">100</span>
          </h4>
          <button className="text-[white] bg-[black] py-[7px] px-[9px] rounded-md w-1/2">
            Buy Now
          </button>
          <button className="text-[white] bg-[black] py-[7px] px-[9px] rounded-md w-1/2">
            Learn More
          </button>
          <button className="text-[white] bg-[black] py-[7px] px-[9px] rounded-md w-1/2">
            Request A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
