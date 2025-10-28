// 🔸 Hero Section
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#FFF9F4] mt-8 py-24 px-6 md:py-32 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* 🟠 Left Side - Text Content */}
      <div className="max-w-xl text-left md:text-left">
        {/* Small Intro Text */}
        <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg">
          Hi, There!
        </h2>

        {/* Main Heading */}
        <h1 className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
          Strategic Solutions for{" "}
          <span className="text-[#FD6900]">Business</span> Growth & Success!
        </h1>

        {/* Paragraph */}
        <p className="font-[space] text-xs sm:text-sm md:text-base text-gray-600 py-4">
          Empowering ambitious brands to grow faster through powerful
          strategies, creative design, and impactful digital transformation.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start items-center gap-4 text-xs sm:text-sm md:text-base font-[space]">
          {/* 🔗 Button to Contact Section */}
          <a
            href="#contact"
            className="bg-black flex gap-2 items-center text-white rounded px-4 py-2 md:px-5 md:py-2.5 hover:bg-gray-900 transition-all"
          >
            Let's Discuss
            <i className="ri-arrow-right-line"></i>
          </a>

          {/* 🔗 Scroll to Work Process Section */}
          <a
            href="#"
            className="flex items-center gap-2 cursor-pointer hover:text-[#FD6900] transition-colors"
          >
            <i className="ri-play-circle-line text-lg md:text-xl"></i>
            <span>How we work</span>
          </a>
        </div>
      </div>

      {/* 🟠 Right Side - Image */}
      <div className="w-full md:w-[45%]">
        <img
          src="/images/home.jpeg"
          alt="Business Strategy"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
