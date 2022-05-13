/* eslint-disable no-eval */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
import Confetti from 'react-confetti';
import Modal from '@mui/material/Modal';
import SetTimer from '../timer/SetTimer';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import Editor from './Editor';
import Prompt from './Prompt';

let params;
let name;
let modalText = 'Great Job! You Passed!';

const buildText = (problem) => {
  params = problem.examples[0].input.split(', ');
  params = params.map((param) => param.slice(0, param.indexOf(' ')));

  name = problem.name.split(' ', 2);
  name[0] = name[0].toLowerCase();
  name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
  name = name.join('').replace(/[^a-zA-Z0-9]/g, '_');

  return (`function ${name}(${params.join(', ')}) {`
    + `\n // Your Code Here\n\n};\n\n${name}(/* input */);`);
};

export default function AttemptPrompt() {
  const location = useLocation();
  const { problem } = location.state;
  // // THIS IS FOR CURRENT USER
  // const { currentUserId } = location.state;
  // console.log(currentUserId);

  const [html, setHtml] = useState(null);
  const [js, setJs] = useState(buildText(problem));
  const [testsPassed, setPassed] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-eval
    try {
      if (!html) {
        setHtml(`  > ${JSON.stringify(eval(`${js}`))}`);
      } else {
        setHtml(`${html}\n  > ${JSON.stringify(eval(`${js}`))}`);
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

    for (let i = 0; i < problem.examples.length; i += 1) {
      const example = problem.examples[i];
      let args = example.input.split(', ');
      args = args.map((arg) => arg.slice(arg.indexOf('= ') + 2));
      args = args.join(', ');
      const test = `${name}(${args});`;

      passed = JSON.stringify(eval(`${js + test}`)) === JSON.stringify(example.output);
      if (!passed) {
        modalText = `Oh No! Expected ${JSON.stringify(example.output)} but got ${JSON.stringify(eval(`${js + test}`))}`;
        setShow(true);
        break;
      }
    }

    if (passed) { setPassed(true); }
    setShow(true);
  };

  const timeExpire = () => {
    // eslint-disable-next-line no-alert
    alert('You have run out of time');
  };

  // if (testsPassed) {
  //   modalText = <h1>Great Job! You Passed!</h1>;
  // } else {
  //   modalText = <h1>Oh No! Review and Try Again</h1>;
  // }
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
        <div className="result">
          <div className="editor-header">
            <button type="button" onClick={(e) => handleClear(e)}>Clear</button>
            <SetTimer expire={timeExpire} />
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
      <div className="PromptPageRight">
        <div className="PromptContainer">
          <Prompt problem={problem} />
        </div>
      </div>
      <Modal
        open={show}
        onClick={() => setShow(false)}
      >
        <div className="PromptSubmit">
          <Confetti
            recycle={false}
            run={testsPassed}
            numberOfPieces={1000}
            gravity={2}
          />
          <h1>{modalText}</h1>
        </div>
      </Modal>
    </div>
  );
}
