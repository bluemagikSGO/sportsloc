import React from "react";
import Loader from "./Loader";

const Hero = () => {
  return (
    <div className="text-center md:mt-[5rem] mt-[1rem]">
      <h1 className="text-7xl font-bold">Find Sport Centers Near You</h1>
      <p className="text-[1.5rem] mt-5 text-gray-500 mx-5">
        Discover sport centers close to you and get active today.
      </p>
      <div className="mt-8 flex md:flex-row flex-col justify-center items-center gap-7 ">
        <Loader />

        <input
          type="text"
          placeholder="Enter Location"
          className="focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border-1 border-gray-400 md:w-[35rem] w-[25rem] px-5 py-3 rounded-md text-xl
           placeholder:text-left shadow-md"
        />

        <button
          className="bg-blue-500 p-3 px-5 rounded-md text-white font-semibold
         hover:bg-blue-400 cursor-pointer focus:bg-blue-400"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
