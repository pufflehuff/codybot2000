import React from 'react';
import PropTypes from 'prop-types';

export default function StarRating({ rating, special }) {
  const fullClass = special ? `rating ${special}` : '';
  return (
    <input
      className={fullClass}
      min="0"
      max="5"
      step="0.5"
      readOnly
      type="range"
      value={rating}
    />
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  special: PropTypes.string,
};

StarRating.defaultProps = {
  special: '',
};
