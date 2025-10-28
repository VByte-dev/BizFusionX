import React from "react";

let OutTeam = () => {
  return (
    <>
      <section id="ourTeam" className="py-12 px-4 sm:py-16 sm:px-8 md:py-24 md:px-16 lg:px-28">
        {/* Headings */}
        <div className="text-center">
          <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg">
            Our Team
          </h2>
          <h1 className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
            Meet the Minds Driving Business Growth
          </h1>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14 place-items-center">
          {/* 1 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t1.jpg"
                alt="Ethan Carter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Ethan Carter
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Founder & CEO
              </h2>
            </div>
          </div>

          {/* 2 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t7.jpg"
                alt="Sophia Turner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Sophia Turner
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Head of Design
              </h2>
            </div>
          </div>

          {/* 3 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t3.jpg"
                alt="Liam Brooks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Liam Brooks
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Lead Developer
              </h2>
            </div>
          </div>

          {/* 4 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t4.jpg"
                alt="Ava Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Ava Johnson
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Marketing Director
              </h2>
            </div>
          </div>

          {/* 5 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t5.jpg"
                alt="Noah Kim"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Noah Kim
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Product Strategist
              </h2>
            </div>
          </div>

          {/* 6 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t6.jpg"
                alt="Olivia White"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Olivia White
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                UX Researcher
              </h2>
            </div>
          </div>

          {/* 7 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t2.jpg"
                alt="Mason Lee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Mason Lee
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Frontend Engineer
              </h2>
            </div>
          </div>

          {/* 8 */}
          <div className="w-52 sm:w-56 md:w-60">
            <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg">
              <img
                src="/images/t8.jpg"
                alt="Emma Davis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <h1 className="font-[bricolage] text-base sm:text-lg">
                Emma Davis
              </h1>
              <h2 className="font-[bricolage] text-zinc-500 text-sm sm:text-base">
                Data Analyst
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutTeam;
