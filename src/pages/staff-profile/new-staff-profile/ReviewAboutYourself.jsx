import HomeLayout from "src/layout/HomeLayout";
import {
  Typography,
  Box,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { reviewAboutYourself } from "src/data";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .inputMeetingDetailsBox": {
    "& h5": {
        color: "#161E29",
        fontWeight: 500,
        marginBottom:"8px"
      },
    "& p": {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: "200",
    },
    ".orangeBox": {
      borderRadius: "5px",
      background: "#FD9821",
      padding: "5px",
      "& p": {
        color: "#FFF",
      },
    },
    ".redBox": {
      borderRadius: "5px",
      background: "#FD2E21",
      padding: "5px",
      "& p": {
        color: "#FFF",
      },
    },
    ".greenBox": {
      borderRadius: "5px",
      background: "#01E477",
      padding: "5px",
      "& p": {
        color: "#FFF",
      },
    },
    ".deepOrangeBox": {
      borderRadius: "5px",
      background: "#FD6321",
      padding: "5px",
      "& p": {
        color: "#FFF",
      },
    },
    ".grayBox": {
      borderRadius: "5px",
      background: "rgba(0, 0, 0, 0.05)",
      padding: "5px",
      "& p": {
        color: "#161E29",
      },
    },
  },
}));
export default function ReviewAboutYourself() {
  return (
    <MainDocumentBox>
      <Box className="inputMeetingDetailsBox">
        <Grid container spacing={2} mt={2}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Typography variant="h6">Review About Yourself:</Typography>
            <Typography variant="body2">
              Provide your personal Details
            </Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body2">
                    Empathy and Compensation
                  </Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 5
                                  ? `orangeBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Box>
                    <Typography variant="body2">
                      Communication Skills
                    </Typography>
                    <Box mt={1}>
                      <Grid container spacing={1}>
                        {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                          return (
                            <Grid item xs={1.2}>
                              <Box
                                className={
                                  index < 1
                                    ? `redBox displayCenter`
                                    : `grayBox displayCenter`
                                }
                              >
                                <Typography variant="body2">
                                  {index + 1}
                                </Typography>
                              </Box>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body2">
                    Problem Solving Skills
                  </Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 8
                                  ? `greenBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body2">
                    Professionalism and Ethics
                  </Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 8
                                  ? `greenBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body2">
                    Professionalism and Ethics
                  </Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 3
                                  ? `deepOrangeBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body2">Time Management</Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 6
                                  ? `orangeBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body2">Technical Competence</Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 10
                                  ? `greenBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body2">
                    Teamwork and Collaboration
                  </Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 5
                                  ? `orangeBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body2">Absences Rate</Typography>
                  <Box mt={1}>
                    <Grid container spacing={1}>
                      {reviewAboutYourself && reviewAboutYourself?.map((value, index) => {
                        return (
                          <Grid item xs={1.2}>
                            <Box
                              className={
                                index < 3
                                  ? `deepOrangeBox displayCenter`
                                  : `grayBox displayCenter`
                              }
                            >
                              <Typography variant="body2">
                                {index + 1}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MainDocumentBox>
  );
}

ReviewAboutYourself.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
