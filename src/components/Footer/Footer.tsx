import { LinkedinIcon } from "lucide-react";

const FooterData = () => {
  return (
    <div className="flex w-full flex-wrap gap-8 sm:justify-evenly justify-start items-baseline ">
      <div className="flex flex-col gap-[7px] text-[var(--light-text)]">
        <h3 className="text-lg">Social</h3>
        <div className="flex flex-col">
          <a href="#">facebook</a>
          <a href="#">Github</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Dribble</a>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] text-[var(--light-text)]">
        <h3 className="text-lg">Services</h3>
        <div className="flex flex-col">
          <a href="#">Website Design</a>
          <a href="#">Full stack development</a>
          <a href="#">Ecommerce development</a>
          <a href="#">Web application security</a>
          <a href="#">SEO optimization</a>
          <a href="#">Web analytic & Tracking</a>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] text-[var(--light-text)] ">
        <h3 className="text-lg">Company</h3>
        <div className="flex flex-col">
          <a href="#">about us</a>
          <a href="#">our works</a>
          <a href="#">blog</a>
          <a href="#">testiminol</a>
          <a href="#">Request a quote</a>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] text-[var(--light-text)]">
        <h3 className="text-lg">payment</h3>
        <div className="flex flex-col">
          <a href="#">Esewa</a>
          <a href="#">Khalti</a>
          <a href="#">Ime Pay</a>
          <a href="#">NIC Asia</a>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="flex relative flex-col items-baseline gap-[10px] bg-[var(--dark-background)] px-10 py-24 sm:py-16 ">
      <h3 className="text-2xl text-[var(--light-text)] ">Techspace</h3>
      <div className="w-full">
        <FooterData />
      </div>
      <div className="absolute  w-full sm:top-[-15%] top-[-8%] left-0 flex items-center justify-center">
      <div className="  min-w-[300px] max-w-[800px] items-center  rounded-md flex md:flex-row flex-col   md:justify-evenly justify-center md:gap-7 gap-[3px] py-5 sm:py-10 px-[10px]  bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-bg)]">
        <span className="md:text-xl text-[18px] text-[var(--light-secondary-text)]">
          Join us today for exclusive member discount
        </span>
        <form action="">
          <input
            type="email"
            placeholder="email"
            className="py-[4px] px-[7px] outline-none rounded-tl-md rounded-bl-md" 
          />
          <button className="bg-[var(--dark-background)] rounded-tr-md rounded-br-md py-[5px] text-[var(--light-text)] px-3 ">suscribe</button>
        </form>
      </div>
</div>
    </div>
  );
};


