import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Grid, Button, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import TableComponent from "src/components/TableComponent";
import RecentDocumentFilter from "src/components/RecentDocumentFilter";
import Filter from "src/components/Filter";

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

const tabledata = [
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/public.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/lock.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/team.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/twoteam.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/public.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/lock.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/team.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/twoteam.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/public.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    sharedicon: "/images/lock.png",
    modified: "24/08/2023 08:42 AM",
    talk: "/images/chaatIcon1.png",
  },
  {
    name: "mrsmithcareplan.docx",
    size: "8.95 MB",
    shared: "Public",
    modified: "24/08/2023 08:42 AM",
    sharedicon: "/images/team.png",
    talk: "/images/chaatIcon1.png",
  },
];
const tableHead = {
  heading1: "Name",
  heading2: "Size",
  heading3: "Shared",
  heading4: "Last modified",
  heading5: "Talk to Doc",
};
export default function GeneralFiles() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Typography variant="h2">Rebecca Powel - General Files</Typography>
            <Box mt={5} mb={5}>
              <RecentDocumentFilter title={"Files"} />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Paper elevation={3}>
                  <TableComponent tabledata={tabledata} tableHead={tableHead} />
                </Paper>
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

GeneralFiles.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
