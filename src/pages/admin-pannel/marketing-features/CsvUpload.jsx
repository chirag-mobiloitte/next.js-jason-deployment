import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import DropzoneCSV from "src/components/DropzoneCSV";
const CSVBox = styled("Box")(({ theme }) => ({
  "& .csvBoxClass": {
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
export default function CsvUpload() {
  return (
    <CSVBox>
      <Box className="csvBoxClass">
        <Box>
          <Box className="displayStart" mb={3}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Upload EmailList (CSV)</Typography>
          </Box>
          <DropzoneCSV />
        </Box>
      </Box>
    </CSVBox>
  );
}
CsvUpload.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
