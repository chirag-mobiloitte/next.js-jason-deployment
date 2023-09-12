import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  FormControl,
  TextField,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .step2Box": {
    margin: "40px 0px",
    "& h2": {
      color: "#161E29",
    },

    "& .writeBox": {
      "& h5": {
        color: "#161E29",
        fontWeight: 400,
      },
      "& p": {
        color: "rgba(22, 30, 41, 0.60)",
        fontWeight: 300,
      },
    },
    "& .documentType": {
      "& p": {
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: "200",
        marginBottom: "8px",
      },
    },
  },
}));

export default function Step2Component() {
  return (
    <MainDocumentBox>
      <Box elevation={3} className="step2Box">
        <Typography variant="h2">Create a Document</Typography>

        <Box style={{ marginTop: "50px" }}>
          <Grid Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className="writeBox">
                <Typography variant="h5">Living Will</Typography>
                <Typography variant="body1">
                  Provide answer of some questions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className="documentType">
                <Box>
                  <Typography variant="body2">
                    Who is this document for?
                  </Typography>
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Type name"
                    />
                  </FormControl>
                </Box>
                <Box style={{ marginTop: "16px" }}>
                  <Typography variant="body2">
                    What is their address?
                  </Typography>
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Type name"
                    />
                  </FormControl>
                </Box>
                <Box style={{ marginTop: "16px" }}>
                  <Typography variant="body2">
                    What is their date of birth?
                  </Typography>
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Type name"
                    />
                  </FormControl>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainDocumentBox>
  );
}

Step2Component.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
