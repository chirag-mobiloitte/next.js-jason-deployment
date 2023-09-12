import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Grid, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import TableComponent from "src/components/TableComponent";
import RecentDocumentFilter from "src/components/RecentDocumentFilter";
import Filter from "src/components/Filter";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    "& .subHeading": {
      "& p": {
        marginTop: "40px",
        marginBottom: "10px",
        color: "var(--style, rgba(22, 30, 41, 0.60))",
        fontWeight: "300",
      },
    },
    "& p": {
      color: "#161E29",
    },
  },
}));

export default function document() {
  const tabledata = [
    {
      name: "mrsmithcareplan.docx",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/doc.svg",
      sharedicon: "/images/public.svg",
    },
    {
      name: "mrsmithcareplan.pdf",
      size: "8.95 MB",
      shared: "Only me",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/pdf.svg",
      sharedicon: "/images/locker.svg",
    },
    {
      name: "mrsmithcareplan.docx",
      size: "8.95 MB",
      shared: "Team",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/doc.svg",
      sharedicon: "/images/team.svg",
    },
    {
      name: "mrsmithcareplan.pdf",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/pdf.svg",
      sharedicon: "/images/public.svg",
    },
    {
      name: "mrsmithcareplan.docx",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/doc.svg",
      sharedicon: "/images/public.svg",
    },
    {
      name: "mrsmithcareplan.pdf",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/pdf.svg",
      sharedicon: "/images/public.svg",
    },
    {
      name: "mrsmithcareplan.docx",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/doc.svg",
      sharedicon: "/images/public.svg",
    },
    {
      name: "mrsmithcareplan.pdf",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/pdf.svg",
      sharedicon: "/images/locker.svg",
    },
    {
      name: "mrsmithcareplan.pdf",
      size: "8.95 MB",
      shared: "Public",
      modified: "24/08/2023 08:42 AM",
      talk: "/images/chat.svg",
      icon: "/images/pdf.svg",
      sharedicon: "/images/team.svg",
    },
  ];
  const tableHead = {
    heading1: "Name",
    heading2: "Size",
    heading3: "Shared",
    heading4: "Last modified",
    heading5: "Talk to Doc",
  };

  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Typography variant="h4">Rebecca Powel - General Files</Typography>
            <Box mt={5} mb={1}>
              <RecentDocumentFilter title="Files" />
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Paper elevation={1}>
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

document.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
