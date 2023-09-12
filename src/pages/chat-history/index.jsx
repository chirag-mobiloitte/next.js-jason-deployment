import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Grid, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import Chat from "src/components/Chat";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .chatpaddingBox": {
    padding: "120px 0",
  },
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

export default function chathistory() {
  return (
    <Box className="mainContainerHomeLayout1">
      <MainDocumentBox>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className="chatpaddingBox">
                <Chat />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MainDocumentBox>
    </Box>
  );
}

chathistory.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
