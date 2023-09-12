import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Avatar,
  Paper,
  IconButton,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import ReportCard from "./ReportCard";
import { FiDownload } from "react-icons/fi";
import { BsFillShareFill } from "react-icons/bs";
const data = [
  {
    title: "Document Suggestions",
    text1: "Syllabus",
    text2: "Science Book .Pdf",
    text3: "Interesting Website Link",
    text4: "Case Study",
    text5: "Book Science",
    image1: "/images/eyeImg.png",
    image2: "/images/download.png",
    image3: "/images/chain.png",
    image4: "/images/download.png",
    image5: "/images/download.png",
  },
  {
    title: "Previous Documents",
    text1: "Syllabus",
    text2: "Science Book .Pdf",
    text3: "Interesting Website Link",
    text4: "Case Study",
    text5: "Book Science",
    image1: "/images/eyeImg.png",
    image2: "/images/download.png",
    image3: "/images/chain.png",
    image4: "/images/download.png",
    image5: "/images/download.png",
  },
];
const optionsData = [
  {
    optionTitle: "Syllabus",
    optionAnswer: "Option A",
  },
  {
    optionTitle: "Science Book .Pdf",
    optionAnswer: "Option B",
  },
  {
    optionTitle: "Interesting Website Link",
    optionAnswer: "Option C",
  },
  {
    optionTitle: "Case Study",
    optionAnswer: "Option D",
  },
];
const optionsData1 = [
  {
    optionTitle: "Syllabus",
    optionAnswer: "Option A",
  },
  {
    optionTitle: "Science Book .Pdf",
    optionAnswer: "Option B",
  },
  {
    optionTitle: "Interesting Website Link",
    optionAnswer: "Option C",
  },
  {
    optionTitle: "Case Study",
    optionAnswer: "Option D",
  },
];
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    "& h2": {
      color: "#161E29",
      marginBottom: "40px",
    },
    "& h5": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
      margin: "24px 0px",
    },
    "& .reportCardBox": {
      "& h5": {
        margin: "8px 0px !important",
        color: "rgba(22, 30, 41, 0.87)",
        fontWeight: 400,
      },
    },
  },
}));
export default function ReportCreation() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Paper elevation={3} className="documentBox">
            <Typography variant="h2">Report Creation</Typography>

            <Grid container spacing={3}>
              {data &&
                data.map((value, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <ReportCard documentData={value} index={index} />
                    </Grid>
                  );
                })}
            </Grid>
            <Box>
              <Box style={{ marginTop: "50px" }} className="displayStart">
                <Typography
                  variant="body2"
                  style={{ color: "#161E29", fontWeight: 500 }}
                >
                  Question:&nbsp;
                </Typography>
                <Typography variant="body2">
                  What was the nature of the incident?
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography
                  variant="body2"
                  style={{ color: "#161E29", fontWeight: 500 }}
                >
                  Options:
                </Typography>
                {optionsData &&
                  optionsData.map((data, index) => {
                    return (
                      <Box
                        key={`options${index}`}
                        style={{ margin: "8px 0px", maxWidth: "350px" }}
                        className="displaySpacebetween"
                      >
                        <Typography variant="body2">
                          {data.optionTitle}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ color: "#161E29", fontWeight: 300 }}
                        >
                          {data.optionAnswer}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>
            </Box>

            <Box mt={2} className="displayEnd">
              <Box className="displayStart">
                <Box>
                  <Avatar src="/images/profileImage.jpg" />
                </Box>
                <Box ml={1}>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(22, 30, 41, 0.87)", fontWeight: 400 }}
                  >
                    Maria Jain
                  </Typography>
                  <Typography
                    variant="subTitle1"
                    style={{
                      color: "var(--style, rgba(22, 30, 41, 0.60))",
                      fontWeight: 200,
                    }}
                  >
                    8:24 PM &nbsp;08/07/2023
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box mt={1} className="displayEnd">
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Answer:&nbsp;
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Option B
              </Typography>
            </Box>

            <Box style={{ marginTop: "30px" }} className="displayStart">
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Question:&nbsp;
              </Typography>
              <Typography variant="body2">
                Where did the incident occur?
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Options:
              </Typography>
              {optionsData &&
                optionsData.map((data, index) => {
                  return (
                    <Box
                      key={`options${index}`}
                      style={{ margin: "8px 0px", maxWidth: "350px" }}
                      className="displaySpacebetween"
                    >
                      <Typography variant="body2">
                        {data.optionTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ color: "#161E29", fontWeight: 300 }}
                      >
                        {data.optionAnswer}
                      </Typography>
                    </Box>
                  );
                })}
            </Box>

            <Box mt={2} className="displayEnd">
              <Box className={`displayStart`}>
                <Box>
                  <Avatar src="/images/profileImage.jpg" />
                </Box>
                <Box ml={1}>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(22, 30, 41, 0.87)", fontWeight: 400 }}
                  >
                    Maria Jain
                  </Typography>
                  <Typography
                    variant="subTitle1"
                    style={{
                      color: "var(--style, rgba(22, 30, 41, 0.60))",
                      fontWeight: 200,
                    }}
                  >
                    8:24 PM &nbsp;08/07/2023
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box mt={1} className="displayEnd">
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Answer:&nbsp;
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Option B
              </Typography>
            </Box>
          </Paper>
          <Box mt={2} className={`displayEnd iconButtonBox`}>
            <IconButton>
              <FiDownload />
            </IconButton>
            <IconButton style={{ marginLeft: "8px" }}>
              <BsFillShareFill />
            </IconButton>
          </Box>
          <Box mt={2}>
            <Button variant="contained" color="primary">
              Complete
            </Button>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

ReportCreation.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
