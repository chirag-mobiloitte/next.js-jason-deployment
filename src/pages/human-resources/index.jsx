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
import { humanResourcescareData } from "src/data";
import EastIcon from "@mui/icons-material/East";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .quickBox": {
    "& .searchButton": {
      position: "absolute",
      zIndex: "1",
      right: "5px",
      cursor: "pointer",
    },
    "& .backgroundImage": {
      position: "relative",
      top: "0px",
      padding: "100px 0px",
      background: `url('/images/humanResourceBackground.png')`,
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
      border: "1px solid #FFF",
      background: "#161E29",
      borderRadius: "50px",
      margin: "5px",
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
      border: "1px solid #FFF",
      background: "rgba(255, 255, 255, 0.06)",
      margin: "5px",
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

export default function index() {
  const router = useRouter();
  const [tabs, setTabs] = useState("Requirements");
  return (
    <MainComponent>
      <Box className="quickBox">
        <Box className="backgroundImage">
          <Container>
            <Box className={`contentBox `}>
              <Typography variant="h2">
                Human <span style={{ fontWeight: 300 }}>Resources</span>
              </Typography>
              <Typography variant="h6">
                Lorem Ipsum is simply dummy text and typesetting industry.
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
                    tabs === "Requirements" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Requirements")}
                >
                  <Typography variant="body2">
                    Requirements & Onboarding
                  </Typography>
                </Box>
                <Box
                  className={
                    tabs === "Staffing" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Staffing")}
                >
                  <Typography variant="body2">Staffing & Scheduling</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Compensation" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Compensation")}
                >
                  <Typography variant="body2">
                    Compensation & Benefits
                  </Typography>
                </Box>
                <Box
                  className={
                    tabs === "Analysis" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Analysis")}
                >
                  <Typography variant="body2">
                    Analysis, Audits and Assessments
                  </Typography>
                </Box>

                <Box
                  className={
                    tabs === "Performance" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Performance")}
                >
                  <Typography variant="body2">Performance Appraisal</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Diversity" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Diversity")}
                >
                  <Typography variant="body2">Diversity & Inclusion</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Employee" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Employee")}
                >
                  <Typography variant="body2">
                    Employee Wellness & Engagement
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        {tabs === "Requirements" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Requirements and Onboarding
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData.map((data, index) => {
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
        {tabs === "Staffing" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Staffing & Scheduling
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData.map((data, index) => {
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
        {tabs === "Compensation" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Compensation & Benefits
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData.map((data, index) => {
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
        {tabs === "Analysis" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "800px", color: "#161E29" }}
                >
                  Analysis, Audits and Assessments
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData?.map((data, index) => {
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
        {tabs === "Performance" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Performance Appraisal
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData.map((data, index) => {
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
        {tabs === "Diversity" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Diversity & Inclusion
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData.map((data, index) => {
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
        {tabs === "Employee" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "800px", color: "#161E29" }}
                >
                  Employee Wellness & Engagement
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {humanResourcescareData &&
                  humanResourcescareData.map((data, index) => {
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
