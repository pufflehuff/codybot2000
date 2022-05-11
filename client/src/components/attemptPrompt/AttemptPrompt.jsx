/* eslint-disable no-eval */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import Editor from './Editor';
import Prompt from './Prompt';

const Page = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const PromptContainer = styled.div`
  height: 500px;
  padding: 20px;
`;

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
  if (location.state) {
    problem = location.state.problem;
  }

  const [html, setHtml] = useState(null);
  const [js, setJs] = useState('');

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

  return (
    <Page>
      <Left className="ToyProblemLeft">
        <div className="playground">
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
            handleClick={handleClick}
          />
        </div>
      </Left>
      <Right className="ToyProblemRight">
        <PromptContainer>
          <Prompt problem={problem} />
        </PromptContainer>
        <div className="result">
          <button type="button" onClick={(e) => handleClear(e)}>Clear</button>
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
      </Right>
    </Page>
  );
}
