import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import CardFront from './card-components/CardFront.js';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX\
    let movieCards = movieData.map(data => {return <MovieCard title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} poster={data.poster}/>})
    return movieCards
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
