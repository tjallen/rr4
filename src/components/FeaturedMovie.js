import React from 'react'
const FeaturedMovie = ({ movie }) => (
  <div className="featured-movie">
    <div className="featured-movie__image">
      <img alt={movie.name} src={movie.image} />
    </div>
    
    <div className="featured-movie__info">
      <p><b>{movie.name}</b></p>
      <p>{movie.director}</p>
      <p>{movie.released}</p>
    </div>
  </div>
)
export default FeaturedMovie;