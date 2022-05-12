import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ToyProblem from './ToyProblem';
import Context from '../Context';

export default function List() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [problems, setProblems] = useState([]);
  const [filtered, setFiltered] = useContext(Context);
  // // THIS IS FOR CURRENT USER
  // const location = useLocation();
  // const { currentUserId } = location.state;
  // console.log(currentUserId);
  // // THIS IS FOR CURRENT USER\

  useEffect(() => {
    axios.get('/api/problems')
      .then(({ data }) => {
        setProblems(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (filter) {
      setFiltered(problems.filter(({ difficulty, tags }) => (
        [difficulty, ...tags].includes(filter)
      )));
    } else {
      setFiltered(problems);
    }
  }, [filter]);

  return (
    loading ? null : (
      <>
        <div className="ListHeader">
          <Link to="solve" state={{ problem: filtered[Math.floor(Math.random() * filtered.length)] }}>
            <button type="button">Random Problem</button>
          </Link>
          {filter === '' ? null : (
            <span>
              Current Filter:&nbsp;
              <button type="button" onClick={() => setFilter('')}>{filter}</button>
            </span>
          )}
        </div>
        <div className="ListContainer">
          {filtered.map((problem, index) => (
            <ToyProblem key={index + 1} problem={problem} setFilter={setFilter} />
          ))}
        </div>
      </>
    )
  );
}
