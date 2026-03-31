import Logo from "../assets/logos/logo-400.png";
import EmailForm from "./emailForm";

export default function MainCTA() {
  return (
    <section className="bg-white text-black">
      <div className="pt-4 pb-8 pl-8 pr-8">
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
            Be the the first to know when we launch.
          </p>
          <p className="text-gray-500">
            Sign up for early access and exclusive updates.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
