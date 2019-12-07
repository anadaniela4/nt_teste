import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from '../../shared/helpers/format-date';
import './MovieItem.css'

// Import all images
import bg_1 from '../../shared/assets/images/bg-1.png';
import bg_2 from '../../shared/assets/images/bg-2.png';
import bg_3 from '../../shared/assets/images/bg-3.png';
import bg_4 from '../../shared/assets/images/bg-4.png';
import bg_5 from '../../shared/assets/images/bg-5.png';
import bg_6 from '../../shared/assets/images/bg-6.png';
import bg_7 from '../../shared/assets/images/bg-7.png';

export default function MovieItem({ id, title, description, releaseDate }) {

  const images = {
    1: bg_1,
    2: bg_2,
    3: bg_3,
    4: bg_4,
    5: bg_5,
    6: bg_6,
    7: bg_7
  }

  description = description.length > 150 ? description.substring(0, 147) + '...' : description

  return (
    <div className="col-lg-4 col-md-6 p-2 col-sm-12">
      <Link to={`/movie/${id}`} className="card shadow-sm">
        <img src={images[id]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <i className="card-date">{formatDate(releaseDate)}</i>
          <p className="card-text">{description}</p>
          <span>
            More info
          </span>
        </div>
      </Link>
    </div>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
