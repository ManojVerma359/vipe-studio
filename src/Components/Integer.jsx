import React from "react";
import { Game, Man, People } from "./Iconsvg";

const Integer = () => {
  return (
    <div>
      <div id="integer" className="container mx-auto pt-24 pb-28 px-3">
        <p className="sm:text-[48px] text-[32px] text-center sm:text-start font-light ff_use ">Integer et nisl non</p>

        <div className="flex flex-wrap xl:justify-between justify-center gap-10">
          <div className="pt-14 xl:w-[31%] md:w-[46%] ">
            <div className="max-w-[100%] border border-1 rounded-[16px] flex flex-col items-center ps-10 pr-10 pb-10 pt-14 duration-400 box_shadow transition-all ease-linear hover:border-0">
              <People />
              <p className="lg:text-[24px] text-[20px] font-semibold ff_inter flex flex-col items-center pt-10">
                Enterprise WordPress{" "}
                <span className="lg:text-[24px] text-[20px] font-semibold ff_inter flex block">
                  Solutions
                </span>{" "}
              </p>
              <p className="sm:text-base text-[12px] font-light ff_rgilroy flex flex-col items-center pt-3">
                Pretium, a et sapien non nunc libero. Id dolor{" "}
                <span className="sm:text-base text-[12px] font-light ff_rgilroy md:flex md:block">
                  sed quis convallis turpis purus feugiat nibh eu.
                </span>{" "}
                Auctor cras hac ac, sociis diam montes, turpis{" "}
                <span className="sm:text-base text-[12px] font-light ff_rgilroy md:flex md:block">
            commodo elit.
                </span>
              </p>
              <p className="sm:text-base text-[12px] font-semibold ff_sgilroy text-[#6022EA] pt-4">
                Learn More
              </p>
            </div>
          </div>
          <div className="md:pt-14 pt-5 xl:w-[31%] md:w-[46%]">
            <div className="max-w-[100%] border border-1 rounded-[16px] flex flex-col items-center ps-10 pr-10 pb-10 pt-14 duration-400 box_shadow transition-all ease-linear hover:border-0">
              <Game />
              <p className="lg:text-[24px] text-[20px] font-semibold ff_inter flex flex-col items-center pt-10">
              Small  Size Business 		{" "}
                <span className="lg:text-[24px] text-[20px] font-semibold ff_inter flex block">
                Development
                </span>{" "}
              </p>  
              <p className="sm:text-base text-[12px] font-light ff_rgilroy flex flex-col items-center pt-3">
                Pretium, a et sapien non nunc libero. Id dolor{" "}
                <span className="sm:text-base text-[12px] font-light ff_rgilroy md:flex md:block">
                  sed quis convallis turpis purus feugiat nibh eu.
                </span>{" "}
                Auctor cras hac ac, sociis diam montes, turpis{" "}
                <span className="sm:text-base text-[12px] font-light ff_rgilroy md:flex md:block">
            commodo elit.
                </span>
              </p>
              <p className="sm:text-base text-[12px] font-semibold ff_sgilroy text-[#6022EA] pt-4">
                Learn More
              </p>
            </div>
          </div>
          <div className="xl:pt-14 pt-5 xl:w-[31%] md:w-[46%]">
            <div className=" max-w-[100%] border border-1 rounded-[16px] flex flex-col items-center ps-10 pr-10 pb-10 pt-14 duration-400 box_shadow transition-all ease-linear hover:border-0">
              <Man />
              <p className="lg:text-[24px] text-[20px] font-semibold ff_inter flex flex-col items-center pt-10">
              Support & Maintenance	{" "}
                <span className="lg:text-[24px] text-[20px] font-semibold ff_inter lg:flex lg:block">
                  Solutions
                </span>{" "}
              </p>
              <p className="sm:text-base text-[12px] font-light ff_rgilroy flex flex-col items-center pt-3">
                Pretium, a et sapien non nunc libero. Id dolor{" "}
                <span className="sm:text-base text-[12px] font-light ff_rgilroy lg:flex lg:block">
                  sed quis convallis turpis purus feugiat nibh eu.
                </span>{" "}
                Auctor cras hac ac, sociis diam montes, turpis{" "}
                <span className="sm:text-base text-[12px] font-light ff_rgilroy sm:flex sm:block">
                  commodo elit.
                </span>
              </p>
              <p className="text-base font-semibold ff_sgilroy text-[#6022EA] pt-4">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integer;
