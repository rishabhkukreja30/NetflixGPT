import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <div className="w-2/5">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg">{overview}</p>
        <div className="flex ">
          <button className="bg-white p-4 px-12 text-xl text-black rounded-lg  hover:bg-opacity-70 flex">
            <FaPlay className="h-6 w-6" />
            <h1 className="text-xl px-2">Play</h1>
          </button>
          <button className="mx-4 bg-gray-700  p-4 px-12 text-xl text-white rounded-lg hover:bg-opacity-70 flex">
            <IoIosInformationCircle className="h-6 w-6" />
            <h1 className="text-xl px-2">More Info</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
