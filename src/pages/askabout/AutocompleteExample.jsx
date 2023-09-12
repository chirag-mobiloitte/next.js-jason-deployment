import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

export default function AutocompleteExample() {
  return (
    <Box style={{ width: "100%" }}>
      <Autocomplete
        freeSolo
        disableClearable
        fullWidth
        options={selectoption.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const selectoption = [{ title: "Enter meeting chair name" }];
