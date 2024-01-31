
import ArrowForward from "@mui/icons-material/ArrowForward";

const Ability = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-[7px] justify-evenly sm:p-[50px] mt-[-19px] sm:mt-[0px] bg-[#171718] pt-[30px]">
      <div className=" flex flex-col gap-[30px] justify-start p-[10px]  sm:w-1/2">
        <h3 className="sm:text-[40px] font-mono text-white text-[25px] sm:w-[300px]">
          What Can I do for Your Needs
        </h3>
        <span className="text-[14px] font-mono text-[#9b9da0] sm:w-[450px] w-full ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          magnam, iusto mollitia alias amet consequuntur iure veniam.
          Consequuntur, incidunt voluptatum.
        </span>
        <div className=" flex gap-[20px] items-center justify-center sm:justify-start">
          <div className="flex flex-col gap-[20px] items-center justify-center">
            <div className="flex flex-col   font-bold text-[#FFFF00]">
              +20
              <span className="text-[#8b8888] ">project completed</span>
            </div>
            <div className="flex flex-col  font-bold  text-[#FFFF00]">
              100 +<span className="text-[#8b8888]"> community network</span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]  items-center justify-center">
            <div className="flex flex-col   font-bold items-center justify-center text-[#FFFF00]">
              100 +<span className="text-[#8b8888]">contract network</span>
            </div>
            <div className="flex flex-col  font-bold  items-center justify-center text-[#FFFF00]">
              1 years
              <span className="text-[#8b8888]">experience</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-[30px] bg-[#111111] py-4 pr-[100px] pl-[30px]  cursor-pointer rounded-md ">
          <img
            className="w-[70px] h-[50px] sm:w-[100px]  sm:h-[100px] rounded-sm"
            src="/photos/project.png"
            alt=""
          />
          <div>
            <h3 className="sm:text-[20px] text-[16px]  text-white">
              UI/Ux Design
            </h3>
            <h4 className="text-[#aaa6a6]">117 project</h4>
          </div>
          <ArrowForward className="w-1/3 text-[#FFFF00]   hover:translate-x-1 cursor-pointer transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Ability;
