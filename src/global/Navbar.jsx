import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "roadmap",
    },
    {
      id: 4,
      link: "team",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-[70px] duration-300 z-[50] shadow-lg backdrop-blur-xl"
            : "fixed w-full h-[70px] duration-300 z-[50] "
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-end items-center h-[70px] max-w-6xl mx-auto text-white px-2 md:px-0">
          <ul className="hidden md:flex justify-around items-center">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize hover:scale-105 duration-200 px-8"
              >
                {link}
              </li>
            ))}
            <button>Connect Wallet</button>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%] text-white ease-in duration-500 backdrop-blur-lg z-40"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6">
              {link}
            </li>
          ))}
        </ul>
        <button className="ml-4">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
