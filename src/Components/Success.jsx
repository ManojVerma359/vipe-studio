import React from "react";
import robot_img from "../assets/images/robot_img.png";
import success_img from "../assets/images/success_img.png";

const Success = () => {
  return (
    <div id="success" className="container mx-auto pt-36 xl:h-[920px] relative">
      <div className="flex flex-wrap items-center xl:justify-between  justify-center px-3 ">
        <div className="xl:w-[37%] lg:pt-0 pt-40 sm:pt-96 ">
          <img className="hover:scale-[102%] duration-400 transition-all ease-linear" src={robot_img} alt="#id" />
        </div>
        <div className="xl:w-[62%] w-[100%] xl:pt-0 pt-5">
          <p className="font-normal text-base ff_rgilroy ">
            HAVE YOU SEEN OUR MASCOT?
          </p>
          <h4 className="font-normal sm:text-[48px] text-[32px] ff_use">Success Guides </h4>
          <div className="gap-4 flex flex-wrap">
            <button className="text-base font-semibold ff_sgilroy hover:text-white text-[blue] border border-1 border-[blue]  hover:bg-[blue] py-[8px] px-[16px] rounded-[80px] transition-all duration-300 ease-linear">
              Category-1
            </button>
            <button className="text-base font-semibold ff_sgilroy hover:text-white text-[blue] border border-1 border-[blue]  hover:bg-[blue] py-[8px] px-[16px] rounded-[80px] transition-all duration-300 ease-linear">
              Category-2
            </button>
            <button className="text-base font-semibold ff_sgilroy hover:text-white text-[blue] border border-1 border-[blue]  hover:bg-[blue] py-[8px] px-[16px] rounded-[80px] transition-all duration-300 ease-linear">
              Category-3
            </button>
            <button className="text-base font-semibold ff_sgilroy hover:text-white text-[blue] border border-1 border-[blue]  hover:bg-[blue] py-[8px] px-[16px] rounded-[80px] transition-all duration-300 ease-linear">
              Category-4
            </button>
          </div>
          <div className="flex max-xl:flex-wrap pt-[35px] gap-5 lg:justify-between justify-center">
            <div className="border border-1 border-[rgba(0, 0, 0, 0.11)] rounded-[16px] duration-400 box_shadow transition-all ease-linear  flex flex-col p-[15px]">
              <img className="w-[100%] " src={success_img} alt="#id" />
              <p className="text-[24px] ff_sgilroy font-semibold">
                Sit diam metus
              </p>
              <p className="text-base font-normal ff_rgilroy">
                Arcu amet, consectetur vel{" "}
                <span className="text-base font-normal ff_rgilroy flex block">
                  pellentesque mattis ipsum sed
                </span>{" "}
                mattis sed.
              </p>
              <p className="text-base font-semibold ff_sgilroy text-[#6022EA]">
                Read More....
              </p>
            </div>
            <div className="border border-1 border-[rgba(0, 0, 0, 0.11)] rounded-[16px]  flex flex-col p-[15px] duration-400 box_shadow transition-all ease-linear ">
              <img className="w-[100%]" src={success_img} alt="#id" />
              <p className="text-[24px] ff_sgilroy font-semibold">
                Sit diam metus
              </p>
              <p className="text-base font-normal ff_rgilroy">
                Arcu amet, consectetur vel{" "}
                <span className="text-base font-normal ff_rgilroy flex block">
                  pellentesque mattis ipsum sed
                </span>{" "}
                mattis sed.
              </p>
              <p className="text-base font-semibold ff_sgilroy text-[#6022EA]">
                Read More....
              </p>
            </div>
            <div className="border border-1 border-[rgba(0, 0, 0, 0.11)] rounded-[16px]  flex flex-col p-[15px] duration-400 box_shadow transition-all ease-linear ">
              <img className="w-[100%]" src={success_img} alt="#id" />
              <p className="text-[24px] ff_sgilroy font-semibold">
                Sit diam metus
              </p>
              <p className="text-base font-normal ff_rgilroy">
                Arcu amet, consectetur vel{" "}
                <span className="text-base font-normal ff_rgilroy flex block">
                  pellentesque mattis ipsum sed
                </span>{" "}
                mattis sed.
              </p>
              <p className="text-base font-semibold ff_sgilroy text-[#6022EA]">
                Read More....
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_clr flex flex-wrap items-center justify-between sm:p-12 p-5 lg:mb-0 mb-8 rounded-[17px] lg:mt-28 mt-16 xl:z-10 xl:relative">
        <div>
          <p className="sm:text-[48px] text-[35px] font-normal ff_use text-white ">Have you</p>
          <p className="sm:text-[24px] text-[16px] text-white font-semibold ff_sgilroy">
            read our study about Speed and Performance in{" "}
            <span className="sm:text-[24px] text-[16px] text-white font-semibold ff_sgilroy sm:flex sm:block">
              WordPress?
            </span>
          </p>
        </div>
        <div className="lg:pt-0 pt-4">
          <button className="text-[19.1px] text-[#6022EA] ff_inter font-semibold bg-white px-[38px] py-[14px] rounded-[137px]  hover:shadow-2xl shadow-white transition-all duration-300 ease-linear border border-[#6022EA]">
            Check It Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
