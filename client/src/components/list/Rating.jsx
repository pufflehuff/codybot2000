import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarContainer = styled.span`
  position: relative;
  width: 10px;
  font-size: ${(props) => props.fontSize}px;
`;

const EmptyStar = styled.span`
  color: #597081;
  z-index: 1;
  margin: 0 2px 0 2px;
`;

const FilledStar = styled.span`
  position: absolute;
  width: ${(props) => props.fill * 100}%;
  overflow: hidden;
  color: #EAB464;
  z-index: 2;
  margin: 0 2px 0 2px;
`;

export default function Rating({ rating, fontSize }) {
  const stars = [];
  let index = 0;
  while (index < 5) {
    const empty = Math.abs(index - rating);
    const oneHalf = Math.abs(index - rating + 0.5);
    const full = Math.abs(index - rating + 1);
    const closestRating = Math.min(empty, oneHalf, full);
    switch (closestRating) {
      case empty:
        stars.push(0);
        break;
      case oneHalf:
        stars.push(0.5);
        break;
      case full:
        stars.push(1);
        break;
      default:
        stars.push(0);
    }
    index += 1;
  }

  return (
    <div className="star-display">
      {stars.map((star, i) => (
        <StarContainer fontSize={fontSize} key={i}>
          <FilledStar fill={star}>&#9733;</FilledStar>
          <EmptyStar>&#9733;</EmptyStar>
        </StarContainer>
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
};

Rating.defaultProps = {
  fontSize: 20,
};
