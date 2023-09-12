import HomeLayout from "src/layout/HomeLayout";
import { Container, Box } from "@mui/material";
import React, { useState } from "react";
import ChartAsistant from "./ChartAsistant";
import UploadDoc from "./UploadDoc";

export default function index() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <Box mt={3} mb={3}>
          <ChartAsistant />
        </Box>
        <UploadDoc />
      </Container>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
