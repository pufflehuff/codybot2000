/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

export default function ToyProblem({ problem, setFilter }) {
  // eslint-disable-next-line object-curly-newline, no-unused-vars
  const { name, prompt, tags, difficulty, rating, timestamp, author, reportedCount } = problem;

  let sumRatings = 0;
  let countRatings = 0;
  const ratings = Object.entries(rating);
  ratings.forEach((star) => {
    sumRatings += star[0] * star[1];
    countRatings += star[1];
  });
  const displayRating = countRatings !== 0 ? sumRatings / countRatings : 0;

  return (
    <div className="ToyProblemEntry">
      <div className="ToyProblemRow">
        <Link to="/solve" state={{ problem }}>
          <h2 className="ToyProblemTitle">{name}</h2>
        </Link>
        <span
          className={`Difficulty ${difficulty}`}
          diff={difficulty}
          onClick={() => setFilter(difficulty)}
          aria-hidden="true"
        >
          {difficulty}
        </span>
      </div>
      <div className="ToyProblemRow">
        <StarRating rating={displayRating} special="ToyProblemRating" />
        <span>
          {tags.map((tag) => (
            <button
              className="Tags"
              type="button"
              key={tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
}

ToyProblem.propTypes = {
  problem: PropTypes.object,
  name: PropTypes.string,
  prompt: PropTypes.string,
  tags: PropTypes.array,
  difficulty: PropTypes.string,
  rating: PropTypes.number,
  timestamp: PropTypes.string,
  author: PropTypes.string,
  setFilter: PropTypes.func,
};

ToyProblem.defaultProps = {
  problem: {},
  name: '',
  prompt: '',
  tags: [],
  difficulty: '',
  rating: null,
  timestamp: '',
  author: '',
  setFilter: {},
};
