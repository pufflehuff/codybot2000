import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default function Prompt({ problem }) {
  // eslint-disable-next-line object-curly-newline
  const { name, prompt, constraints, examples } = problem;

  return (
    <div>
      <h2>{name}</h2>
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
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </div>
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
