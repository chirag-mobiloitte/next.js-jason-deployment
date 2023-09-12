import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { ExpandMore } from "@mui/icons-material";
import ReviewAboutYourself from "./ReviewAboutYourself";

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
    "& .responsiveManage": {
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },
    "& .responsiveButton": {
      marginLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "8px",
        marginLeft: "8px",
      },
    },
    "& .responsiveBoxManage": {
      minWidth: "180px",
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
export default function InputMeetingDetails() {
  const [gender, setGender] = useState("Select gender");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="inputMeetingDetailsBox">
            <Paper elevation={3} style={{ margin: "32px 0px" }}>
              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Input Meeting Details</Typography>
                  <Typography variant="body2">
                    Provide your personal Details
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Full Name</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter full name"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Dr Name</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter dr. name"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Date Of Birth</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter date of birth"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={1}>
                        <Typography variant="body2">Select Gender</Typography>
                        <Box mt={1}>
                          <Select
                            fullWidth
                            variant="outlined"
                            value={gender}
                            onChange={handleGenderChange}
                            IconComponent={ExpandMore}
                          >
                            <MenuItem value="Select gender">
                              Select Gender
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Select>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Select Gender</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter job title"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Email</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter email address"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Location</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter location"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Years at company
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Select time"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Phone Number</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Phone Number"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Address:</Typography>
                  <Typography variant="body2">
                    Provide your personal Details
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Address Line 1</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter full name"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Address Line 2 (Optional)
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter dr. name"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">City</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter date of birth"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">State</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Select Gender"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Other Details:</Typography>
                  <Typography variant="body2">
                    Provide your personal Details
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Language Spoken</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter full name"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Select Relationship Status
                        </Typography>
                        <Box mt={1}>
                          <Select
                            fullWidth
                            variant="outlined"
                            value={gender}
                            onChange={handleGenderChange}
                            IconComponent={ExpandMore}
                          >
                            <MenuItem value="Enter dr. name">
                              Enter dr. name
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Select>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Select Sexual Orientation
                        </Typography>
                        <Box mt={1}>
                          <Select
                            fullWidth
                            variant="outlined"
                            value={gender}
                            onChange={handleGenderChange}
                            IconComponent={ExpandMore}
                          >
                            <MenuItem value="Enter date of birth">
                              Enter date of birth
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Select>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={1}>
                        <Typography variant="body2">Qualification</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Select Gender"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <ReviewAboutYourself/>
            </Paper>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

InputMeetingDetails.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
