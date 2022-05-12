/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags({ tags, setTags }) {
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
          tags.forEach((tag) => {
            if (tag.title === option) {
              exists = true;
            }
          });
          if (!exists) {
            const arr = tags;
            arr.push({ title: option });
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
