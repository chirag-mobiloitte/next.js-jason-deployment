import HomeLayout from "src/layout/HomeLayout";
import {
  Typography,
  Box,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Checkbox,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Dropzonearea from "src/components/Dropzonearea";
import { IoClose } from "react-icons/io5";
import Progressbar from "src/components/Progressbar";
const TrainingMainBox = styled("Box")(({ theme }) => ({
  "& .trainingDataBox": {
    borderRadius: "20px",
    flexDirection: "column",
    padding: "30px",
    background: "#F7F7F7",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    "& p": {
      color: "#000",
      fontWeight: "300",
    },
    "& .medicalReportBox": {
      background: "rgba(122, 105, 254, 0.08)",
      borderRadius: "10px",
      width: "100%",
      padding: "15px",
    },
    "& .pinkBox": {
      backgroundColor: "rgba(122, 105, 254, 0.10)",
      borderRadius: "50%",
      width: "85px",
      height: "85px",
      padding: "20px",
    },
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#7A69FE" : "#7A69FE",
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const data = [
  {
    text: "Sales Pitch",
  },
  {
    text: "Sales & Marketing (Jay)",
  },
  {
    text: "Email Tone",
  },
  {
    text: "Email Sequences",
  },
  {
    text: "Sales & Marketing Lec)",
  },
  {
    text: "Objective",
  },
  {
    text: "Smart Goals",
  },
  {
    text: "Doc 8",
  },
  {
    text: "Doc 9",
  },
  {
    text: "Doc 10",
  },
  {
    text: "Doc 11",
  },
  {
    text: "Doc 12",
  },
  {
    text: "Doc 13",
  },
  {
    text: "Doc 14",
  },
  {
    text: "Doc 15",
  },
];
export default function TrainingData() {
  return (
    <TrainingMainBox>
      <Box className="trainingDataBox">
        <Box>
          <Box className="displayStart" mb={3}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Training Data</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className="writeBox">
                <Typography variant="body2">
                  Upload The New Training Data
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box>
                <Dropzonearea />
              </Box>
              <Box mt={2}>
                <Box className="labelprogressBox">
                  <IoClose
                    style={{ color: "#7A69FE" }}
                    className="closeIconBox"
                  />
                  <Box className="displayStart">
                    <Box>
                      <Box className="circlemainBox displayCenter">
                        <img src="/images/doc-img.jpg" alt="image" />
                      </Box>
                    </Box>

                    <Box width="100%" ml={3}>
                      <Typography variant="h6">
                        Uploading Medical Report
                      </Typography>
                      <Box align="right" mt={2} mb={1}>
                        <Typography variant="body2" color="#7A69FE">
                          69%
                        </Typography>
                      </Box>
                      <Progressbar />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box className="writeBox" mt={3}>
                <Typography variant="body2">
                  Choose from existing training data
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box mt={3} className="checkBox">
                <Grid container spacing={2}>
                  {data.map((value) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={value.text}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography
                          variant="body1"
                          style={{
                            marginLeft: "8px",
                            fontSize: "12px",
                            fontWeight: "400",
                          }}
                        >
                          {value.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </TrainingMainBox>
  );
}

TrainingData.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
