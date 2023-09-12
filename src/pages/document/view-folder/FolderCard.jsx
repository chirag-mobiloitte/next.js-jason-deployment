import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Paper, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
const ProfileBox = styled(Box)(({ theme }) => ({
  "& .paperBox": {
    "& .milkeyBox": {
      backgroundColor: "rgba(22, 30, 41, 0.04)",
      borderRadius: "50%",
      width: "85px",
      height: "85px",
    },
    "& h5": {
      margin: "20px 0px",
      fontSize: "20px",
      fontWeight: "500",
    },
    "& img": {
      display: "flex",
      alignItems: "center",
    },
    "& p": {
      marginLeft: "10px",
    },
  },
}));
export default function FolderCard({ data }) {
  return (
    <ProfileBox>
      <Paper elevation={3} className="paperBox">
        <Box className="displayColumn">
          <Box className={`milkeyBox displayCenter`}>
            <img
              src={data?.img}
              alt=""
              width="100%"
              style={{ width: "100%", maxWidth: "50px", margin: "0 auto" }}
            />
          </Box>
          <Box>
            <Typography variant="h5">{data?.text}</Typography>
          </Box>
        </Box>
      </Paper>
    </ProfileBox>
  );
}

FolderCard.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
