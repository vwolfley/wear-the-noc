import { useState, useEffect } from "react";

import submitEmail from "../services/collectEmails";
import SuccessAlert from "./successAlert";

export default function EmailForm() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  type FormData = {
    email: string;
  };

  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("Submitting email form with payload:", formData.email);
      await submitEmail(formData.email);
      // show alert
      setShowAlert(true);
      // clear the form
      setFormData({ email: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <form action="#" className="sm:flex sm:gap-4" onSubmit={handleSubmit}>
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-700 shadow-xs transition focus:border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-hidden"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-white transition focus:ring-2 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto cursor-pointer"
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
      {showAlert && (
        <SuccessAlert />
      )}
    </>
  );
}
