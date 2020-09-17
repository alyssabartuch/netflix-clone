import React, { useState, useEffect } from "react";
import { base_img_url } from "./App";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, settMovies] = useState([]);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      settMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    console.log(movie?.title || movie?.name || movie?.original_name);
    if (trailerId) {
      setTrailerId("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerId(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_img_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
}

export default Row;
