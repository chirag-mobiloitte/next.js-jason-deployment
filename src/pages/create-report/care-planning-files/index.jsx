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

export default function CarePlanning() {


  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Typography variant="h4">Your Personal - Care Planning Files</Typography>
            <Box mt={5} mb={1}>
              <RecentDocumentFilter />
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Paper elevation={1}>
                  <TableComponent />
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

CarePlanning.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
