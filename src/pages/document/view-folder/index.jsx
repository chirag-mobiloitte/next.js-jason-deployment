import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import DocumentCard from "../find-document/DocumentCard";
import CarePlanCard from "./CarePlanCard";
import FolderCard from "./FolderCard";
import Filter from "src/components/Filter";
import RecentDocumentFilter from "src/components/RecentDocumentFilter";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    "& .subHeading": {
      "& p": {
        marginTop: "40px",
        marginBottom: "30px",
        color: "var(--style, rgba(22, 30, 41, 0.60))",
        fontWeight: "300",
        lineHeight: "normal",
      },
    },
    "& p": {
      color: "#161E29",
      fontWeight: "300",
      lineHeight: "normal",
    },
    "& h2": {
      color: "#161E29",
      fontWeight: "500",
      marginBottom: "40px",
    },
    "& h5": {
      color: "#161E29",
      fontWeight: "600",
      margin: "40px 0px",
    },
  },
}));
export default function ViewFolder() {
  const documentData = [
    {
      img: "/images/card/document.png",
      text1: "Care Plan",
      price1: "3,239",
      price2: "3,239",
    },
    {
      img: "/images/card/document.png",
      text1: "Care Plan",
      price1: "3,239",
      price2: "3,239",
    },
    {
      img: "/images/card/document.png",
      text1: "Care Plan",
      price1: "3,239",
      price2: "3,239",
    },
    {
      img: "/images/card/document.png",
      text1: "Care Plan",
      price1: "3,239",
      price2: "3,239",
    },
  ];
  const folderData = [
    {
      img: "/images/addBox.jpg",
      text: "Care Planning",
    },
    {
      img: "/images/plus.png",
      text: "Business",
    },
    {
      img: "/images/web.png",
      text: "Food and Nutrition",
    },
    {
      img: "/images/folder.png",
      text: "Human Resources",
    },
    {
      img: "/images/addBox.jpg",
      text: "Policies",
    },
    {
      img: "/images/plus.png",
      text: "Medication",
    },
    {
      img: "/images/plus.png",
      text: "Legal Matters",
    },
  ];
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Typography variant="h2">Personal</Typography>
            <Box mt={5} mb={5}>
              <RecentDocumentFilter title="Recent Documents" />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Grid container spacing={3}>
                  {documentData &&
                    documentData.map((data, index) => {
                      return (
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                          <CarePlanCard data={data} index={index} />
                        </Grid>
                      );
                    })}
                </Grid>
                <Typography variant="h5">Folders</Typography>
                <Grid container spacing={3}>
                  {folderData &&
                    folderData.map((data, index) => {
                      return (
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                          <FolderCard data={data} index={index} />
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Filter />
              </Grid>
            </Grid>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

ViewFolder.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
