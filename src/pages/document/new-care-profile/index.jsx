import React, { useState } from "react";
import { styled } from "@mui/system";
import HomeLayout from "src/layout/HomeLayout";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import EditorComponent from "./EditorComponent";

const CareProfile = styled("div")(({ theme }) => ({
  "& .careProfileBox": {
    "& p": {
      margin: "16px 0px 8px 0px",
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: "200",
    },
  },
}));

const selectOptions = ["Ten", "Twenty", "Thirty"];

export default function NewCareProfile({ placeholder }) {
  const [selectedAges, setSelectedAges] = useState({
    age1: "Ten",
    age2: "Ten",
    age3: "Ten",
  });

  const handleAgeChange = (event, key) => {
    setSelectedAges({ ...selectedAges, [key]: event.target.value });
  };


  return (
    <Box className="mainContainerHomeLayout">
      <CareProfile>
        <Container>
          <Box className="careProfileBox">
            <Typography variant="h2">Email Writer</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box>
                  <Typography variant="body2">
                    Paste Email Responding to
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                    multiline
                    rows={3}
                  />
                </Box>
                {["Select Language", "Select Tone", "Choose Email Type"].map(
                  (label, index) => (
                    <Box key={index}>
                      <Typography variant="body2">{label}</Typography>
                      <FormControl fullWidth>
                        <Select
                          value={selectedAges[`age${index + 1}`]}
                          onChange={(e) => handleAgeChange(e, `age${index + 1}`)}
                        >
                          {selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  )
                )}
                <Box>
                  <Typography variant="body2">
                    Turn a few key points into a ready-to-send email
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                  />
                </Box>
                <Box>
                  <Typography variant="body2">Key Points</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                  />
                </Box>
                <Box>
                  <Typography variant="body2">Number Of Variants</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                  />
                </Box>
                <Box>
                  <Typography variant="body2">Creativity Level</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                  />
                </Box>
                <Box my={2}>
                  <Button variant="contained" color="primary">Submit</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box mt={4}>
                  <EditorComponent />
                  <Box my={2}>
                  <Button variant="contained" color="primary">Copy Email</Button>
                </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </CareProfile>
    </Box>
  );
}

NewCareProfile.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};