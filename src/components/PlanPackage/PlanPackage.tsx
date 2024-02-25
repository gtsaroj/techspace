import React from "react";
import { PlanPackages, PlanPackageTypes } from "../../Model/ServiceTypes";
import { BadgeCheck } from "lucide-react";

interface PropType {
  prop: PlanPackageTypes;
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
  return (
    <div className=" flex flex-col items-center sm:items-baseline gap-10 py-[100px] ">
      <h3 className="md:text-2xl text-lg">
        We've got a plan that's perfect for you
      </h3>
      <div  className="flex w-full items-center justify-center gap-10 flex-wrap">
        {PlanPackages?.map((SingleItem) => {
          return <PackageCard prop={SingleItem} key={SingleItem.id} />;
        })}
      </div>
    </div>
  );
};

export default PlanPackage;
