
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {

  return (
    <div className="flex sm:flex-row  items-center sm:bg-[url('/photos/profile02.png')]  flex-col gap-[30px] sm:gap-[20px]  bg-contain bg-no-repeat bg-[#1b1f24] sm:bg-center  sm:justify-between px-[20px]  sm:py-[50px] sm:items-center"
    >
      <img className="w-[200px] h-[200px] sm:hidden" src="/photos/rounded01.png" alt="" />
      <div className="sm:w-full">
        <h4 className="sm:text-[25px] md:text-[40px]  text-white  text-[25px]">
          Hi There <br /> <span className="text-[20px] font-sans">I'm here Saroj GT</span>
        </h4>
        <div className="text-white">I am into web developer</div>

        <div></div>
      </div>
      <div className="flex flex-col items-end w-full    ">
        <div className="md:w-80 sm:w-60  ">
          <h3 className="text-[white] sm:text-[13px] md:text-[15px]  text-[12px] font-semibold">
            ABOUT ME
          </h3>
          <span className="md:text-[15px] sm:text-[12px] text-[#807f7f] text-[12px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            perspiciatis accusantium sunt dolorum. Sint nam dolorem id
            necessitatibus, mollitia ab.
          </span>
        </div>
        <div className="md:w-80 sm:w-60   mb-[30px]">
          <h3 className="text-[white] sm:text-[13px] md:text-[15px]  text-[12px] font-semibold">
            works
          </h3>
          <span className="md:text-[15px] sm:text-[12px] text-[#807f7f] text-[12px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            perspiciatis accusantium sunt dolorum. Sint nam dolorem id
            necessitatibus, mollitia ab.
          </span>
        </div>
        <div>
          <div className="flex gap-[20px] justify-center items-center">
            <a href="" className="py-[7px] px-[10px] bg-[#e05959]" >
              <FacebookIcon className=" hover:text-[yellow]" />
            </a>
            <a href="" className="py-[7px] px-[10px] bg-[#e05959]">
              <InstagramIcon className="text-[10px] hover:text-[yellow]" />
            </a>
            <a href="" className="py-[7px] px-[10px] bg-[#e05959]">
              <GitHubIcon className="size-10 hover:text-[yellow]" />
            </a>
            <a href="" className="py-[7px] px-[10px] bg-[#e05959]">
              <LinkedInIcon className="text-[10px] hover:text-[yellow]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
