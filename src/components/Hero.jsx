import React from "react";
import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero-bg ">
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-fit py-14 md:py-24 mx-2 md:mx-0">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Discover and collect{" "}
              <span className="bg-gradient-to-r from-[#F41FB9] via-[#1AECD2] to-[#7138D3] bg-clip-text text-transparent">
                extraordinary
              </span>{" "}
              <br />
              NFT’s
            </h1>
            <p className="pt-10">
              Lorem ipsum dolor sit amet consectetur. Hac hendrerit quisque
              aliquet magna malesuada platea. Blandit habitasse donec sed ut
              scelerisque vulputate tellus.Lorem ipsum dolor sit amet
              consectetur. Hac hendrerit quisque aliquet magna malesuada platea.
              Blandit habitasse donec sed ut scelerisque vulputate tellus.
            </p>
            <div className="pt-6 flex gap-5">
              <button>Mint Now</button>
              <button>Connect Wallet</button>
            </div>
            <div className=" mt-10 hidden md:flex justify-end items-end ">
              <div className="w-24 h-24 rounded-full bg-white bg-gradient-to-r from-[#18C8FF]  to-[#933FFE]"></div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-20">
            <div className="relative z-10">
              <img
                src={HeroImg}
                alt=""
                className="h-72 w-48 md:h-96 md:w-72 rotate-12 rounded-lg object-cover"
              />
            </div>
            <div className="absolute h-72 w-48 md:h-96 md:w-72 rotate-12 -translate-x-4 md:-translate-x-6 -translate-y-6 md:-translate-y-10 backdrop-blur-sm bg-white/20 border border-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
