import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../movies.json';

const Movies = () => (
  <div>
    <h2 className="movies-header">
      All movies
    </h2>

    <hr />

    <div className="movie-listings">
      {movies.map((movie, i) => (
        <div key={i}>
          <div className="movie-image">
            <Link to={`/movies/${movie.id}`}>
              <img alt={movie.name} src={movie.image} />
              <h3 className="movie-name">{movie.name}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Movies;