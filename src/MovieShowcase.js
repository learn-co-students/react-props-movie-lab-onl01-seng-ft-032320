import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    // console.log(movieData);
    return movieData.map((item, i) => (
      <MovieCard
        key={i}
        title={item.title}
        IMDBRating={item.IMDBRating}
        genres={item.genres}
        poster={item.poster}
      />
    ));
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
