import HomeLayout from "src/layout/HomeLayout";
import React from "react";
import { Container, Box } from "@mui/material";

import DocumentUploader from "src/components/DocumentUploader";
export default function index() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <DocumentUploader heading="Care Plan Creation" />
      </Container>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
