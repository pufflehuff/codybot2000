/* eslint-disable no-eval */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
import Confetti from 'react-confetti';
import Modal from '@mui/material/Modal';
// import SetTimer from '../timer/SetTimer';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import Editor from './Editor';
import Prompt from './Prompt';

export default function AttemptPrompt() {
  const location = useLocation();
  const { problem } = location.state;
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
  const [testsPassed, setPassed] = useState(false);
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
    setShow(true);
  };
  let modalText;
  if (testsPassed) {
    modalText = <h1>Great Job! You Passed!</h1>;
  } else {
    modalText = <h1>Oh No! Review and Try Again Later</h1>;
  }
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
      <Modal
        open={show}
        onClose={() => setShow(false)}
      >
        <div className="PromptSubmit">
          <Confetti
            recycle={false}
            run={testsPassed}
            numberOfPieces={1000}
            gravity={2}
          />
          {modalText}
        </div>
      </Modal>
      <div className="PromptPageRight">
        <div className="PromptContainer">
          <Prompt problem={problem} />
        </div>
      </div>
    </div>
  );
}
