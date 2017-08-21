import React from 'react';
import Link from 'react-router-dom/Link';

const FeaturedMovie = ({ movie }) => (
  <div className="featured-movie">
    <Link to={`/movies/${movie.id}`}>
      <div className="featured-movie__image">
        <img alt={movie.name} src={movie.image} />
      </div>
    </Link>
    <div className="featured-movie__info">
      <p><b>{movie.name}</b></p>
      <p>{movie.director}</p>
      <p>{movie.released}</p>
    </div>
  </div>
)
export default FeaturedMovie;