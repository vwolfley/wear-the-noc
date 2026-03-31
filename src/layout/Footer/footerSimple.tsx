

export default function FooterSimple() {
  return (
    <>
      <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-white text-black border-t border-black">
        <p>
          Copyright © 2026 The No.C., All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black/60 transition-all">
            Contact Us
          </a>
          <div className="h-8 w-px"></div>
          <a href="#" className="hover:text-black/60 transition-all">
            Privacy Policy
          </a>
          <div className="h-8 w-px"></div>
          <a href="#" className="hover:text-black/60 transition-all">
            Trademark Policy
          </a>
        </div>
      </footer>
    </>
  );
}
