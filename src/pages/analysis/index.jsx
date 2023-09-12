import HomeLayout from "src/layout/HomeLayout";
import { Container, Box, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import AnalysisCard from "src/components/AnalysisCard";
import { analysisData } from "src/data";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .quickBox": {},
}));

export default function index() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="quickBox">
            <Grid container spacing={3}>
              {analysisData &&
                analysisData.map((data, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                      <AnalysisCard data={data} index={index} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
