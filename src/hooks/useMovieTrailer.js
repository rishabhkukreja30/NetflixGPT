import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailerVideos = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
