import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResults } from "../store/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((state) => state.config.lang);
  const [errorMessage, setErrorMessage] = useState(null);
  const searchText = useRef(null);

  // movie search in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // make an api call to gpt api and get movie results
    // const gptQuery =
    //   "Act as a Movie recommendation system and suggest some movies for the query " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // if (!gptResults) {
    //   setErrorMessage("GPT API's Failed");
    // }

    const gptMovies =
      "Don, Amar Akbar Anthony, Jab Tak Hai Jaan, Baazigar, War, Fighter, hera pheri, phir hera pheri".split(
        ","
      );

    // for each movie, search that movie in TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // promise, promies, promise, promise, promise

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMoviesResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] mt-[40%] md:mt-0 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black bg-opacity-80  w-full md:w-1/2 rounded-lg"
      >
        <input
          type="text"
          className="p-4 m-4 w-3/5"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          onClick={handleGPTSearchClick}
          className="p-4 m-4 w-3/12 bg-red-700 text-white rounded-lg text-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
      {errorMessage && <h1 className="text-white text-lg">{errorMessage} </h1>}
    </div>
  );
};

export default GPTSearchBar;
