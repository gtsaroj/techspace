import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { ContactIcon, MessageCircle, LocateIcon } from "lucide-react";
import { ContactFormType } from "../../Model/ContactFormTypes";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ValidationContactForm = () => {
  const [ContactForm, setContactForm] = useState<ContactFormType>({
    email: "",
    phone: "",
    fullname: "",
    message: "",
  });

  const HandleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fields: string | number
  ) => {
    setContactForm({
      ...ContactForm,
      [fields]: event.target.value,
    });
  };
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (
      (ContactForm["email"] &&
        ContactForm["fullname"] &&
        ContactForm["message"] &&
        ContactForm["phone"]) === ""
    ) {
      return toast.error("All fields are required", {
        position: "top-center",
      });
    }

    if (form.current === null) {
      return toast.error("error", {
        position: "top-center",
      });
    }

    try {
      emailjs.sendForm("service_blgqfon", "template_lhqr2ae", form?.current, {
        publicKey: "sD-UiYCl_eZJRRZH8",
      });
      toast.success("we will contact soon", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(`connection error`, {
        position: "top-center",
      });
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      action=""
      className="flex flex-col gap-3 sm:px-5 w-full sm:w-[500px] "
    >
      <div className=" w-full flex items-center gap-1 justify-stretch">
        <div className="flex w-full flex-col items-start gap-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={ContactForm["email"]}
            onChange={(event) => HandleChange(event, "email")}
            className="w-full py-2 outline-none ring-1 rounded-md ring-[var(--dark-text)]"
            name="from_email"
          />
        </div>
        <div className="flex w-full  flex-col items-start gap-1">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            value={ContactForm["phone"]}
            onChange={(event) => HandleChange(event, "phone")}
            className=" w-full py-2 outline-none ring-1 rounded-md ring-[var(--dark-text)]"
            name="from_phone"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="">FullName</label>
        <input
          type="text"
          value={ContactForm["fullname"]}
          onChange={(event) => HandleChange(event, "fullname")}
          className=" w-full py-2 outline-none ring-1 rounded-md ring-[var(--dark-text)]"
          name="from_name"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="">Message</label>
        <textarea
          value={ContactForm["message"]}
          onChange={(event) => HandleChange(event, "message")}
          rows={5}
          cols={8}
          className=" w-full  py-2 outline-none ring-1 rounded-md ring-[var(--dark-text)]"
          name="from_message"
        />
      </div>
      <button
        type="submit"
        value={"Send"}
        className="  text-[var(--light-text)] hover:bg-[var(--primary-color)] duration-200 bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-bg)] w-full py-2 rounded-md"
      >
        submit
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex gap-10 sm:items-stretch justify-evenly py-5  sm:flex-row  flex-col-reverse items-center mx-3 ">
          <ValidationContactForm />
          <div className=" bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-bg)] flex flex-col items-start px-5   py-5 rounded-md gap-16 ">
            <div className="flex flex-col items-start">
              <h3 className="text-[var(--light-text)] text-[30px]">
                Contact Information
              </h3>
              <p className="text-[14px] text-[#e0d8d8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, quibusdam.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <div className="flex items-center gap-[2px] text-[var(--light-text)]">
                <ContactIcon className="sm:w-[25px] sm:h-[20px] w-[20px] h-[18px]" />
                <h3 className="sm:text-[16px] text-[14px]">+977-9825506216</h3>
              </div>
              <div className="flex gap-[2px] items-center text-[var(--light-text)]">
                <MessageCircle className="sm:w-[25px] sm:h-[20px] w-[20px] h-[18px]" />
                <h3 className="sm:text-[16px] text-[14px]">
                  sarojgt326@gmail.com
                </h3>
              </div>
              <div className="flex items-center gap-[2px] text-[var(--light-text)]">
                <LocateIcon className="sm:w-[25px] sm:h-[20px] w-[20px] h-[18px]" />
                <h3 className="sm:text-[16px] text-[14px]">
                  Jorpati,Kathmandu
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.844210113384!2d85.35953134228161!3d27.72560527497588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bbeb021a8c3%3A0xf5da322eefd636cd!2sJorpati%2C%2044600!5e0!3m2!1sen!2snp!4v1708963908967!5m2!1sen!2snp"
            className="w-full sm:h-[350px]  h-[200px] rounded-xl sm:px-28 px-10  py-5"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
