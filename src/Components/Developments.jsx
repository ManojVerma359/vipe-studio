import React from "react";
import deve_img from "../assets/images/deve_img.png";

const Developments = () => {
  return (
    <div id="development" className="container mx-auto pt-20 sm:pb-28 pb-16 px-3">
      <div className="flex flex-wrap xl:justify-between justify-center  items-center">
        <div className=" xl:w-[45%]">
          <img className='hover:scale-[100.5%] duration-300 transition-all ease-linear' src={deve_img} alt="#id" />
        </div>
        <div className="flex flex-col xl:pt-0 pt-10  xl:w-[50%]">
          <h3 className="font-light md:text-[48px] sm:text-[36px] text-[22px] ff_use text-[#6022EA] leading-[normal]">
            Agile WordPressspan{" "}
            <span className="font-light md:text-[48px] sm:text-[36px] text-[22px]  text-black ff_use flex block">
              {" "}
              Development Project management
            </span>
                      </h3>
                      <p className="text-base font-normal opacity-70 ff_rgilroy pt-3">Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                      <div className="pt-8">
                      <button className="text-base font-normal ff_rgilroy bg-[#6022EA] text-white hover:text-[#6022EA] hover:bg-white transition-all duration-300 ease-linear border border-[#6022EA] rounded-[80px]  px-[24px] py-[10px]">Explore</button>

                      </div>
        </div>
      </div>
    </div>
  );
};

export default Developments;
