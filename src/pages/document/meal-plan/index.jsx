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
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { FiEdit2 } from "react-icons/fi";
import { ExpandMore } from "@mui/icons-material";

const data = [
  {
    title: "Personal Information:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Medical Condition:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Rehabilitation Goals:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Daily Care Plan:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Medical Care Plan:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Emotional Support:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Personal Information:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    title: "Personal Information:",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .mealPlanBox": {
    "& h2": {
      color: "#161E29",
    },
    "& h5": {
      color: "#161E29",
      fontWeight: 500,
      margin: "16px 0px",
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
  },
}));
export default function index() {
  const [gender, setGender] = useState("Select gender");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="mealPlanBox">
            <Typography variant="h2">Review Document</Typography>

            <Paper elevation={3} style={{ margin: "32px 0px" }}>
              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h6">
                    Food and Nutrition Questionnaire
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Select Care User
                        </Typography>
                        <Box mt={1}>
                          <Select
                            fullWidth
                            variant="outlined"
                            value={gender}
                            onChange={handleGenderChange}
                            IconComponent={ExpandMore}
                          >
                            <MenuItem value="Select gender">
                              Select Care User
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
                          Current Medications
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter current medication"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Medical History</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter medical history"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={1}>
                        <Typography variant="body2">
                          Select Restrictions
                        </Typography>
                        <Box mt={1}>
                          <Select
                            fullWidth
                            variant="outlined"
                            value={gender}
                            onChange={handleGenderChange}
                            IconComponent={ExpandMore}
                          >
                            <MenuItem value="Select gender">
                              Select restrictions
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
                          Current Medications
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter current medication"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h6">
                    Food and Nutrition Questionnaire
                  </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Dietary Restrictions
                        </Typography>
                        <Box mt={1}>
                          <Select
                            fullWidth
                            variant="outlined"
                            value={gender}
                            onChange={handleGenderChange}
                            IconComponent={ExpandMore}
                          >
                            <MenuItem value="Select gender">
                              Select Dietary Restrictions
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
                          If Yes, Please Specify
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="If Yes, Please Specify"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h6">Other Preferences</Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Food Preferences
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter food preferences"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">Eating Habits</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter eating habit"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body2">
                          Physical Limitations
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter physical limitation"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={1}>
                        <Typography variant="body2">Nutrition Goals</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter nutrition goal"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    router.push("");
                  }}
                >
                  Generate Food Plan
                </Button>
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
