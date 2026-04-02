import DocConfig from "../config/DocConfig";

export default function GoogleForm() {
  return (
    <section className="bg-white text-black">
      <div className="">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="mt-4 text-xl leading-8 text-black">
            We want your input take our survey.
          </h2>
          <a
            href={DocConfig.links.googleSurvey}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3 text-white transition focus:outline-hidden sm:mt-0 sm:w-auto cursor-pointer"
          >
            Survey
          </a>
        </div>
      </div>
    </section>
  );
}
