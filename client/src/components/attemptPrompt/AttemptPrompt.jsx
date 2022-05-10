import React, { useState, useEffect } from 'react';
import Editor from './Editor';

function AttemptPrompt() {
  const [html, setHtml] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    setSrcDoc(`
      <html>
        <body>${html}</body>
      </html>
    `);
    // const timeout = setTimeout(() => {
    // }, 250);

    // return () => clearTimeout(timeout);
  }, [html]);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-eval
      setHtml(`${html}<br>> ${eval(`${js}`)}`);
    } catch (err) {
      setHtml(`${html} <br>> ${err}`);
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
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          className="iframe"
        />
      </div>
    </div>
  );
}

export default AttemptPrompt;
