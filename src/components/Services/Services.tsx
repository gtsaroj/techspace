import { ArrowRightCircleIcon } from "lucide-react";
import { ServicesData, ServiceTypes } from "../../Model/ServiceTypes";
import React from "react";
import { useNavigate } from "react-router-dom";

interface PropType {
  prop: ServiceTypes;
}

const ListOfServices: React.FC<PropType> = ({ prop }: PropType) => {
  const navigate = useNavigate();

  const HandleToRender = () => {
    navigate("/services");
  };

  return (
    <div
      className="grid grid-cols-4 gap-3 bg-white w-[320px] h-[85px] items-center px-2 shadow-lg rounded-md py-3"
      onClick={HandleToRender}
    >
      <div className="w-[70px] col-span-1 ">
        <img src={prop.image} alt="" className="rounded-md" />
      </div>
      <div className="flex  flex-col justify-center col-span-1 items-baseline w-[160px]">
        <h3 className="text-[16px]">{prop.title}</h3>
        <h3 className="text-sm text-[var(--dark-secondary-text)] ">
          {prop.completedProject}
        </h3>
      </div>
      <button className=" flex justify-end items-center hover:text-[var(--primary-green)]  tranistion-all duration-150 col-span-2">
        {" "}
        <ArrowRightCircleIcon />
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center py-10 pb-[100px] sm:px-32 px-5 gap-10  ">
      <div className="flex flex-col items-baseline gap-10">
        <div className="flex flex-col items-baseline flex-wrap min-w-[100px] max-w-[400px]">
          <h3 className="text-3xl ">What can i do for your needs</h3>
          <p className="">
            Our team is dedicated to understanding your needs & providing modern
            customized sulution as demand of our customers. weather you require
            a customize website, ecommerce website, or a complex web
            application, we are here to bring your digital vision into reality. select the plan & collabrate with us
            to bring your vision into reality.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-lg text-[var(--dark-background)] ">+6</span>
            <span className="text-sm text-[var(--dark-secondary-text)]">
              project completed
            </span>
          </div>
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-lg text-[var(--dark-background)] ">+6</span>
            <span className="text-sm text-[var(--dark-secondary-text)]">
              contract network
            </span>
          </div>
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-lg text-[var(--dark-background)] ">+6</span>
            <span className="text-sm text-[var(--dark-secondary-text)]">
              community network
            </span>
          </div>
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-lg text-[var(--dark-background)] ">
              1 year
            </span>
            <span className="text-sm text-[var(--dark-secondary-text)]">
              experience
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-5 ">
        {ServicesData?.map((SingleService) => (
          <ListOfServices prop={SingleService} key={SingleService.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
