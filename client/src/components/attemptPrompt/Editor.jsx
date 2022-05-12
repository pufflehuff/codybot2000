import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import PropTypes from 'prop-types';

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange,
    handleClick,
    handleSubmit,
  } = props;

  const handleChange = (editor, data, val) => {
    onChange(val);
  };

  return (
    <div className="code-editor">
      <div className="editor-header">
        {displayName}
        <button type="button" className="run" onClick={(e) => handleClick(e)}>Run</button>
        <button type="button" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          linewrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}

Editor.propTypes = {
  language: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
