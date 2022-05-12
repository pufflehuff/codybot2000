/* eslint-disable no-eval */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
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
    <div className="PromptPage">
      <div className="PromptPageLeft">
        <div className="playground">
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
            handleClick={handleClick}
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
      <div className="PromptPageRight">
        <div className="PromptContainer">
          <Prompt problem={problem} />
        </div>
      </div>
    </div>
  );
}
