import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Dropzonearea from "src/components/Dropzonearea";
const C2ABox = styled("Box")(({ theme }) => ({
  "& .imageC2aBox": {
    borderRadius: "20px",
    flexDirection: "column",
    padding: "30px",
    background: "#F7F7F7",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
}));
export default function ImageUploadC2A() {
  return (
    <C2ABox>
      <Box className="imageC2aBox">
        <Box>
          <Box className="displayStart" mb={3}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Image & Call to Action</Typography>
          </Box>
          <Dropzonearea />

          <Button variant="contained" color="primary" style={{marginTop:"24px"}}>
            purchase Now
          </Button>
        </Box>
      </Box>
    </C2ABox>
  );
}
ImageUploadC2A.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
