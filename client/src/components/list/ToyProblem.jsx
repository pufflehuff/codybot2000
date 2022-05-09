/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

export default function ToyProblem({ problem }) {
  // eslint-disable-next-line object-curly-newline, no-unused-vars
  const { name, prompt, tags, difficulty, upvotes, downvotes, rating, timestamp, author } = problem;

  return (
    <div className="ToyProblemEntry">
      <div className="ToyProblemRow">
        <h2 className="ToyProblemTitle">{name}</h2>
        <span className={`Difficulty ${difficulty}`} diff={difficulty}>{difficulty}</span>
      </div>
      <div className="ToyProblemRow">
        <StarRating rating={rating} special="ToyProblemRating" />
        <span>
          {tags.map((tag) => (
            <button className="Tags " type="button" key={tag}>{tag}</button>
          ))}
        </span>
        <button className="Comments" type="button">Comments</button>
      </div>
    </div>
  );
}

ToyProblem.propTypes = {
  problem: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  difficulty: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
