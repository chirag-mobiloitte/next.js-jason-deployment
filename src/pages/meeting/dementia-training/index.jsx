import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Box,
  Avatar,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BsArrowUpRight } from "react-icons/bs";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .dementiaTrainingBox": {
    "& h2": {
      color: "#161E29",
    },
    "& h5": {
      color: "rgba(22, 30, 41, 0.87)",
      fontWeight: 600,
      marginBottom: "24px",
    },
    "& h6": {
      color: "rgba(22, 30, 41, 0.87)",
      fontWeight: 400,
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: 300,
    },
    "& .avatarBox": {
      borderRadius: "12px",
      background: "#fff",
      padding: "3px",
      cursor: "pointer",
      maxWidth: "200px",
    },
  },
}));

export default function DementiaTraining() {
  const router = useRouter();
  const faqData = [
    {
      question: "Introduction",
      answer: [
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
      ],
    },
    {
      question: "Introduction",
      answer: [
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
      ],
    },
    {
      question: "Module 2",
      answer: [
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
      ],
    },
    {
      question: "Final Assessment",
      answer: [
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
        "Living with dementia",
      ],
    },
  ];
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="dementiaTrainingBox">
            <Typography variant="h2">
              Dementia Training For Caregivers
            </Typography>
            <Box className={`avatarBox displayStart`} mt={3} mb={3}>
              <Avatar
                src="/images/profile.png"
                alt="image"
                style={{ borderRadius: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#000", marginLeft: "10px" }}
              >
                Maria Joseph
              </Typography>
            </Box>
            <Typography variant="h5">Course Description</Typography>
            <Typography variant="body2">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, In publishing and graphic design, Lorem ipsum
              is a placeholder text commonly used to demonstrate the visual form
              of a document or a typeface without relying on meaningful content.
              In publishing and graphic design, In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. In publishing and graphic design,{" "}
            </Typography>

            <Grid container spacing={2} mt={2} mb={2}>
              {faqData &&
                faqData?.map((data, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography variant="h6">{data?.question}</Typography>
                        </AccordionSummary>
                        <Divider
                          style={{
                            width: "100%",
                            border: "1px solid rgba(0, 0, 0, 0.15)",
                          }}
                        />
                        <AccordionDetails>
                          {data?.answer?.map((v, i) => {
                            return <Typography variant="body2">{v}</Typography>;
                          })}
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  );
                })}
            </Grid>
            <Box className={`displayStart`} mt={5}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<BsArrowUpRight />}
                onClick={() => {
                  router.push("");
                }}
              >
                Start Course
              </Button>
            </Box>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

DementiaTraining.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
