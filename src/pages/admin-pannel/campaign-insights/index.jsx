import HomeLayout from "src/layout/HomeLayout";
import { Container, Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import BargraphChart from "../BargraphChart";
import InsightsCard from "src/components/InsightsCard";
import CampaignCategories from "../CampaignCategories";
import { insightData } from "src/data";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .adminBox": {
    "& h6": {
      color: "#161E29",
      fontWeight: 500,
      marginLeft: "8px",
    },
    "& .searchBox": {
      "& button": {
        background: "transparent !important",
      },
      "& svg": {
        fontSize: "20px",
      },
    },
    "& .css-knar8-MuiButtonBase-root-MuiButton-root": {
      color: "#FFF",
      background: "#7A69FE",
    },
  },
}));

export default function index() {
  return (
    <Box className="mainContainerHomeLayout">
      <MainComponent>
        <Box className="adminBox">
          <Box mt={5} mb={5}>
            <Container>
              <Box mb={3}>
                <Typography variant="h2">Campaign Insights</Typography>
              </Box>
              <Paper elevation={3}>
                <Grid container spacing={3}>
                  {insightData &&
                    insightData?.map((data, index) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                          <InsightsCard data={data} index={index} />
                        </Grid>
                      );
                    })}
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} sm={6} md={8} lg={8}>
                    <BargraphChart />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CampaignCategories />
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </Box>
        </Box>
      </MainComponent>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
