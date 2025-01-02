// import Logo from "@/components/Logo";
import { LANDING_PAGE_STYLING } from "@/constants";
import {
  FaLocationDot,
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";
import WavyLine from "../WavyLine";

const Footer = () => {
  return (
    <div className="bg-background2 relative pb-24">
      <div className="absolute bottom-2 w-full">
        <WavyLine />
      </div>
      <div className="container">
        <div
          className={[
            "flex w-full h-full text-xs text-gray-600 text-left py-12",
            // `md:p-${LANDING_PAGE_STYLING.padding.md}`,
            `p-${LANDING_PAGE_STYLING.padding.md / 2}`,
            `mt-${LANDING_PAGE_STYLING.marginTop.sm}`,
            `md:mt-${LANDING_PAGE_STYLING.marginTop.md}`,
            `lg:mt-${LANDING_PAGE_STYLING.marginTop.sm}`,
          ].join(" ")}
        >
          <div className="w-1/4">
            <div className="flex flex-col">
              <div className="mb-2">
                <Logo />
              </div>
            </div>
            <div className="pr-12 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              architecto non ab possimus, explicabo veritatis a eos, pariatur
              doloremque ad quos earum adipisci fuga quis nihil mollitia
              provident cum magnam!
            </div>
          </div>
          <div className="w-3/4">
            <h5 className="lg:text-2xl text-xl font-bold pb-2 mb-4 fredoka-700 text-indigo-900">
              Quick Links
            </h5>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <ul>
                  <li className="list-none block py-2 my-2">About us</li>
                  <li className="list-none block py-2 my-2">Careers</li>
                  <li className="list-none block py-2 my-2">Blog</li>
                  <li className="list-none block py-2 my-2">Contact</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="list-none block py-2 my-2">Help Center</li>
                  <li className="list-none block py-2 my-2">FAQ</li>
                  <li className="list-none block py-2 my-2">Community Forum</li>
                  <li className="list-none block py-2 my-2">
                    Service Documentation
                  </li>
                  <li className="list-none block py-2 my-2">
                    Report a Problem
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaLocationDot className="mr-2 mt-2" />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur, veniam.
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <MdEmail className="mr-2" />
                  <span>panahi.projects@gmail.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhone size={12} className="mr-2 mt-1" />
                  <span>+98 935 788 2695</span>
                </div>
                <div className="flex flex-col mb-2 mt-4">
                  <span>Follow us on social media:</span>
                  <div className="flex">
                    <FaLinkedin size={20} className="mr-4 mt-2" />
                    <FaWhatsapp size={20} className="mr-4 mt-2" />
                    <FaXTwitter size={20} className="mr-4 mt-2" />
                    <FaFacebook size={20} className="mr-4 mt-2" />
                    <FaInstagram size={20} className="mr-4 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
