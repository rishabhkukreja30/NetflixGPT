import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-56 px-2 md:py-4 md:px-6 rounded-lg">
      <img
        src={`${IMG_CDN}${posterPath}`}
        alt="movie-card"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
