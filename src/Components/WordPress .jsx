import React from "react";
import FillTik from '../assets/images/FillTik.png'
import ServiceImg from '../assets/images/ServiceImg.png'
import right_icon from '../assets/images/right_icon.png'
const WordPress = () => {
  return (
    <>
     <section id='service' className='bg-black py-[81px] relative z-[1]'>
                <div className="container  mx-auto px-3 ">
                    <div className='flex justify-between flex-wrap mb-[170px]'>
                        <h2 className='ff_use text-white text-[28px] lg:text-[40px] leading-[normal] xl:max-w-[533px] mb-6 xl:mb-0 '>All Vipe Studio WordPress <span className='block'></span> services	include:</h2>
                        <div className='industry-wrapper w-full sm:w-[50%] xl:w-auto mb-6 xl:mb-0'>
                            <h3 className='text-white ff_sgilroy text-[24px] leading-[130%] mb-[23px]'>By Industry</h3>
                            <div className="flex flex-col gap-[11px]">
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Lorem in elementum pellentesque</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Molestie cursus praesent mi</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Leo sed viverra cras</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Laoreet feugiat ut at</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Risus aliquam molestie viverra</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Diam enim pulvinar velit</p>
                                </div>
                            </div>
                        </div>
                        <div className='services-wrapper w-full sm:w-[50%] xl:w-auto'>
                            <h3 className='text-white ff_sgilroy text-[24px] leading-[130%] mb-[23px]'>By Services</h3>
                            <div className="flex flex-col gap-[11px]">
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Accumsan, dui a semper</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Interdum malesuada vulputate neque</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Nullam non a, morbi</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Arcu morbi leo eu</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Viverra venenatis, in ornare</p>
                                </div>
                                <div className='point-wrapper gap-[10px] flex'>
                                    <img src={FillTik} alt="check-fill" />
                                    <p className='ff_rgilroy  leading-[150%] text-white'>Erat id aliquam habitant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='which-services flex px-3  flex-wrap items-center justify-between bg-black lg:py-[27px] lg:ps-[32px] lg:pe-[31px] rounded-[25.938px]'>
                        <div className='service-content mb-6 xl:mb-0 max-xl:w-full'>
                            <h2 className='xl:max-w-[324px] ff_use text-[26px] lg:text-[35px] leading-[1.23] font-normal text-white mb-[38px]'>Not Sure which service you need yet?</h2>
                            <button className='py-[10px] px-[24px] butn hover:text-[#6022EA] hover:bg-white transition-all duration-300 ease-linear ff_sgilroy font-semibold text-white rounded-[80px] bg-[#6022EA]'>Schedule An Appointment</button>
                        </div>
                        <div className='flex flex-col mb-6 xl:mb-0 w-full sm:w-[50%]  xl:w-auto'>
                            <h3 className='text-white text-[24px] ff_bgilroy leading-[130%] max-w-[386px] mb-[25px]' >20-m free consultation that will help us identifyif  you need</h3>
                            <div className='flex flex-col gap-[15px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={right_icon} alt="fillTik" />
                                    <p className='ff_rgilroy leading-[150%] text-white'>Technical Description & Discovery</p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={right_icon} alt="fillTik" />
                                    <p className='ff_rgilroy leading-[150%] text-white'>Custom WordPress Development</p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={right_icon} alt="fillTik" />
                                    <p className='ff_rgilroy leading-[150%] text-white'>Support & Maintenance</p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={right_icon} alt="fillTik" />
                                    <p className='ff_rgilroy leading-[150%] text-white'>Other WordPress Service	</p>
                                </div>
                            </div>
                        </div>
                        <div className='service-img w-full sm:w-[50%] xl:w-auto'>
                            <img  src={ServiceImg} alt="service" className='rounded-[24.2px] w-[331px] hover:scale-[100.5%] duration-300 transition-all ease-linear' />
                        </div>
                    </div>
                </div>
                <div className='ellipse absolute sm:w-[317px] w-[250px] h-[272.34px] ellipse-bg blur-[137px] top-[43%] start-[10%] z-[-1]'></div>
                <div className='ellipse absolute sm:w-[317px] w-[250px] h-[272.34px] ellipse-bg blur-[137px] top-[56%] end-[11%] z-[-1]'></div>

            </section>

    </>
  );
};

export default WordPress;
