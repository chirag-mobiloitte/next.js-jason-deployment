import React from "react";
import MvpCard from "./MvpCard";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import HomeLayout from "src/layout/HomeLayout";
import { mvpdocumentData } from "src/data";
import { useRouter } from "next/router";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
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

export default function CareProfile() {
  const router = useRouter();
  const newProfile = () => {
    router.push("care-plan/create-new-profile");
  };

  return (
    <Box className="mainContainerHomeLayout">
      <CareMainLandBox>
        <Container>
          <Box className="maincarelandingPage">
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={6} md={6} sm={6} xs={12} className="frameBox1">
                <Box className="textBox">
                  <Typography variant="h4">
                    Create, Analysis and Review Care Plans
                  </Typography>
                  <Box mt={2} mb={2}>
                    <Typography variant="body2">
                      Stream Care Planning with Ease and Efficiency.
                    </Typography>
                  </Box>
                  <Link
                    href="/care-gatestarted"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowOutwardIcon />}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12} className="frameBox">
                <Box className="textBox">
                  <img
                    src="images/create_land.png"
                    alt="createlanding"
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
              {mvpdocumentData?.map((data, i) => {
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
CareProfile.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
