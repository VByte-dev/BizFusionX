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
                src="https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg"
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
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
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
                src="https://images.pexels.com/photos/6954153/pexels-photo-6954153.jpeg"
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
                src="https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg"
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
                src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
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
                src="https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg"
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
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
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
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
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
