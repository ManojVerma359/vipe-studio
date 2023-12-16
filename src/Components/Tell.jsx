import React from "react";
import { Refresh, Sreachbt } from "./Iconsvg";

const Tell = () => {
  return (
    <>
      <div className="bg-[#0D0D0E] xl:px-16 px-3 py-16">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="xl:w-[50%]">
            <h4 className="sm:text-[36px] text-[24px] text-white ff_use">Tell us more....</h4>
            <p className="font-light text-base text-white ff_rgilroy pt-2 ">
              Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue
              in quis.{" "}
              <span className="font-light text-base text-white ff_rgilroy flex xl:block">
                {" "}
                Magna vel orci sem neque fringilla et lectus laoreet.
              </span>
            </p>
          </div>

          <div className="xl:w-[50%] xl:pt-0 pt-4">
            <div className="flex bg-transprent border boreder-1 lg:w-[70%] w-[100%] px-5 py-5 rounded-[80px] ">
              <input
                className="w-[100%] bg-transparent border-0 outline-none text-white font-light sm:text-base text-[14px] ff_rgilroy"
                type="text"
                placeholder="What do you need assistance with?"
              />
              <Sreachbt />
            </div>
            <div className="flex items-center lg:gap-52 md:gap-32 sm:gap-12 gap-4 flex-wrap  pt-4">
              <div className="flex items-center gap-2">
                <Refresh />
                <p className="text-base font-light text-white ff_rgilroy">
                  or send us an inquire?{" "}
                </p>
              </div>
              <p className="text-base font-light text-white ff_rgilroy">
                Learn more about...
              </p>
            </div>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default Tell;
