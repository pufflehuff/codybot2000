import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ToyProblem from './ToyProblem';

export default function List() {
  const [loading, setLoading] = useState(true);
  const [problems, setProblems] = useState([]);
  const [display, setDisplay] = useState([]);
  const [filter, setFilter] = useState('');
  // // THIS IS FOR CURRENT USER
  // const location = useLocation();
  // const { currentUserId } = location.state;
  // console.log(currentUserId);
  // // THIS IS FOR CURRENT USER

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

  return (
    loading ? null : (
      <div className="ListContainer">
        {display.map((problem, index) => (
          <ToyProblem key={index + 1} problem={problem} setFilter={setFilter} />
        ))}
      </div>
    )
  );
}
