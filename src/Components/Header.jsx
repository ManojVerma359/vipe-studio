import React from "react";
import nav_logo from "../assets/images/nav_logo.png";
import { useState, Dropdown } from "react";
import { Close, Global, Videotag } from "./Iconsvg";
import { Navicons } from "./Iconsvg";
import herosection from "../assets/images/herosection.png";
import star_img from "../assets/images/star_img.png";
const Header = () => {
  const [show, setShow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-xl:overflow-hidden");
  } else {
    document.body.classList.remove("max-xl:overflow-hidden");
  }
  const moment = () => {
    setShow(!true);
  };
  return (
    <>
      <div className="bg-black ">
        <nav className="px-3">
          <div className="container mx-auto flex xl:gap-12 gap-5  xl:justify-between max-xl:justify-between py-3  items-center   z-20 ">
            <div className="flex items-center gap-12">
              <img src={nav_logo} alt="header-logo" className=" z-30" />
              <ul
                className={`${
                  show ? "end-0" : "right-[-100%]"
                } flex flex-col z-[15]   min-h-screen xl:min-h-fit  fixed xl:static w-full xl:w-auto items-center justify-center top-0 :  bg-gray-500 xl:bg-[unset] xl:flex-row right-0 gap-12 ps-0 transition-all duration-400 ease-linear `}
              >
                <li>
                  <div className="">
                    <div className="dropdown inline-block relative">
                      <button className="bg-transprent text-white   rounded inline-flex items-center">
                        <span className="mr-0.5 font-bold ff_bgilroy 2xl:text-base text-[15px]">
                          WordPress Solution
                        </span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className="">
                          <a
                            className="rounded-t font-bold ff_bgilroy text-base bg-[#6022EA] text-white hover:bg-400 py-2 px-4 block whitespace-no-wrap"
                            href="#feactured"onClick={moment}
                          >
                            Featured
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="bg-[#6022EA] text-white font-bold ff_bgilroy text-base hover:bg-400 py-2 px-4 block whitespace-no-wrap"
                            href="#integer"onClick={moment}
                          >
                            Integer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="dropdown inline-block relative">
                      <button className="bg-transprent text-white font-semibold  rounded inline-flex items-center">
                        <span className="mr-0.5 font-bold ff_bgilroy 2xl:text-base text-[15px]">Services</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className="">
                          <a
                            className="rounded-t font-bold ff_bgilroy text-base bg-[#6022ea] text-white hover:bg-400 py-2 px-4 block whitespace-no-wrap"
                            href="#development"onClick={moment}
                          >
                          Development
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="font-bold ff_bgilroy text-base bg-[#6022ea] text-white hover:bg-400py-2 px-4 block whitespace-no-wrap"
                            href="#longterm"onClick={moment}
                          >
                            LongTerm
                          </a>
                        </li>
                     
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-white text-[21px] font-bold ff_poppins relative font-bold ff_bgilroy text-[15px] 2xl:text-base"
                    onClick={moment}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <div className="">
                    <div class="dropdown inline-block relative">
                      <button class="bg-transprent text-white font-semibold  rounded inline-flex items-center">
                        <span class="mr-0.5 font-bold ff_bgilroy 2xl:text-base text-[15px]">About</span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-[#6022ea] hover:bg-400 text-white py-2 px-4 block whitespace-no-wrap font-bold ff_bgilroy text-base"
                            href="#success"onClick={moment}
                          >
                           Success
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-[#6022ea] hover:bg-400 py-2 px-4 text-white block whitespace-no-wrap font-bold ff_bgilroy text-base"
                            href="#star"onClick={moment}
                          >
                            Star
                          </a>
                        </li>
                 
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-white text-[21px] font-bold ff_poppins relative font-bold ff_bgilroy 2xl:text-base text-[15px] "
                    onClick={moment}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <ul className="flex max-md:hidden block">
              <li className="flex items-center gap-12">
                <li className="">
                  <a
                    className="text-white text-[21px] font-bold ff_poppins relative font-bold ff_bgilroy text-[15px] 2xl:text-base"
                    href=""
                  >
                    1 888 266-6917 (eu?)
                  </a>
                </li>
                <li>
                  <button className="py-2 rounded-[80px] px-5 text-white bg-[#6022EA] hover:text-[#6022EA] hover:bg-white transition-all duration-300 ease-linear font-bold ff_bgilroy text-[15px] 2xl:text-base">
                    Contact Us
                  </button>
                </li>
                <li className="flex gap-2">
                  <Global />
                  <div className="">
                    <div className="dropdown inline-block relative">
                      <button className="bg-transprent text-white font-semibold  rounded inline-flex items-center">
                        <span className="mr-1 font-bold ff_bgilroy 2xl:text-base text-[15px]">Eng</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                      
                        <li className="">
                          <a
                            class="rounded-t bg-[#6022ea] hover:bg-400 text-white py-2 px-4 block whitespace-no-wrap font-bold ff_bgilroy text-base"
                            href="#"onClick={moment}
                          >
                           Hindi
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="bg-[#6022ea] text-white hover:bg-400 py-2 px-4 block whitespace-no-wrap font-bold ff_bgilroy text-base"
                            href="#"
                          >
                            English
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </li>
            </ul>

            <button
              className=" z-40 xl:hidden relative"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <div className="fill-[white]">
                  <Close />
                </div>
              ) : (
                <Navicons />
              )}
            </button>
          </div>
        </nav>

        <div className="container mx-auto sm:py-24 md:py-36 py-16 flex flex-wrap px-3">
          <div className="xl:w-[50%] w-[100%]">
            <h1 className="text-white md:text-[72px] sm:text-[60px] text-[38px] ff_use leading-[106%] font-light">
              WordPress <span className="md:flex md:block ff_use">Development</span>{" "}
              Agency
            </h1>
            <p className="font-bold text-white ff_bgilroy text-[24px] pt-[30px]">
              for Enterprise + Friendly Team{" "}
            </p>
            <p className="text-base font-light ff_rgilroy text-white opacity-70 pt-3">
              Vipe Studio is a WordPress Agency for development - a long-term
              partner for{" "}
              <span className="flex block text-base font-light ff_rgilroy opacity-70 ">
                any WordPress service. Websites and,online shops development,
                maintenance
              </span>{" "}
              and customization is what we do best.
            </p>
            <div className="pt-4 flex items-center sm:gap-9 gap-4">
              <button className="text-white font-semibold ff_sgilroy hover:text-[#6022EA] hover:bg-white transition-all duration-300 ease-linear text-[15px] sm:text-base bg-[#6022EA] sm:px-10 px-6 py-3 rounded-[80px]">
                Get Started
              </button>
              <div className="flex items-center sm:gap-3 gap-2">
                <Videotag />
                <p className="sm:text-base text-[15px] font-light ff_sgilroy text-white opacity-70">
                  What is Vipe? (1min)
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[50%] w-[100%] relative z-5 pt-5 xl:pt-0">
            <img className="w-[100%]" src={herosection} alt="#id" />
            <div className="absolute 2xl:top-[70%] xl:top-[60%] sm:top-[70%] top-[60%] left-[5%] md:w-[100%] w-[40%]  z-10">
              <img className="" src={star_img} alt="#id" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
