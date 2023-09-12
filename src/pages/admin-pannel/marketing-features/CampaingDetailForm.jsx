import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Grid, FormControl, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
const MainFormBox = styled("Box")(({ theme }) => ({
  "& .campingFormBox": {
    borderRadius: "20px",
    flexDirection: "column",
    padding: "30px",
    background: "#F7F7F7",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
    },
    "& .css-1blfdnv-MuiInputBase-root-MuiOutlinedInput-root ": {
      marginBottom: "16px",
    },
    "& .documentType": {
      "& p": {
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: "400",
        marginBottom: "8px",
      },
    },
  },
}));
export default function CampaingDetailForm() {
  return (
    <MainFormBox>
      <Box className="campingFormBox">
        <Box>
          <Box className="displayStart" mb={3}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Campaign Details</Typography>
          </Box>
          <Box className="documentType" mb={3}>
            <Typography variant="body1">Campaign Title</Typography>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                placeholder="Enter campaign title"
              />
            </FormControl>
          </Box>
          <Box className="documentType" mb={3}>
            <Typography variant="body1">Campaign Description</Typography>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                multiline
                rows={5}
                placeholder="Add campaign description"
              />
            </FormControl>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="documentType">
                <Typography variant="body1">Objective 1</Typography>
                <FormControl fullWidth>
                  <TextField variant="outlined" placeholder="Enter Location" />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="documentType">
                <Typography variant="body1">Objective 2</Typography>
                <FormControl fullWidth>
                  <TextField variant="outlined" placeholder="Enter Location" />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="documentType">
                <Typography variant="body1">Objective 3</Typography>
                <FormControl fullWidth>
                  <TextField variant="outlined" placeholder="Enter Location" />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="documentType">
                <Typography variant="body1">Objective 4</Typography>
                <FormControl fullWidth>
                  <TextField variant="outlined" placeholder="Enter Location" />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainFormBox>
  );
}
CampaingDetailForm.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
