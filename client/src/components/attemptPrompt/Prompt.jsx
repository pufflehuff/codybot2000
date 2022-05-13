/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default function Prompt({ problem }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reported, setReported] = useState(false);
  // eslint-disable-next-line object-curly-newline
  const { name, prompt, constraints, examples } = problem;

  function handleSubmit() {
    setSubmitted(true);

    const newRating = problem.rating;
    newRating[rating] += 1;

    axios.put(`/api/updateRating/${problem._id}`, { rating: newRating })
      .catch((err) => console.log(err));
  }

  function handleReport() {
    setReported(true);

    axios.put(`/api/reportProblem/${problem._id}`, { reportedCount: problem.reportedCount + 1 })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2>{name}</h2>
      <input
        className="rating RatingNew"
        style={{ display: 'inline-block' }}
        min="0"
        max="5"
        step="0.5"
        type="range"
        value={rating}
        onChange={submitted ? null : (e) => setRating(Math.ceil(e.target.value))}
      />
      {rating === 0 || submitted ? null
        : <button type="button" onClick={() => handleSubmit()}>Submit</button>}
      <ReactMarkdown>{prompt}</ReactMarkdown>
      <div>
        <h3>Examples:</h3>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <b>Input: </b>
              {example.input}
              <b> Output: </b>
              {example.output}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Constraints:</h3>
        <ul>
          {constraints.map((constraint, index) => (
            <li key={index}>
              <ReactMarkdown>
                {constraint}
              </ReactMarkdown>
            </li>
          ))}
        </ul>
      </div>
      {reported ? null
        : <button type="button" className="ReportButton" onClick={() => handleReport()}>report problem</button>}
    </div>
  );
}

Prompt.propTypes = {
  problem: PropTypes.object,
  name: PropTypes.string,
  prompt: PropTypes.string,
  constraints: PropTypes.array,
  examples: PropTypes.array,
};

Prompt.defaultProps = {
  problem: {},
  name: '',
  prompt: '',
  constraints: [],
  examples: [],
};
