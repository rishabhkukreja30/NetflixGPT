import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black  w-1/2 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 w-3/5"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="p-4 m-4 w-3/12 bg-red-700 text-white rounded-lg text-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
