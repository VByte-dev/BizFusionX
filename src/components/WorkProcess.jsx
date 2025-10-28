// 🔸 Work Process Section
import React from "react";

const WorkProcess = () => {
  return (
    <section
      id="workprocess"
      className="py-12 px-4 sm:py-16 sm:px-8 md:py-24 md:px-16 lg:px-28"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Section Heading */}
      <div
        className="text-center md:px-50"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg">
          Working Process
        </h2>
        <h1 className="font-[bricolage] mt-2 md:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our Strategic Work Process: A Step-by-Step Path to Business Growth &
          Success
        </h1>
        <p className="mt-3 md:mt-5 font-[space] text-xs sm:text-sm md:text-base text-gray-600">
          From discovery to delivery, every phase is designed to align your
          brand vision with measurable growth.
        </p>
      </div>

      {/* Step Grid */}
      <div className="mt-14 space-y-10 ">
        {[
          {
            step: "Step 01",
            title: "Discovery & Research",
            desc: "We dive deep to understand your goals, audience, and market, so every decision is backed by insights.",
            img: "/images/wp1.jpeg",
          },
          {
            step: "Step 02",
            title: "Design & Planning",
            desc: "We turn insights into creative, user-friendly designs that communicate your brand effectively.",
            img: "/images/wp2.jpeg",
          },
          {
            step: "Step 03",
            title: "Development & Integration",
            desc: "Using modern tech, we build scalable, secure systems for seamless performance.",
            img: "/images/wp3.jpeg",
          },
          {
            step: "Step 04",
            title: "Launch & Optimization",
            desc: "We launch your product with precision and refine every detail for long-term success.",
            img: "/images/wp4.jpeg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-around items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={200 + index * 150}
            data-aos-duration="900"
          >
            <h1 className="font-[bricolage] text-[#FD6900] text-xl sm:text-2xl md:text-3xl mb-3 md:mb-0">
              {item.step}
            </h1>

            <div
              className="w-full md:w-1/2 max-w-md text-center bg-orange-50 p-3 md:p-4 rounded-lg"
              data-aos="zoom-in-up"
              data-aos-delay={300 + index * 150}
              data-aos-duration="800"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-48 md:h-56 object-cover"
              />
              <h1 className="font-[bricolage] mt-3 text-lg sm:text-xl md:text-2xl">
                {item.title}
              </h1>
              <p className="font-[space] mt-2 text-xs sm:text-sm md:text-base text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
