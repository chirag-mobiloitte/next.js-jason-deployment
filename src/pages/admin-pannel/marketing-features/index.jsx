import HomeLayout from "src/layout/HomeLayout";
import { Container, Box, Grid, Typography, Button, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import DonutChart from "../DonutChart";
import Calender from "../Calender";
import CampaingDetailForm from "./CampaingDetailForm";
import ImageUploadC2A from "./ImageUploadC2A";
import CsvUpload from "./CsvUpload";
import TrainingData from "./TrainingData";
import ChatBotSection from "./ChatBotSection";
import ButtonBox from "./ButtonBox";
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
    
  },
}));

export default function index({ data }) {
  const router = useRouter();

  return (
    <Box className="mainContainerHomeLayout">
      <MainComponent>
        <Box className="adminBox">
          <Box mb={5}>
            <Container>
              <Box className="displaySpacebetween displayWrap" mb={3}>
                <Typography variant="h2">New Campaign Setup</Typography>
                <Box className="displayStart displayWrap">
                  <Button
                    variant="contained"
                    color="primary"
                    className="sortButton"
                  >
                    New Campaign
                  </Button>
                </Box>
              </Box>
              <Paper elevation={3}>
                <Grid container spacing={2} mt={1}>
                  <Grid item xs={12} sm={6} md={8} lg={8}>
                    <CampaingDetailForm />
                    <Box mt={2}>
                      <ImageUploadC2A />
                    </Box>
                    <Box mt={2}>
                      <CsvUpload />
                    </Box>
                    <Box mt={2}>
                      <TrainingData />
                    </Box>
                    <Box mt={2}>
                      <ChatBotSection />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <DonutChart />
                    <Box mt={2}>
                      <ButtonBox />
                    </Box>
                    <Box mt={2}>
                      <Calender />
                    </Box>
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
