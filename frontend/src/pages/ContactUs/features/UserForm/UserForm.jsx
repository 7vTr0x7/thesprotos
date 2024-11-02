import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const UserForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#151515]  md:rounded-l-lg  px-6 py-6 sm:px-10 sm:py-8">
      <p className="text-gray-50 font-semibold text-2xl sm:text-3xl">
        Get in <span className="text-yellow-400">Touch</span>
      </p>
      <form className="mt-6 sm:mt-7 mb-8">
        <input
          type="text"
          placeholder="Name*"
          className="text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md border-gray-200 mt-2"
        />
        <input
          type="email"
          placeholder="Email*"
          className="text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md border-gray-200 mt-3"
        />
        <input
          type="number"
          placeholder="Phone Number*"
          className="text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md border-gray-200 mt-3"
        />
        <button
          type="submit"
          className="bg-yellow-400 w-full rounded-md mt-4 text-center py-2 text-xs font-semibold uppercase"
          onClick={submitHandler}>
          Send
        </button>
      </form>

      <div className="flex flex-row gap-6 sm:gap-10 mb-4">
        <div className="flex gap-4 items-center">
          <FaPhone className="text-gray-50" color="white" />
          <div>
            <p className="text-xs text-gray-50">PHONE</p>
            <p className="text-xs text-yellow-600">03 5432 1234</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <MdEmail className="text-gray-50 text-xl" color="white" />
          <div>
            <p className="text-xs text-gray-50">EMAIL</p>
            <p className="text-xs text-yellow-600">info@thesportos.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
