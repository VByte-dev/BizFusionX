import React from "react";

let Hero = () => {
  return (
    <>
      <div className="bg-[#FFF9F4] mt-8 py-24 px-6 md:py-32 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Part-1 */}
        <div className="max-w-xl md:text-left">
          <h2 className="font-[bricolage] text-sm sm:text-base md:text-lg text-[#FD6900]">
            Hi, There!
          </h2>

          <h1 className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
            Strategic Solutions for{" "}
            <span className="text-[#FD6900]">Business</span> Growth & Success!
          </h1>

          <p className="font-[space] text-xs sm:text-sm md:text-base text-gray-600 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            delectus ab eos repellat ex ut iure quasi ullam hic provident?
          </p>

          <div className="flex justify-center md:justify-start items-center gap-4 text-xs sm:text-sm md:text-base font-[space]">
            <button className="bg-black flex gap-2 items-center text-white rounded px-4 py-2 md:px-5 md:py-2.5 hover:bg-gray-900 transition-all">
              Let's Discuss
              <div>
                <i className="ri-arrow-right-line"></i>
              </div>
            </button>

            <div className="flex items-center gap-2 cursor-pointer hover:text-[#FD6900] transition-colors">
              <i className="ri-play-circle-line text-lg md:text-xl"></i>
              <span>How we work</span>
            </div>
          </div>
        </div>

        {/* Part-2 */}
        <div className="w-full md:w-[45%]">
          <img
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg"
            alt="Business Strategy"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
