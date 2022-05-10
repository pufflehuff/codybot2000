import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToyProblem from './ToyProblem';

export default function List() {
  const [loading, setLoading] = useState(true);
  const [problems, setProblems] = useState([]);
  const [display, setDisplay] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/problems')
      .then(({ data }) => {
        setProblems(data);
        setDisplay(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (filter) {
      const filtered = problems.filter(({ difficulty, tags }) => (
        [difficulty, ...tags].includes(filter)
      ));
      setDisplay(filtered);
    }
  }, [filter]);

  if (!loading) {
    return (
      <div className="ListContainer">
        {display.map((problem, index) => (
          <ToyProblem key={index + 1} problem={problem} setFilter={setFilter} />
        ))}
      </div>
    );
  }
}
