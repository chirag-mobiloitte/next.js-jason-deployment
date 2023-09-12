import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Paper, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
const ProfileBox = styled(Box)(({ theme }) => ({
  "& .paperBox": {
    "& .perpalBox": {
      backgroundColor: "#7A69FE",
      borderRadius: "50%",
      width: "85px",
      height: "85px",
      padding: "17px",
    },
    "& h6": {
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
export default function CarePlanCard({ data }) {
  return (
    <ProfileBox>
      <Paper elevation={3}>
        <Box className="paperBox">
          <Box className="displayColumn">
            <Box className={`perpalBox displayCenter`}>
              <img src={data?.img} alt="" width="100%" />
            </Box>
          </Box>

          <Box>
            <Typography variant="h6">{data?.text1}</Typography>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box display="flex" alignItems="center">
                  <img
                    src="/images/card/docno.png"
                    alt=""
                    width="100%"
                    style={{ width: "100%", maxWidth: "17px" }}
                  />
                  <Typography variant="body2">{data?.price1}</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box display="flex" alignItems="center">
                  <img
                    src="/images/card/docdata.png"
                    alt=""
                    width="100%"
                    style={{ width: "100%", maxWidth: "24px" }}
                  />
                  <Typography variant="body2">{data?.price2}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </ProfileBox>
  );
}

CarePlanCard.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
