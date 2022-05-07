import React from 'react';
import styled from 'styled-components';

const PromptFoprm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const TextLabel = styled.label`
  width: 50%
`;

const TopLabel = styled.label`
  width: 100%
`;

const ButtonDiv = styled.div`
  width: 100%
`;

export default function AddNewPrompt() {
  return (
    <PromptFoprm>

      <TopLabel htmlFor="promptName">
        <input type="text" name="propmptName" />
        Prompt Name
      </TopLabel>

      <TextLabel htmlFor="promptBody">
        <textarea type="textarea" name="body" />
        Prompt Body
      </TextLabel>

      <TextLabel htmlFor="testsBody">
        <textarea type="textarea" name="testsBody" />
        Tests Body
      </TextLabel>

      <ButtonDiv>
        <button type="submit">
          Submit
        </button>
      </ButtonDiv>

    </PromptFoprm>
  );
}
