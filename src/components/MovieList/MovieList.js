import React from 'react';

import MovieItem from '..//MovieItem/MovieItem';
import Loader from '../../shared/components/Loader/Loader';
import useMovieList from '../../shared/hooks/useMovieList';

export default function MovieList(props) {
  const { loading, movieList } = useMovieList();

  return (
    <div className="d-flex flex-wrap">
      {loading ? (
        <Loader />
      ) : (
        movieList.map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            description={movie.description}
            releaseDate={movie.releaseDate}
            title={movie.title}
          />
        ))
      )}
    </div>
  );
}
