import React from 'react';

export default function AddNewPrompt() {
  return (
    <form className="PromptFrom">

      <label htmlFor="promptName" className="PromptTopLabel">
        <input type="text" name="propmptName" />
        Prompt Name
      </label>

      <label htmlFor="promptBody" className="PromptTextLabel">
        <textarea type="textarea" name="body" />
        Prompt Body
      </label>

      <label htmlFor="testsBody">
        <textarea type="textarea" name="testsBody" className="PromptTextLabel" />
        Tests Body
      </label>

      <div className="PromptButton">
        <button type="submit">
          Submit
        </button>
      </div>

    </form>
  );
}
