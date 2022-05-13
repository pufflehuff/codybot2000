/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Tags from './Tags';

export default function AddNewPrompt() {
  // THIS IS FOR CURRENT USER
  const location = useLocation();
  const { currentUserId } = location.state;
  console.log(currentUserId);
  // THIS IS FOR CURRENT USER
  const [promptName, setPromptName] = useState('');
  const [promptBody, setPromptBody] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('');

  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');

  const [exOutput, setExOutput] = useState('');

  const [constraints, setConstraints] = useState('');
  const [formTags, setFormTags] = useState(['User created']);
  const [tags] = useState([
    { title: 'User created' },
    { title: 'Array' },
    { title: 'Hash Table' },
    { title: 'Dynamic Programming' },
    { title: 'Prefix Sum' },
    { title: 'Divide and Conquer' },
    { title: 'Binary Search' },
    { title: 'Sorting' },
    { title: 'Two Pointers' },
    { title: 'Memoization' },
    { title: 'Breath-First Search' },
    { title: 'String' },
    { title: 'Rolling Hash' },
    { title: 'Sliding Window' },
    { title: 'BitMask' },
    { title: 'Bit Manipulation' },
  ]);

  const handleSubmit = () => {
    let inputString = `${param1} = ${val1}`;

    if (param2) {
      inputString += `, ${param2} = ${val2}`;
    }

    if (param3) {
      inputString += `, ${param3} = ${val3}`;
    }

    const examples = [
      { input: inputString, output: exOutput },
    ];

    const newPrompt = {
      name: promptName,
      prompt: promptBody,
      difficulty,
      tags: formTags,
      constraints,
      examples,
      author: currentUserId,
    };

    axios.post(`/api/problems/${currentUserId}`, newPrompt)
      .catch((err) => console.log(err));
  };

  return (
    <form className="PromptForm">
      <div className="PromptRow">
        <label htmlFor="promptName" className="PromptLabel">
          Prompt Name
          <input
            type="text"
            name="propmptName"
            onChange={(event) => {
              setPromptName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="PromptRow">
        <label htmlFor="promptdifficulty" className="PromptLabel">
          difficulty
          <select
            onChange={(event) => {
              setDifficulty(event.target.value);
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <Tags tags={tags} formTags={formTags} setTags={setFormTags} />
        <label htmlFor="promptCOnstraints" className="PromptLabel">
          Constraints
          <input
            type="text"
            name="propmptConstraints"
            onChange={(event) => {
              setConstraints(event.target.value);
            }}
          />
        </label>
      </div>

      <div className="PromptRow">
        <label htmlFor="promptBody" className="PromptLabel">
          Prompt Body
          <textarea
            type="textarea"
            name="promptBody"
            onChange={(event) => {
              setPromptBody(event.target.value);
            }}
          />
        </label>
        <label htmlFor="promptExamples" className="PromptLabel">
          Prompt Example
          <div>
            <div><b>Input(s): </b></div>
            <label style={{ display: 'inline-block' }}>Param&nbsp;</label>
            <input
              style={{ display: 'inline-block', width: '60px' }}
              type="text"
              onChange={(event) => {
                setParam1(event.target.value);
              }}
            />
            &nbsp;=&nbsp;
            <input
              style={{ display: 'inline-block' }}
              type="text"
              onChange={(event) => {
                setVal1(event.target.value);
              }}
            />
          </div>
          <div>
            <label style={{ display: 'inline-block' }}>Param&nbsp;</label>
            <input
              style={{ display: 'inline-block', width: '60px' }}
              type="text"
              onChange={(event) => {
                setParam2(event.target.value);
              }}
            />
            &nbsp;=&nbsp;
            <input
              style={{ display: 'inline-block' }}
              type="text"
              onChange={(event) => {
                setVal2(event.target.value);
              }}
            />
          </div>
          <div>
            <label style={{ display: 'inline-block' }}>Param&nbsp;</label>
            <input
              style={{ display: 'inline-block', width: '60px' }}
              type="text"
              onChange={(event) => {
                setParam3(event.target.value);
              }}
            />
            &nbsp;=&nbsp;
            <input
              style={{ display: 'inline-block' }}
              type="text"
              onChange={(event) => {
                setVal3(event.target.value);
              }}
            />
          </div>
          <div className="NewOutput">
            <label htmlFor="promptOutputs">
              <b>Output:&nbsp;</b>
              <input
                type="text"
                onChange={(event) => {
                  setExOutput(event.target.value);
                }}
              />
            </label>
          </div>
        </label>
      </div>
      <div className="PromptRow">
        <button
          className="SubmitPrompt"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>

    </form>
  );
}
