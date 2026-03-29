
import Logo from '../assets/logos/logo-400.png'

export default function MainCTA() {
  return (
    <section className="bg-white text-black">
      <div className="p-8 ">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
            What we have all been needing ...
          </h2>

          <img
            src={Logo}
            alt="The Noc Logo"
            className="mx-auto mt-4 h-60 w-auto"
          />

          <h3 className="text-lg text-gray-500">Coming Summer 2026</h3>
          <p className="mt-4 text-gray-500">
            Be the the first to know when we launch. Sign up for early access
            and exclusive updates.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-700 shadow-xs transition focus:border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-hidden"
              />
              <div
                data-lastpass-icon-root=""
                className="position: relative !important; height: 0px !important; width: 0px !important; display: initial !important; float: left !important;"
              ></div>
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-2 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto cursor-pointer"
            >
              <span className="text-sm font-medium"> Sign Up </span>

              <svg
                className="size-5 shadow-sm rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
