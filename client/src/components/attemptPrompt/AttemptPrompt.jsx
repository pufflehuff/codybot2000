/* eslint-disable no-eval */
import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import Editor from './Editor';

function AttemptPrompt() {
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
    <div>
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
    </div>
  );
}

export default AttemptPrompt;
