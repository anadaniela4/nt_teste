import React from 'react';
import MovieDetailContent from './MovieDetailContent';
import Loader from '../../shared/components/Loader/Loader';

import useMovieDetail from '../../shared/hooks/useMovieDetail';

export default function MovieDetail(props) {
  const { loading, movieDetail } = useMovieDetail(props.match.params.id);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <MovieDetailContent
          title={movieDetail.title}
          director={movieDetail.director}
          producer={movieDetail.producer}
          description={movieDetail.description}
          characters={movieDetail.characters}
          planets={movieDetail.planets}
          species={movieDetail.species}
          starships={movieDetail.starships}
          vehicles={movieDetail.vehicles}
        />
      )}
    </div>
  );
}
