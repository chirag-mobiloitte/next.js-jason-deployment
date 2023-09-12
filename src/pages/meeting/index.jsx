import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Select,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { ExpandMore } from "@mui/icons-material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .testModuleBox": {
    "& h2": {
      color: "#161E29",
    },
    "& p": {
      marginLeft: "8px",
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: 300,
    },
    "& .responsiveButton": {
      marginLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "8px",
        marginLeft: "8px",
      },
    },
    "& .responsiveManage": {
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },
  },
}));
export default function index() {
  const [gender, setGender] = useState("Select gender");
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="testModuleBox">
            <Typography variant="h2">
              Mental Health Awareness Courses{" "}
            </Typography>

            <Paper elevation={3} style={{ margin: "32px 0px" }}>
              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h6">Courses Information</Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginLeft: "0px",
                      color: "var(--style, rgba(22, 30, 41, 0.60))",
                      fontWeight: 400,
                    }}
                  >
                    Explain about traits
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Introduction to Mental Health Awareness
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Addressing Stress and Burnout
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Dementia Training for Caregivers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Grief and Bereavement Support
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Understanding common Mental Health Disorder
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Suicide Prevention and Inovation
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Caring for Individuals with Schizophrenia
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Mindfullness and Stress Reduction Techniques
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Promoting Mental Well-being in the workplace
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Psychosocial Support for Mental Health
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Understanding Bipolar Disorder and tis Impact
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Eating Disorders
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Supporting Individuals with Anxiety and Panic
                          Disorders
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Trauma-Informed Care and Resilience Building
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Supporting Individual with Personality Disorders
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Awareness and Support LGBTQ- Mental Health Awareness
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Recognizing and Responding to Depression
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Substance Abuse and Mental Health
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Mental Health First Aid Cultural Competence in Mental
                          Health Care
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Mental Health First Aid Cultural Competence in Mental
                          Health Care
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box className="displayStart">
                        <Checkbox {...label} />
                        <Typography variant="body1">
                          Mental Health First Aid Cultural Competence in Mental
                          Health Care
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box className="displayCenter">
                <Box mt={4} className={`displaySpacebetween responsiveManage`}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      router.push("");
                    }}
                  >
                    Back to Course Categories
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="responsiveButton"
                    onClick={() => {
                      router.push("");
                    }}
                  >
                    Select and Start Course
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
