import React from "react";
import three_person from "../assets/images/threecouple_img.png";

const Star = () => {
  return (
    <div id="star" className="bg-[#F6F6F6] xl:h-[520px] lg:h-[420px] h-[375px] ">
      <div className="container mx-auto flex flex-wrap items-center justify-center lg:justify-between px-3">
        <div className="lg:w-[46%] w-[100%] lg:pb-14 pb-5 xl:pt-0 pt-10">
          <h4 className="font-normal md:text-[48px] sm:text-[35px] text-[28px] ff_use">
            Team Full of Stars{" "}
          </h4>
          <p className="sm:text-base text-[17px] font-normal ff_rgilroy ">
            Suspendisse consequat egestas arcu et et. Viverra quis euismod{" "}
            <span className="sm:text-base text-[17px] font-normal ff_rgilroy xl:flex xl:block">
              {" "}
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit,
            </span>{" "}
            <span className="sm:text-base text-[17px] font-normal ff_rgilroy xl:flex xl:block">
              ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor
            </span>{" "}
            sollicitudin risus eget euismod in bibendum turpis.{" "}
          </p>
          <div className="pt-8">
            <button className="text-base font-normal ff_rgilroy bg-[blue] hover:text-[#6022EA] hover:bg-white transition-all duration-300 ease-linear border border-[#6022EA] text-white rounded-[80px]  px-[24px] py-[10px]">
              Explore
            </button>
          </div>
        </div>
        <div className="lg:pt-24  lg:w-[50%] ">
        <img className="w-[790px] hover:scale-[100.5%] duration-300 transition-all ease-linear" src={three_person} alt="#id" />

        </div>
        
      </div>
    </div>
  );
};

export default Star;
