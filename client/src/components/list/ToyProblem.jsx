/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

export default function ToyProblem({ problem, setFilter }) {
  // eslint-disable-next-line object-curly-newline, no-unused-vars
  const { name, prompt, tags, difficulty, numRatings, rating, timestamp, author } = problem;

  return (
    <div className="ToyProblemEntry">
      <div className="ToyProblemRow">
        <h2 className="ToyProblemTitle">{name}</h2>
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
        <StarRating rating={rating} special="ToyProblemRating" />
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
        <button className="Comments" type="button">Comments</button>
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
  numRatings: PropTypes.number,
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
  numRatings: null,
  rating: null,
  timestamp: '',
  author: '',
  setFilter: {},
};
