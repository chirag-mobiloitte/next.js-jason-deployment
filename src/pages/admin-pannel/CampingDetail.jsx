import { campaingData } from "src/data";
import { Box, Typography, styled, Grid } from "@mui/material";
import React from "react";

const MainComponent = styled("Box")(() => ({
  "& .mainCardBox": {
    "& .shadowBox": {
      borderRadius: "20px",
      flexDirection: "column",
      padding: "16px",
      background: "#F7F7F7",
      width: "100%",
    },
    "& h6": {
      color: "#161E29",
      fontWeight: 500,
      marginLeft: "8px",
    },
    "& p": {
      color: "#161E29",
      fontWeight: 500,
    },
    "& .campingImgBox": {
      height: "100px",
      "& img": {
        position: "relative",
        top: "0px",
        width: "100%",
        borderRadius: "10px",
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat !important",
        objectFit: "cover !important",
        maxWidth: "250px",
      },
    },

    "& .campaingBox": {
      margin: "8px 0px",
    },
  },
}));
export default function CampingDetail() {
  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="shadowBox">
          <Box className="displayStart" mb={1}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Campaign Details</Typography>
          </Box>

          <Grid container spacing={3}>
            {campaingData &&
              campaingData?.map((data, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box className="campaingBox">
                      <Box className="campingImgBox">
                        <img src={data?.img} alt="centerImg" />
                      </Box>
                      <Box className="displayStart">
                        <Typography variant="body2">
                          {data?.text ? data?.text : "N/A"}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            marginLeft: "8px",
                            color: "var(--style, rgba(22, 30, 41, 0.60))",
                            fontWeight: 600,
                          }}
                        >
                          {data?.size ? data?.size : "N/A"}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </MainComponent>
  );
}
CampingDetail.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
