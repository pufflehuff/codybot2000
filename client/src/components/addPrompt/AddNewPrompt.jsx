import React, { useState } from 'react';

export default function AddNewPrompt() {
  const [promptName, setPromptName] = useState('');
  const [promptBody, setPromptBody] = useState('');
  const [testsBody, setTestsBody] = useState('');
  const [dificulty, setDificulty] = useState('');
  const [constraints, setConstraints] = useState('');

  const handleSubmit = () => {
    console.log(promptName, promptBody, testsBody);
    // examples: body.examples,
    // constraints: body.constraints,
    // tags: body.tags,
    // timestamp: body.timestamp,
    //      author: body.author,

    const newPrompt = {
      name: promptName,
      prompt: promptBody,
      dificulty,
      constraints,
      rating: 0,
      numRatings: 0,
    };
    console.log(newPrompt);
  };

  return (
    <form className="PromptFrom">

      Prompt Name
      <label htmlFor="promptName" className="PromptLabel">
        <input
          type="text"
          name="propmptName"
          onChange={(event) => {
            setPromptName(event.target.value);
          }}
        />
      </label>

      Dificulty
      <label htmlFor="promptDificulty" className="PromptLabel">
        <select
          onChange={(event) => {
            setDificulty(event.target.value);
          }}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </label>

      Constraints
      <label htmlFor="promptCOnstraints" className="PromptLabel">
        <input
          type="text"
          name="propmptConstraints"
          onChange={(event) => {
            setConstraints(event.target.value);
          }}
        />
      </label>

      <div className="PromptRow">
        Prompt Body
        <label htmlFor="promptBody" className="PromptLabel">
          <textarea
            type="textarea"
            name="promptBody"
            onChange={(event) => {
              setPromptBody(event.target.value);
            }}
          />
        </label>

        Tests Body
        <label htmlFor="testsBody" className="PromptLabel">
          <textarea
            type="textarea"
            name="testsBody"
            onChange={(event) => {
              setTestsBody(event.target.value);
            }}
          />
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
