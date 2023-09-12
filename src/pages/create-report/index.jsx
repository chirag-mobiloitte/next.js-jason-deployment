import React from "react";
import MvpCard from "./MvpCard";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import HomeLayout from "src/layout/HomeLayout";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { RiArrowDropDownLine } from "react-icons/ri";
import { reportGeneratorCard } from "src/data";
const CareMainLandBox = styled("Box")(({ theme }) => ({
  "& .maincarelandingPage": {
    borderRadius: "20px",
    background: "#E1F1FF",
  },
  "& .frameBox1": {
    order: "0",
    [theme.breakpoints.down("xs")]: {
      order: "1",
    },
  },
  "& .frameBox": {
    background: "#D1E9FE",
    borderRadius: "0px 20px 20px 0px",
    textAlign: "center",
    padding: "0px",
    order: "1",
    [theme.breakpoints.down("xs")]: {
      order: "0",
      background: "transparent",
    },
  },
  "& .createlanding": {
    width: "auto",
    maxWidth: "100%",
  },

  "& .textBox": {
    padding: "30px",
  },

  "& .analysisBox": {
    padding: "50px 0",
    "& h4": {
      maxWidth: "550px",
      marginBottom: "30px",
    },
  },
}));

const selectoption = [
  { title: "Enter meeting chair name" },
  { title: "Enter meeting chair name" },
  { title: "Enter meeting chair name" },
];

export default function ReportGenerator() {
  const router = useRouter();
  const handelIncidentPage = () => {
    router.push("create-report/incident-report");
  };

  return (
    <Box className="mainContainerHomeLayout">
      <CareMainLandBox>
        <Container>
          <Box className="maincarelandingPage">
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={6} md={6} sm={6} xs={12} className="frameBox1">
                <Box className="textBox">
                  <Typography variant="h4">Report Generator</Typography>
                  <Box mt={2} mb={2}>
                    <Typography variant="body2">
                      What type of report would you like to generate?
                    </Typography>
                  </Box>
                  <Box style={{ width: "100%", position: "relative" }}>
                    <RiArrowDropDownLine className="dopicon" />
                    <Autocomplete
                      freeSolo
                      disableClearable
                      fullWidth
                      options={selectoption.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Report Type"
                          variant="standard"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
                  </Box>

                  <Box mt={5}>
                    <Button
                      onClick={handelIncidentPage}
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowOutwardIcon />}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12} className="frameBox">
                <Box className="textBox">
                  <img
                    src="/images/mobile-heart.svg"
                    alt="mobile-heart"
                    className="createlanding"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="analysisBox">
            <Typography variant="h4">
              Create your plan and documentation with{" "}
              <span style={{ color: "#7A69FE" }}>MVP Care.</span>
            </Typography>
            <Grid container spacing={2}>
              {reportGeneratorCard?.map((data, i) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <MvpCard data={data} index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </CareMainLandBox>
    </Box>
  );
}
ReportGenerator.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
