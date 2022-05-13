import React, { useState } from 'react';
import Tags from './Tags';

export default function AddNewPrompt() {
  // THIS IS FOR CURRENT USER
  // const location = useLocation();
  // const { currentUserId } = location.state;
  // console.log(currentUserId);
  // THIS IS FOR CURRENT USER
  const [promptName, setPromptName] = useState('');
  const [promptBody, setPromptBody] = useState('');
  const [dificulty, setDificulty] = useState('');
  const [paramNames, setParamNames] = useState('');
  const [paramVals, setParamVals] = useState('');
  const [exOutput, setExOutput] = useState('');
  const [constraints, setConstraints] = useState('');
  const [formTags, setFormTags] = useState(['User created']);
  const [tags] = useState([
    { title: 'User created' },
    { title: 'Array' },
    { title: 'Hash Table' },
    { title: 'Dynamic Programming' },
    { title: 'Prefix Sum' },
    { title: 'Divide and Conquer' },
    { title: 'Binary Search' },
    { title: 'Sorting' },
    { title: 'Two Pointers' },
    { title: 'Memoization' },
    { title: 'Breath-First Search' },
    { title: 'String' },
    { title: 'Rolling Hash' },
    { title: 'Sliding Window' },
    { title: 'BitMask' },
    { title: 'Bit Manipulation' },
  ]);

  const handleSubmit = () => {
    // timestamp: body.timestamp,
    //      author: body.author,

    const inputNamesArr = paramNames.split(', ');
    const inputValsArr = paramVals.split(', ');
    const inputStrings = [];

    for (let i = 0; i < inputNamesArr.length; i += 1) {
      if (inputNamesArr.length !== inputValsArr.length) {
        console.log('please make sure the numbe if input names,m and values match');
        return;
      }

      const inputString = `${inputNamesArr[i]} = ${inputValsArr[i]}`;
      inputStrings.push(inputString);
    }

    let inputsString = '';

    inputStrings.forEach((string) => {
      inputsString += `${string}, `;
    });

    inputsString = inputsString.substring(0, inputsString.length - 2);

    const outputString = `${exOutput}`;

    const examples = [
      { input: inputsString, output: outputString },
    ];

    console.log(examples);

    const newPrompt = {
      name: promptName,
      prompt: promptBody,
      dificulty,
      tags: formTags,
      constraints,
      examples,
      rating: 0,
      numRatings: 0,
    };
    console.log(newPrompt);
  };

  return (
    <form className="PromptForm">
      <div className="PromptRow">
        <label htmlFor="promptName" className="PromptLabel">
          Prompt Name
          <input
            type="text"
            name="propmptName"
            onChange={(event) => {
              setPromptName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="PromptRow">
        <label htmlFor="promptDificulty" className="PromptLabel">
          Dificulty
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
        <Tags tags={tags} formTags={formTags} setTags={setFormTags} />
        <label htmlFor="promptCOnstraints" className="PromptLabel">
          Constraints
          <input
            type="text"
            name="propmptConstraints"
            onChange={(event) => {
              setConstraints(event.target.value);
            }}
          />
        </label>
      </div>

      <div className="PromptRow">
        <label htmlFor="promptBody" className="PromptLabel">
          Prompt Body
          <textarea
            type="textarea"
            name="promptBody"
            onChange={(event) => {
              setPromptBody(event.target.value);
            }}
          />
        </label>

        <label htmlFor="promptExamples" className="PromptLabel">
          Prompt Examples

          <label htmlFor="promptParams">
            Parameter Names
            <input
              type="text"
              onChange={(event) => {
                setParamNames(event.target.value);
              }}
            />
          </label>

          <label htmlFor="promptParamVals">
            Parameter Values
            <input
              type="text"
              onChange={(event) => {
                setParamVals(event.target.value);
              }}
            />
          </label>
          <label htmlFor="promptOutputs">
            Expected Ouput
            <input
              type="text"
              onChange={(event) => {
                setExOutput(event.target.value);
              }}
            />
          </label>
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
