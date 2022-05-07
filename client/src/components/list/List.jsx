import React/* , { useState, useEffect } */ from 'react';
import styled from 'styled-components';
import ToyProblem from './ToyProblem';

import problems from './exampleProblems';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans serif;
`;

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
    <ListContainer>
      {problems.map((problem, index) => (
        <ToyProblem key={index + 1} problem={problem} />
      ))}
    </ListContainer>
  );
}