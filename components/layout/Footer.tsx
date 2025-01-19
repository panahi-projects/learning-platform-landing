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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <div className="bg-background2 relative pb-24">
      {/* Wavy Line Decoration */}
      <div className="absolute bottom-2 w-full">
        <WavyLine />
      </div>

      <div className="container px-4">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-between text-xs text-gray-600 text-left py-12 gap-8">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/3">
            <Logo />
            <div className="mt-4 pr-12 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              architecto non ab possimus, explicabo veritatis a eos, pariatur
              doloremque ad quos earum adipisci fuga quis nihil mollitia
              provident cum magnam!
            </div>
          </div>

          {/* Quick Links and Contact Info */}
          <div className="w-full lg:w-2/3">
            <div className="hidden lg:block">
              {/* Desktop View */}
              <h5 className="lg:text-2xl text-xl font-bold pb-2 mb-4 fredoka-700 text-indigo-900">
                Quick Links
              </h5>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {/* Column 1 */}
                <ul>
                  <li className="list-none block py-2 my-2">About us</li>
                  <li className="list-none block py-2 my-2">Careers</li>
                  <li className="list-none block py-2 my-2">Blog</li>
                  <li className="list-none block py-2 my-2">Contact</li>
                </ul>
                {/* Column 2 */}
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
                {/* Contact Info */}
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

            {/* Accordion for smaller screens */}
            <div className="block lg:hidden">
              <Accordion type="single" collapsible>
                <AccordionItem value="quick-links">
                  <AccordionTrigger>Quick Links</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid grid-cols-2 gap-4">
                      <li>About us</li>
                      <li>Careers</li>
                      <li>Blog</li>
                      <li>Contact</li>
                      <li>Help Center</li>
                      <li>FAQ</li>
                      <li>Community Forum</li>
                      <li>Service Documentation</li>
                      <li>Report a Problem</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact-info">
                  <AccordionTrigger>Contact Info</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center mb-4">
                      <FaLocationDot className="mr-2 mt-2" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur, veniam.
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
                    <div className="flex mt-4">
                      <FaLinkedin size={20} className="mr-4 mt-2" />
                      <FaWhatsapp size={20} className="mr-4 mt-2" />
                      <FaXTwitter size={20} className="mr-4 mt-2" />
                      <FaFacebook size={20} className="mr-4 mt-2" />
                      <FaInstagram size={20} className="mr-4 mt-2" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
