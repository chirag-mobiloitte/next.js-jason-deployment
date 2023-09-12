import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Box,
  Grid,
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import AverageStatusCard from "src/components/AverageStatusCard";
import SearchIcon from "@mui/icons-material/Search";
import CampaingOverview from "./CampaingOverview";
import Campaing from "./Campaing";
import DonutChart from "./DonutChart";
import BargraphChart from "./BargraphChart";
import Calender from "./Calender";
import GrowAudience from "./GrowAudience";
import CampingDetail from "./CampingDetail";
import { careData } from "src/data";
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
  "& .displayWrap": {
    [theme.breakpoints.down("sm")]: {
      marginTop: "8px",
    },
  },
  "& .fullWidthMarketing": {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function index({ data }) {
  const router = useRouter();

  return (
    <Box className="mainContainerHomeLayout">
      <MainComponent>
        <Box className="adminBox">
          <Box mt={5} mb={5}>
            <Container>
              <Box className="displaySpacebetween displayWrap" mb={3}>
                <Typography variant="h2">Email Marketing</Typography>

                <Box className="displayStart displayWrap">
                  <Box className="searchBox fullWidthMarketing">
                    <FormControl fullWidth>
                      <TextField
                        variant="standard"
                        placeholder="Search here.."
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Box className="sendButton">
                                <IconButton>
                                  <SearchIcon
                                    sx={{
                                      color: "rgba(0, 0, 0, 0.60)",
                                      fontSize: "30px",
                                    }}
                                  />
                                </IconButton>
                              </Box>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                  </Box>
                  <Box ml={{ sm: "0px", md: "16px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      className="sortButton"
                    >
                      New Campaign
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Paper elevation={3}>
                <Box mb={2}>
                  <Typography variant="h4">Campaign Overview</Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={8} lg={8}>
                    <BargraphChart />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <DonutChart />
                  </Grid>
                </Grid>

                <Box className={`displayStart`} mt={4} mb={1}>
                  <Box className="blackBox"></Box>
                  <Typography variant="h6">Campaign Average Stats</Typography>
                </Box>
                <Grid container spacing={2} sx={{ marginBottom: "32px" }}>
                  {careData &&
                    careData.map((data, index) => {
                      return (
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                          <AverageStatusCard data={data} index={index} />
                        </Grid>
                      );
                    })}
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={7} lg={7}>
                    <Campaing />
                    <Box mt={2}>
                      <GrowAudience />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={5} lg={5}>
                    <Calender />
                    <Box my={2}>
                      <CampaingOverview />
                    </Box>
                    <CampingDetail />
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
