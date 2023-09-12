import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Button, Paper, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import AnalysisCard from "src/components/AnalysisCard";
import TableComponent from "src/components/TableComponent";
import {
  analysisCardData,
  analysisTableData,
  analysisTableHead,
} from "src/data";

const MainDocumentBox = styled("Box")(() => ({
  "& .quickBox": {
    "& h2": {
      color: "#161E29",
      fontWeight: 600,
      marginBottom: "24px",
    },
    "& h4": {
      color: "#161E29",
      fontWeight: 600,
    },
  },
}));

export default function StartAnalysis() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="quickBox">
            <Typography variant="h2">
              Start Analysis - Choose an Analysis
            </Typography>
            <Grid container spacing={3}>
              {analysisCardData &&
                analysisCardData.map((data, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                      <AnalysisCard data={data} index={index} />
                    </Grid>
                  );
                })}
            </Grid>
            <Paper elevation={3} style={{ margin: "16px 0px" }}>
              <Typography variant="h4">Analysis In Progress</Typography>
            </Paper>
            <Paper elevation={1}>
              <TableComponent
                tabledata={analysisTableData}
                tableHead={analysisTableHead}
              />
            </Paper>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

StartAnalysis.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
