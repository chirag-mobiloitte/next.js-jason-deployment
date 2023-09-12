import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  FormControl,
  TextField,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    margin: "80px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px",
    },
    "& svg": {
      color: "#7A69FE",
    },
    " & .MuiOutlinedInput-root": {
      marginBottom: "24px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "16px",
      },
    },
    "& .writeBox": {
      "& h5": {
        color: "#161E29",
        fontWeight: 500,
      },
      "& p": {
        color: "rgba(22, 30, 41, 0.60)",
        fontWeight: 400,
        marginTop: "16px",
        marginBottom:"20px",
      },
    },
    "& .documentType": {
      "& p": {
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: "400",
        marginBottom: "8px",
      },
    },
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const data = [
  {
    text: "Decision making Skills",
  },
  {
    text: "Leadership qualities",
  },
  {
    text: "Emotional intelligence",
  },
  {
    text: "Initiative",
  },
  {
    text: "Conflict resolution skills",
  },
  {
    text: "Problem solving ability",
  },
  {
    text: "Collaboration",
  },
  {
    text: "Professionalism",
  },
  {
    text: "Initiative",
  },
  {
    text: "Adaptability",
  },
  {
    text: "Commutation skills",
  },
  {
    text: "Positive attitude",
  },
  {
    text: "Organization skills",
  },
  {
    text: "Time management",
  },
];
export default function Step2MeetingComponent() {
  return (
    <MainDocumentBox>
      <Box elevation={3} className="documentBox">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Attendee Information</Typography>
                <Typography variant="body1">
                  Provide the names attendees
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">Attendee</Typography>
                    <FormControl fullWidth>
                      <TextField variant="outlined" placeholder="Type name" />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">Job Title / Role</Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Enter meeting chair email"
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">
                      Specific expertise or skills
                    </Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Enter Location"
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box className="documentType">
                    <Typography variant="body1">
                      Any specific topics or issues they would like to discuss
                      during the meeting
                    </Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Specify here"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Typography
                                variant="subTitle1"
                                sx={{ zIndex: 1, color:"rgba(0, 0, 0, 0.60)", opacity:"0.5" }}
                              >
                                0/200
                              </Typography>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box className="documentType">
                    <Typography variant="body1">
                      Any constraints or limitations that may impact your
                      participation in the meeting
                    </Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Specify here"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Typography
                                variant="subTitle1"
                                sx={{ zIndex: 1, color:"rgba(0, 0, 0, 0.60)", opacity:"0.5" }}
                              >
                                0/200
                              </Typography>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Key Personality traits</Typography>
                <Typography variant="body1">Explain about traits</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Box className={`checkBox displayStart`}>
                <Grid container spacing={2}>
                  {data.map((value, index) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="displayStart">
                          <Checkbox {...label} />
                          <Typography
                            variant="body1"
                            style={{ marginLeft: "8px" }}
                          >
                            {value.text}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainDocumentBox>
  );
}

Step2MeetingComponent.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
