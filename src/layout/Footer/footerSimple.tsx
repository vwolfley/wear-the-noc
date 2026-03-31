import { FaInstagram } from "react-icons/fa6";

export default function FooterSimple() {
  return (
    <>
      <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-xs bg-white text-black border-t border-black/25">
        <p>
          Copyright © 2026 The No.C., All rights reserved.
        </p>
        <div className="flex items-center">
          {/* <a href="#" className="hover:text-black/60 transition-all">
            Contact Us
          </a>
          <div className="h-8 w-px"></div>
          <a href="#" className="hover:text-black/60 transition-all">
            Privacy Policy
          </a> */}
          <div className="h-8 w-px"></div>
          <a href="https://www.instagram.com/the.no.c/" rel="noreferrer" target="_blank" className="hover:text-black/60 transition-all cursor-pointer">
            <span className="sr-only">Instagram</span>
            <FaInstagram size={28} />
          </a>

        </div>
      </footer>
    </>
  );
}
