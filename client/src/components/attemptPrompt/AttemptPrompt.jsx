/* eslint-disable no-eval */
import React, { useState } from 'react';
<<<<<<< HEAD
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
=======
import { useLocation } from 'react-router-dom';
>>>>>>> main
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
import Confetti from 'react-confetti';
import Modal from '@mui/material/Modal';
import SetTimer from '../timer/SetTimer';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import Editor from './Editor';
import Prompt from './Prompt';

const defaultProblem = {
  name: 'Two Sum',
  prompt: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.',
  tags: ['math', 'algo'],
  examples: [
    { input: 'nums = [2,7,11,15], target = 9', output: '[0, 1]' },
    { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    { input: 'nums = [3,3], target = 6', output: '[0,1]' },
  ],
  constraints: ['`2 <= nums.length <= 10^4`', '`-10^9 <= nums[i] <= 10^9`', '`-10^9 <= target <= 10^9`', '*Only one valid answer exists*'],
  difficulty: 'easy',
  reported_count: 2,
  rating: 3.5,
  ratings_count: 16,
  timestamp: '2022-5-6',
  author: 'leetcode',
};

export default function AttemptPrompt() {
  const location = useLocation();
  let problem = defaultProblem;
  if (location.state.problem) {
    problem = location.state.problem;
  }
  // // THIS IS FOR CURRENT USER
  // const { currentUserId } = location.state;
  // console.log(currentUserId);

  // Add parameters to default function
  let params = problem.examples[0].input.split(', ');
  params = params.map((param) => param.slice(0, param.indexOf(' ')));

  const defaultText = (
    `function toyProblem(${params.join(', ')}) {
  // Your Code Here

};

toyProblem(/* input */);`);

  const [html, setHtml] = useState(null);
  const [js, setJs] = useState(defaultText);
  const [testsPassed, setPassed] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-eval
    try {
      if (!html) {
        setHtml(`  > ${eval(`${js}`)}`);
      } else {
        setHtml(`${html}\n  > ${eval(`${js}`)}`);
      }
    } catch (err) {
      console.log(err);
      if (!html) {
        setHtml(`  > ${err}`);
      } else {
        setHtml(`${html}\n  > ${err}`);
      }
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setHtml('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let passed = false;

    problem.examples.forEach((example) => {
      let args = example.input.split(',');
      args = args.map((arg) => arg.slice(arg.indexOf('=') + 2));
      args = args.join(', ');
      const test = `toyProblem(${args});`;

      passed = `${eval(`${js + test}`)}` === problem.output;

      console.log(js + test);
      console.log(eval(`${js + test}`));
    });
    setPassed(passed);
  };

  return (
    <div className="PromptPage">
      <div className="PromptPageLeft">
        <div className="playground">
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="PromptPageRight">
        <div className="PromptContainer">
          <Prompt problem={problem} />
        </div>
        <div className="result">
          <div className="editor-header">
            <button type="button" onClick={(e) => handleClear(e)}>Clear</button>
          </div>
          <ControlledEditor
            value={html}
            className="code-mirror-wrapper"
            options={{
              linewrapping: true,
              theme: 'material',
              readOnly: true,
            }}
          />
        </div>
      </div>
      <Modal open={testsPassed}>
      <div className="PromptSubmit">
        <Confetti
          recycle={false}
          run={testsPassed}
          numberOfPieces={1000}
          gravity={2}
        />
        <h1>Great Job! You Passed!</h1>
      </div>
    </Modal>
    </div>
  );
}
