import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetailList.scss'

export default function MovieDetailList({ label, list }) {
  return (
    <div className="wrapperCustom">
      <label>{label}</label>
      {list.length ? (
        <div className="wrapperList">
          {list.map((data, i) => (
            <div className="listItem" key={i}>{data}</div>
          ))}
        </div>
      ) : (
        <p>We don't have any {label} data yet!</p>
      )}
    </div>
  );
}

MovieDetailList.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
};
