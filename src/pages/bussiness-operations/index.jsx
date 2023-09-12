import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import CarePlanningCard from "src/components/CarePlanningCard";
import { GrAttachment } from "react-icons/gr";
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
      background: `url('/images/bussinessCardImg.png')`,
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
export default function index({ data }) {
  const router = useRouter();
  const [tabs, setTabs] = useState("Analysis");
  return (
    <MainComponent>
      <Box className="quickBox">
        <Box className="backgroundImage">
          <Container>
            <Box className={`contentBox `}>
              <Typography variant="h2">
                Business <span style={{ fontWeight: 300 }}>Operations</span>
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
                    tabs === "Analysis" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Analysis")}
                >
                  <Typography variant="body2">
                    Analysis Audits & Assessments
                  </Typography>
                </Box>
                <Box
                  className={tabs === "QA" ? "tabActiveButtons" : "tabButtons"}
                  onClick={() => setTabs("QA")}
                >
                  <Typography variant="body2">QA and Compaliance</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Finance" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Finance")}
                >
                  <Typography variant="body2">Finance</Typography>
                </Box>
                <Box
                  className={
                    tabs === "Legal" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Legal")}
                >
                  <Typography variant="body2">Legal</Typography>
                </Box>

                <Box
                  className={
                    tabs === "Reports" ? "tabActiveButtons" : "tabButtons"
                  }
                  onClick={() => setTabs("Reports")}
                >
                  <Typography variant="body2">Reports</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        {tabs === "Analysis" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  Analysis Audits & Assessments
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {analysisAuditsCard &&
                  analysisAuditsCard.map((data, index) => {
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
        {tabs === "QA" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "600px", color: "#161E29" }}
                >
                  QA and Compliance
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {complianceCard &&
                  complianceCard.map((data, index) => {
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
        {tabs === "Finance" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "300px", color: "#161E29" }}
                >
                  Finance
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {financeCard &&
                  financeCard?.map((data, index) => {
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
        {tabs === "Legal" && (
          <Box mt={5} mb={5}>
            <Container>
              <Box style={{ position: "relative" }} mb={4}>
                <Typography
                  variant="h2"
                  style={{ maxWidth: "300px", color: "#161E29" }}
                >
                  Legal
                </Typography>
                <img
                  src="images/borderbottom.png"
                  alt="border"
                  className="borderbottom"
                />
              </Box>
              <Grid container spacing={3}>
                {legalCard &&
                  legalCard?.map((data, index) => {
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
                {reportAnalysisCard &&
                  reportAnalysisCard?.map((data, index) => {
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
