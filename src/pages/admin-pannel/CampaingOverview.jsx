import { Box, Button, Paper, Typography, styled } from "@mui/material";
import React from "react";
import { BsArrowRight, BsFillShareFill, BsUpload } from "react-icons/bs";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .shadowBox": {
      borderRadius: "20px",
      flexDirection: "column",
      padding: "40px",
      background: `url("/images/admin/gradient.png")`,
      width: "100%",
      backgroundSize: "cover !important",
      backgroundRepeat: "no-repeat !important",
      objectFit: "cover !important",
    },
    "& h6": {
      color: "#FFF",
      fontWeight: 400,
      marginLeft: "8px",
    },
    "& .hornBox": {
      height: "200px",
      "& img": {
        position: "relative",
        top: "0px",
        padding: "5px",
        width: "100%",
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat !important",
        objectFit: "cover !important",
        maxWidth: "200px",
      },
    },
    "& button": {
      border: "1.5px solid rgba(255, 255, 255, 0.25)",
      background: "rgba(255, 255, 255, 0.08)",
      color: "#FFF",
    },
    "& .whiteBox": {
      borderRadius: "3px",
      background: "#FFF",
      padding: "10px 5px",
    },
  },
}));
export default function CampaingOverview({ data }) {
  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className={`shadowBox displayCenter`}>
          <Box className={`displayStart`} mb={1}>
            <Box className="whiteBox"></Box>
            <Typography variant="h6">Campaign Overview</Typography>
          </Box>
          <Box className="hornBox">
            <img src="/images/admin/horn.svg" alt="centerImg" />
          </Box>
          <Button
            style={{ margin: "20px 0px" }}
            variant="outlined"
            color="secondary"
          >
            View All Campaigns
          </Button>
        </Box>
      </Box>
    </MainComponent>
  );
}
CampaingOverview.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
