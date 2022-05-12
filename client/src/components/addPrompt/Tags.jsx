/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags({ tags, formTags, setTags }) {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={tags.map((option) => option.title)}
        defaultValue={[tags[0].title]}
        freeSolo
        renderTags={(value, getTagProps) => value.map((option, index) => {
          let exists = false;
          formTags.forEach((tag) => {
            if (tag === option) {
              exists = true;
            }
          });
          if (!exists) {
            const arr = formTags;
            arr.push(option);
            setTags(arr);
          }
          return (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          );
        })}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Add tags"
            placeholder="tag"
          />
        )}
      />
    </Stack>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  formTags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};
