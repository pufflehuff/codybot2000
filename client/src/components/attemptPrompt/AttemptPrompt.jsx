import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
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

function AttemptPrompt() {
  const location = useLocation();
  const { problem } = location.state;

  console.log(problem);

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
          <iframe
            title="output"
            srcDoc={srcDoc}
            sandbox="allow-scripts"
            frameBorder="0"
            // width="100%"
            // height="100%"
            className="iframe"
          />
        </div>
      </Right>
    </Page>
  );
}

export default AttemptPrompt;
