import React from "react";
import { BsDiamondFill } from "react-icons/bs";

const Roadmap = () => {
  return (
    <div className="roadmap-bg">
      <div className="container py-10">
        <h1 className="py-10 text-center text-6xl font-extrabold text-[#1AECD2]">
          RoadMap
        </h1>
        <div className="flex justify-center items-center">
          <div className="py-3 sm:max-w-4xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* <!-- Vertical bar running through middle --> */}
              <div className="hidden sm:block w-0.5 bg-[#1AECD2] absolute h-full left-1/2 transform -translate-x-1/2"></div>
              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-[450px] sm:pr-8">
                      <div className="p-3 border  border-[#1AECD2] bg-white bg-opacity-10">
                        <h1 className="text-2xl text-white ">
                          LAUNCH INITIAL NFT
                        </h1>
                        <p className="text-gray-300 pt-2 font-light">
                          Lorem ipsum dolor sit amet consectetur. Hac hendrerit
                          quisque aliquet magna malesuada platea. Blandit
                          habitasse donec sed ut scelerisque vulputate tellus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <BsDiamondFill className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-3xl text-[#1AECD2]" />
                </div>
              </div>
              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-[450px] sm:pl-8">
                      <div className="p-3 border  border-[#1AECD2] bg-white bg-opacity-10">
                        <h1 className="text-2xl text-white ">
                          LAUNCH INITIAL NFT
                        </h1>
                        <p className="text-gray-300 pt-2 font-light">
                          Lorem ipsum dolor sit amet consectetur. Hac hendrerit
                          quisque aliquet magna malesuada platea. Blandit
                          habitasse donec sed ut scelerisque vulputate tellus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <BsDiamondFill className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-3xl text-[#1AECD2]" />
                </div>
              </div>
              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-[450px] sm:pr-8">
                      <div className="p-3 border  border-[#1AECD2] bg-white bg-opacity-10">
                        <h1 className="text-2xl text-white ">
                          LAUNCH INITIAL NFT
                        </h1>
                        <p className="text-gray-300 pt-2 font-light">
                          Lorem ipsum dolor sit amet consectetur. Hac hendrerit
                          quisque aliquet magna malesuada platea. Blandit
                          habitasse donec sed ut scelerisque vulputate tellus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <BsDiamondFill className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-3xl text-[#1AECD2]" />
                </div>
              </div>
              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              <div className="mt-6 sm:mt-0">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-[450px] sm:pl-8">
                      <div className="p-3 border  border-[#1AECD2] bg-white bg-opacity-10">
                        <h1 className="text-2xl text-white ">
                          LAUNCH INITIAL NFT
                        </h1>
                        <p className="text-gray-300 pt-2 font-light">
                          Lorem ipsum dolor sit amet consectetur. Hac hendrerit
                          quisque aliquet magna malesuada platea. Blandit
                          habitasse donec sed ut scelerisque vulputate tellus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <BsDiamondFill className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-3xl text-[#1AECD2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
