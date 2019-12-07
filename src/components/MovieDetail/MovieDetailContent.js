import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieDetailContent.scss'

import MovieDetailList from './MovieDetailList';

export default function MovieDetailContent({
  title,
  director,
  producer,
  description,
  characters,
  planets,
  species,
  starships,
  vehicles,
}) {
  return (
    <div className="wrapper">
      <div className="movie-header">
        <div className="back">
          <Link to='/'>&larr; Back to list</Link>
        </div>
        <span className="title">{title}</span>
        <span className="team">Director: {director}</span>
        <span className="team">Producer: {producer}</span>
      </div>
      <div className="mb-2">
        <span className="description-title">Description</span>
        <p className="description">{description}</p>
      </div>
      <MovieDetailList label='Characters' list={characters} />
      <MovieDetailList label='Planets' list={planets} />
      <MovieDetailList label='Species' list={species} />
      <MovieDetailList label='Starships' list={starships} />
      <MovieDetailList label='Vehicles' list={vehicles} />
    </div>
  );
}

MovieDetailContent.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.array,
  planets: PropTypes.array,
  species: PropTypes.array,
  starships: PropTypes.array,
  vehicles: PropTypes.array,
};
