import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 md:m-0 mt-56">
        <img
          className=""
          src={NETFLIX_BACKGROUND}
          alt="Netflix background image"
        />
      </div>
      <div className="pt-[25%] md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
