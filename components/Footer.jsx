import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800">
      <div className="px-6">
        <form action="#" method="post">
          <div>
            <label
              htmlFor="email_address"
              className="block text-sm font-medium text-white"
            >
              Enter your email to stay in touch!
            </label>
            <div className="relative mt-1.5">
              <input
                type="text"
                className="block w-full text-white transition duration-300 bg-gray-700 border-2 border-b-2 border-transparen focus:border-white focus:ring-0"
              />
              <div className="absolute inset-0 border-b-2 border-white pointer-events-none"></div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="block w-full px-4 py-3 text-sm font-bold tracking-widest text-white uppercase bg-gray-700 rounded-sm hover:bg-white hover:text-gray-900"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
