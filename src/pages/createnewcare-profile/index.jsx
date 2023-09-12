// import React from "react";
import React, { useState } from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import HomeLayout from "src/layout/HomeLayout";
import Dropzonearea from "src/components/Dropzonearea";
import Uploadstatus from "src/components/Uploadstatus";
const FrontProfileBox = styled(Box)(({ theme }) => ({
  "& .dropContantBox": {
    padding: "94px 0 0",
  },
  padding: "120px 0px",
  "& .createvariantButton": {
    marginRight: "15px",
  },
  "& .profileImg1": {
    height: "248px",
    width: "179px",
    objectFit: "cover",
    borderRadius: "100px 100px 100px 100px",
  },
}));

export default function Createnewcare() {
  const router = useRouter();

  return (
    <>
      <FrontProfileBox>
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box align="center">
                <Typography variant="h4">Good Morning,</Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box align="center">
                <img
                  src="/images/readmore.svg"
                  alt=""
                  className="profileImg1"
                />
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box align="center">
                <Typography variant="h2">Maria Jain</Typography>
                <Box mt={2}>
                  <Typography variant="body2">Room 234</Typography>
                  <Typography variant="body2" mt={1}>
                    Resident Since November
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    2023
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Box className="dropContantBox">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography variant="body2" color="rgba(0, 0, 0, 0.87)">
                  Front Side of the passport
                </Typography>
                <Box mt={1} mb={4}>
                  <Typography
                    variant="subTitle1"
                    color="rgba(22, 30, 41, 0.75)"
                  >
                    JPEG, PNG, GIF, Max 10mb
                  </Typography>
                </Box>
                <Dropzonearea />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography variant="body2" color="rgba(0, 0, 0, 0.87)">
                  Uploading Status
                </Typography>
                <Box mt={1} mb={4}>
                  <Typography
                    variant="subTitle1"
                    color="rgba(22, 30, 41, 0.75)"
                  >
                    Here you can see the status of uploading your files
                  </Typography>
                </Box>
                <Uploadstatus />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </FrontProfileBox>
    </>
  );
}

Createnewcare.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
