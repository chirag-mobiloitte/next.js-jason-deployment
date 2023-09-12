import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import CarePlanningCard from "src/components/CarePlanningCard";
import EastIcon from "@mui/icons-material/East";
import ScrollAnimation from "react-animate-on-scroll";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .searchButton": {
    position: "absolute",
    zIndex: "1",
    right: "5px",
    cursor: "pointer",
  },
  "& .quickBox": {
    "& .backgroundImage": {
      position: "relative",
      top: "0px",
      padding: "100px 0px",
      background: `url('/images/careUrlCard.png')`,
      width: "100%",
      backgroundSize: "cover !important",
      backgroundRepeat: "no-repeat !important",
      objectFit: "cover !important",
    },
    "& h2": {
      color: "#FFF",
      fontWeight: 600,
    },
    "& h6": {
      margin: "24px",
      color: "#FFF",
      fontWeight: 200,
    },
    "& .contentBox": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "25px",
    },
    "& .textFieldDesign": {
      maxWidth: "700px",
      "& .MuiOutlinedInput-root": {
        borderRadius: "50px",
      },
    },
    "& .mainTab": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "50px",
      flexWrap: "wrap",
    },
    "& .tabActiveButtons": {
      border: "1px solid #000",
      background: "#161E29",
      borderRadius: "50px",
      marginLeft: "5px",
      padding: "11px 23px",
      transition: "all 500ms ease-in-out",
      cursor: "pointer",
      whiteSpace: "pre",
      "& p": {
        color: "#FFF",
        fontWeight: 200,
      },
    },
    "& .tabButtons": {
      borderRadius: "50px",
      border: "1px solid #ffffff47",
      background: "rgba(255, 255, 255, 0.06)",
      marginLeft: "5px",
      padding: "11px 23px",
      whiteSpace: "pre",
      cursor: "pointer",
      "& p": {
        color: "#FFF",
        fontWeight: 200,
      },
    },
  },
}));
const careData = [
  {
    backgroundImg: "/images/careUrlCard.png",
    centerImg: "/images/careCenterImage.png",
    text1: "View all care profiles",
    text2:
      "Browse through comprehensive care profiles, all in one central hub.",
  },
  {
    backgroundImg: "/images/careUrlCard.png",
    centerImg: "/images/careCenterImage.png",
    text1: "View all care profiles",
    text2:
      "Browse through comprehensive care profiles, all in one central hub.",
  },
  {
    backgroundImg: "/images/careUrlCard.png",
    centerImg: "/images/careCenterImage.png",
    text1: "View all care profiles",
    text2:
      "Browse through comprehensive care profiles, all in one central hub.",
  },
  {
    backgroundImg: "/images/careUrlCard.png",
    centerImg: "/images/careCenterImage.png",
    text1: "View all care profiles",
    text2:
      "Browse through comprehensive care profiles, all in one central hub.",
  },
];
export default function index({ data }) {
  const router = useRouter();
  const [tabs, setTabs] = useState("Care");
  return (
    <MainComponent>
      <Box className="quickBox">
        <Box className="backgroundImage">
          <Container>
            <Box className={`contentBox `}>
              <Typography variant="h2">
                Care <span style={{ fontWeight: 300 }}>Planning</span>
              </Typography>

              <Typography variant="h6">
                Stream Care Planning with Ease and Efficiency.
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                className="textFieldDesign"
                placeholder="What are you looking for?"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="searchButton">
                      <IconButton>
                        <EastIcon color="#fff" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box className="mainTab" mt={4}>
                <Box
                  className={
                    tabs === "Care" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Care")}
                >
                  <Typography variant="body2">Care Planning</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Medication" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Medication")}
                >
                  <Typography variant="body2">Medication</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Nutrition" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Nutrition")}
                >
                  <Typography variant="body2">Nutrition</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Assesstment" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Assesstment")}
                >
                  <Typography variant="body2">Assesstment</Typography>
                </Box>

                <Box
                  className={
                    tabs === "Reports" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Reports")}
                >
                  <Typography variant="body2">Reports</Typography>
                </Box>

                <Box
                  className={
                    tabs === "Insights" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Insights")}
                >
                  <Typography variant="body2">
                    Caring Insights Navigator
                  </Typography>
                </Box>
                <Box
                  className={
                    tabs === "Interaction" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Interaction")}
                >
                  <Typography variant="body2">Family Interaction</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        {tabs === "Care" && (
          <Box mt={5} mb={5}>
            <Container>
              <ScrollAnimation animateIn="zoomInDown">
                <Box style={{ position: "relative" }} mb={4}>
                  <Typography
                    variant="h2"
                    style={{ maxWidth: "300px", color: "#161E29" }}
                  >
                    Care Planning
                  </Typography>

                  <img
                    src="images/borderbottom.png"
                    alt="border"
                    className="borderbottom"
                  />
                </Box>
              </ScrollAnimation>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
        {tabs === "Medication" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "300px", color: "#161E29" }}
                >
                  Medication
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
        {tabs === "Nutrition" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "300px", color: "#161E29" }}
                >
                  Nutrition
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
        {tabs === "Assesstment" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "300px", color: "#161E29" }}
                >
                  Assessment
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
        {tabs === "Reports" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "300px", color: "#161E29" }}
                >
                  Report
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
        {tabs === "Insights" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Caring Insight Navigator
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
        {tabs === "Interaction" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "500px", color: "#161E29" }}
                >
                  Family interaction
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {careData &&
                  careData.map((data, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <CarePlanningCard data={data} index={index} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          </Box>
        )}
      </Box>
    </MainComponent>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
