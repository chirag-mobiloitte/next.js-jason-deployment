import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import CourseNoteFilter from "./CourseNoteFilter";
import ReportCard from "src/pages/document/report-creation/ReportCard";
import { FiDownload } from "react-icons/fi";
import { BsFillShareFill } from "react-icons/bs";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .dementiaTrainingBox": {
    "& h2": {
      color: "#161E29",
    },
    "& h4": {
      color: "#161E29",
      fontWeight: 600,
      margin: "18px 0px 8px",
    },
    "& h6": {
      color: "rgba(22, 30, 41, 0.87)",
      fontWeight: 400,
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: 300,
    },
    "& .filtersButton": {
      marginLeft: "20px",
      "& .filterIcon": {
        "& button": {
          background: "#f5f5f5!important",
          width: "37px",
          height: "37px",
          borderRadius: "50%",
          border: "1px solid #8080803d",
          marginRight: "9px",
          padding: "0px",
          "& svg": {
            color: "gray !important",
          },
        },
      },
    },
  },
}));

export default function CourseNotes() {
  const router = useRouter();
  const dementiaData = [
    {
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, ",
    },
    {
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, ",
    },
    {
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, ",
    },
  ];
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
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="dementiaTrainingBox">
            <Box mt={3} mb={3}>
              <CourseNoteFilter title={"Course Notes"} />
            </Box>

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

            <Box className="displaySpacebetween displayWrap">
              <Typography variant="h4">
                Dementia Training for Caregivers
              </Typography>
              <Box className="displayStart displayWrap">
                <Box className={`filtersButton displaySpacebetween`}>
                  <Box className="filterIcon">
                    <IconButton>
                      <FiDownload />
                    </IconButton>
                  </Box>
                  <Box className="filterIcon">
                    <IconButton>
                      <BsFillShareFill />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>

            {dementiaData.map((data, index) => {
              return (
                <Typography variant="body2" style={{ margin: "8px 0px" }}>
                  {data.text}
                </Typography>
              );
            })}

            <Box className={`displayStart`} mt={5}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("");
                }}
              >
                Next Step
              </Button>
            </Box>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

CourseNotes.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
