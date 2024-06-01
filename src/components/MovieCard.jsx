import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-56 py-4 px-6 rounded-lg">
      <img
        src={`${IMG_CDN}${posterPath}`}
        alt="movie-card"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
