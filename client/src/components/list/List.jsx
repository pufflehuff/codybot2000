import React/* , { useState, useEffect } */ from 'react';
import ToyProblem from './ToyProblem';

import problems from './exampleProblems';

export default function List() {
  // const [problems, setProblems] = useState([]);

  // const problems_api = '/problems';

  // useEffect(() => {
  //   axios.get(problems_api)
  //     .then(({ data }) => {
  //       setProblems(data);
  //     })
  //     .catch(err => console.log(err));
  //   },
  //   []
  // );

  return (
    <div className="ListContainer">
      {problems.map((problem, index) => (
        <ToyProblem key={index + 1} problem={problem} />
      ))}
    </div>
  );
}
