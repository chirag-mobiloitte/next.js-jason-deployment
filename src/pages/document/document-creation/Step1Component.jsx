import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Grid, FormControl, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .step1Box": {
    margin: "40px 0px",
    "& h2": {
      color: "#161E29",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
      marginTop: "30px",
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

export default function Step1Component() {
  return (
    <MainDocumentBox>
      <Box className="step1Box">
        <Typography variant="h2">Create a Document</Typography>
        <Typography variant="body2">
          Here you will see a list of pre-existing document templates. If the
          document you need is listed, Click on it to select and start editing.
          If you cannot find the right document template in the list, choose the
          option to “Create new document”.
        </Typography>

        <Box style={{ marginTop: "50px" }}>
          <Grid Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className="writeBox">
                <Typography variant="h5">Write Details</Typography>
                <Typography variant="body1">
                  Provide your personal Details
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className="documentType">
                <Typography variant="body2">
                  What type of document would you like to create?
                </Typography>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                  />
                </FormControl>
                <Typography variant="body2" style={{ marginTop: "16px" }}>
                  Tell us more about this document?
                </Typography>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type name"
                    multiline
                    rows={5}
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainDocumentBox>
  );
}

Step1Component.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
