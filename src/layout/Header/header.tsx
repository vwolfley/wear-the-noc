// import { useState } from "react";
import Logo from "../../assets/logos/logo-400-trans.png";
import { FaInstagram } from "react-icons/fa6";

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

  return (
    <header className="top-0 z-10 flex h-18 w-full p-4 border-b border-black/25 bg-white text-black">
      <section className="container mx-auto flex max-w-7xl flex-row items-center justify-between">
        <div className="flex flex-row justify-end space-x-4">
          <img src={Logo} alt="The Noc Logo" className="h-18 w-auto" />
          <h1 className="self-center text-sm font-bold md:text-base">
            The Perfect White Tee
          </h1>
        </div>
        <div className="flex flex-row justify-end mr-2">
          <a
            href="https://www.instagram.com/the.no.c/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-black/60 transition-all cursor-pointer"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram size={38} />
          </a>
        </div>
        {/* <div className="relative flex flex-row justify-end">
          <button
            id="hamburger-button"
            type="button"
            className=" hover:bg-black hover:text-white inline-flex cursor-pointer items-center rounded-lg p-2 text-sm md:hidden"
            aria-controls="navbar-mobile-menu"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
          {/* <NavMain /> */}
        {/* </div> */}
      </section>
      {/* <section
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "animate-open-menu" : "hidden"
        } fixed top-0 right-0 mt-16 w-55 flex-col bg-white text-lg text-black md:hidden cursor-pointer`}
      > */}
        {/* <NavMobile /> */}
      {/* </section> */}
    </header>
  );
}
