import React from "react";
import footer_logo from "../assets/images/nav_logo.png";
import {
  Sreachbt1,
  FooterIcon,
  CallIcon,
  MessageIcon,
  HomeIcon,
  CatIcon,
  Linkdin,
  Twitter,
  Facebook,
  Instagram,
  Wikipedia,
} from "./Iconsvg";

const Footer = () => {
  return (
    <div className="bg-black xl:pt-[140.92px] md:pt-[80px] pt-[60px] z-2 relative">
      <div className="container mx-auto  px-3 pb-[71px]">
        <div className="flex items-center flex-wrap justify-between mb-[47.41px]">
          <div className="mb-6 sm:mb-0">
            <img src={footer_logo} alt="Footer-logo" className="w-[176px]" />
          </div>
          <div className="flex items-center justify-between rounded-[80px] bg-white max-w-[381px] w-full pt-[10px] pb-[9px] ps-[21px] pe-[24px]">
            <input
              type="text"
              placeholder="Search here...."
              className="bg-transparent ff_rgilroy font-normal outline-none"
            />
            <Sreachbt1 />
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="w-full sm:w-[50%] lg:w-[25%] mb-6 lg:mb-0">
            <ul className="flex flex-col gap-[13px]">
              <li className="ff-gilroy-regular leading-[150%]  text-white">
                Services
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  WordPress Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  WooCommerce Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  WordPress Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  Speed Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  Dedicated WordPress Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  Headless WordPress Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  White Label Development
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-[50%] lg:w-[25%] mb-6 lg:mb-0">
            <ul className="flex flex-col gap-[13px]">
              <li className="ff-gilroy-regular leading-[150%]  text-white">
                Services
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  WordPress Hosting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  PSD, XD, Figma to WordPress Conversion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  Custom WordPress Theme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  Custom WordPress Plugins
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  CMS to WordPress
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <FooterIcon />
                  WordPress Malware Removal
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-[50%] lg:w-[20%] mb-6 lg:mb-0">
            <ul className="flex flex-col gap-[21px]">
              <li className="ff_rgilroy leading-[150%]  text-white">
                Latest Articles
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  7 WordPress Plugins to Create an Effective Newsletter
                  03.01.2022
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  What’s the Perfect Blog Post Length for Your WordPress Site’s
                  SEO? 02.01.2022
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  5 Reasons the Future of WordPress Is Headless 01.01.2022
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                  Amazingly Successful 2021 30.12.2021
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-full sm:w-[50%] lg:w-[25%] flex sm:justify-end">
            <ul className="flex flex-col gap-5">
              <li className="ff_rgilroy leading-[150%]  text-white">Contact</li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <CallIcon />
                  EU: +359 988 993 128
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <CallIcon />
                  US: +1 (1 888) 266-6917
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <MessageIcon />
                  office@vipestudio.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white ff_rgilroy text-[14px] leading-[normal]"
                >
                  <HomeIcon />
                  14 Srebarna, Sofia 1407, Bulgaria
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex items-center flex-wrap  justify-between pt-[31px] pb-[36.08px] px-3">
        <div className="mb-6 sm:mb-0">
          <p className="text-white ff_rgilroy font-normal">
            © Vipe Studio 2016-2022
          </p>
          <div className="text-white flex  gap-[14px]">
            <span className="relative after:absolute after:w-[1px] after:h-[14px] after:bg-white after:end-[-15%] after:top-[25%] ff_rgilroy font-normal">
              Privacy
            </span>
            <span className="relative after:absolute after:w-[1px] after:h-[14px] after:bg-white after:end-[-15%] after:top-[25%] ff_rgilroy font-normal">
              Careers
            </span>
            <span className="relative after:absolute after:w-[1px] after:h-[14px] after:bg-white after:end-[-15%] after:top-[25%] ff_rgilroy font-normal">
              Media
            </span>
            <span>Client Area</span>
          </div>
        </div>
        <div className="flex flex-wrap   gap-[17px]">
         <span className="hover:scale-125 cursor-pointer duration-300"> <CatIcon /></span>
          <span className="hover:scale-125 cursor-pointer duration-500"><Linkdin /></span>
          <span className="hover:scale-125 cursor-pointer duration-700" ><Twitter /></span>
         <span className="hover:scale-125 cursor-pointer duration-1000"> <Facebook /></span>
          <span className="hover:scale-125 cursor-pointer duration-300" ><Instagram /></span>
         <span className="hover:scale-125 cursor-pointer duration-500"> <Wikipedia /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
