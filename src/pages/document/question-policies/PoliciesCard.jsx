import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Paper, Grid, Divider } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const ProfileBox = styled(Box)(({ theme }) => ({
  "& .paperBox": {
    height: "100%",
    minHeight: "294px",
    "& .pinkBox": {
      backgroundColor: "#FFE7F6",
      borderRadius: "50%",
      width: "85px",
      height: "85px",
      padding: "16px",
    },
    "& h6": {
      margin: "20px 0px",
      color: "#161E29",
      fontWeight: "300",
      lineHeight: "146.5%",
    },
  },
}));
export default function PoliciesCard({ data }) {
  return (
    <ProfileBox>
      <Paper elevation={3} className="paperBox">
        <Box className="displayColumn">
          <Box className={`pinkBox displayCenter`}>
            <img src={data?.img} alt="documentImage" width="100%" />
          </Box>
          <Box style={{ minHeight: "100px" }}>
            <Typography variant="h6">{data?.text}</Typography>
          </Box>

          <Divider
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.15)",
              width: "100%",
              marginTop: "16px",
            }}
          />
        </Box>
      </Paper>
    </ProfileBox>
  );
}

PoliciesCard.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
