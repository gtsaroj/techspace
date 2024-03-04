import React from "react";
import { PlanPackages, PlanPackageTypes } from "../../Model/ServiceTypes";
import { BadgeCheck } from "lucide-react";
import "./PlanPackage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

interface SingleItemType {
  SingleItem: PlanPackageTypes;
}
const whatpshappLink = "https://api.whatsapp.com/send?phone=+977-9848255044"


const PackageCard: React.FC<PropType> = ({ prop }: PropType) => {
  return (
    <div  className=" w-[300px] px-5  rounded-2xl  bg-white flex flex-col items-center gap-3 border-[1px] border-[var(--dark-secondary-text)] transform hover:scale-[1.1] transition-all duration-400">
      <h3 className="text-xl">{prop.plan}</h3>
      <h3 className="text-[15px] font-semibold">
        Rs {prop.PackagePrice}
        <span></span>
      </h3>
      <p className="text-sm text-[var(--dark-secondary-text)]">
        Basic Features upto {prop.totalPage} pages
      </p>
      <a  className="w-full" href={`${whatpshappLink}&text=${encodeURIComponent(`Welcome to techspace \n You have selected ${prop.plan} package \n can you provide what type of project you wanna build?`)}` } target='_blank'>
      <button className="w-full bg-[var(--dark-background)] duration-150  text-[var(--light-text)] hover:bg-[var(--primary-green)] py-[5px] px-[10px]  rounded-md">
        Get Started
      </button></a>

      <a  className="w-full " href={whatpshappLink}>
      <button className="w-full bg-[(--light-background)] border-[1px] border-[var(--dark-secondary-text)] py-[5px] px-[10px]  rounded-md">
        Chat To sales
      </button>  
</a>
      <div>
        <h3 className="text-lg font-semibold">Features</h3>
        <p className="text-sm text-[var(--dark-secondary-text)]">
          Everything in our free plan plus
        </p>
        <div className="flex flex-col gap-1 py-1">
          {prop?.features.map((feature: string) => (
            <div className="flex gap-1 justify-start ">
              <BadgeCheck />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const PlanPackage: React.FC = () => {
  const whatpshappLink = "https://api.whatsapp.com/send?phone=+977-9848255044";
  return (
    <div className=" flex flex-col items-center sm:items-baseline gap-10 py-[100px] ">
      <h3 className="md:text-2xl text-lg">
        We've got a plan that's perfect for you
      </h3>
      <div className=" w-[300px] sm:w-ful   gap-9 flex flex-col items-center justify-center">
      <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
   
        className="sm:hidden mx-4  z-[1] flex w-[270px] px-0 items-center justify-center"
      >
        {PlanPackages?.map((SingleItem) => (
             <SwiperSlide className="w-full  right-1 z-[1]  px-5  rounded-2xl  bg-white flex flex-col items-center gap-3 border-[1px] border-[var(--dark-secondary-text)] transition-all duration-400">
             <h3 className="text-xl">{SingleItem.plan}</h3>
             <h3 className="text-[15px] font-semibold">
               Rs {SingleItem.PackagePrice}
               <span></span>
             </h3>
             <p className="text-sm text-[var(--dark-secondary-text)]">
               Basic Features upto {SingleItem.totalPage} pages
             </p>
             <a
               className="w-full"
               href={`${whatpshappLink}&text=${encodeURIComponent(
                 `Welcome to techspace \n You have selected ${SingleItem.plan} package \n can you provide what type of project you wanna build?`
               )}`}
               target="_blank"
             >
               <button className="w-full bg-[var(--dark-background)] duration-150  text-[var(--light-text)] hover:bg-[var(--primary-green)] py-[5px] px-[10px]  rounded-md">
                 Get Started
               </button>
             </a>
       
             <a className="w-full " href={whatpshappLink}>
               <button className="w-full bg-[(--light-background)] border-[1px] border-[var(--dark-secondary-text)] py-[5px] px-[10px]  rounded-md">
                 Chat To sales
               </button>
             </a>
             <div>
               <h3 className="text-lg font-semibold">Features</h3>
               <p className="text-sm text-[var(--dark-secondary-text)]">
                 Everything in our free plan plus
               </p>
               <div className="flex flex-col gap-1 py-1">
                 {SingleItem?.features.map((feature: string) => (
                   <div className="flex gap-1 justify-start ">
                     <BadgeCheck />
                     <span className="text-[15px] sm:text-[17px]">{feature}</span>
                   </div>
                 ))}
               </div>
             </div>
           </SwiperSlide> 
        ))}
        </Swiper>
        <div  className=" hidden sm:flex w-full items-center justify-center gap-10 flex-wrap">
        {PlanPackages?.map((SingleItem) => {
          return <PackageCard prop={SingleItem} key={SingleItem.id} />;
        })}
      </div>

      </div>
    </div>
  );
};

export default PlanPackage;
