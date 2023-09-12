import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import RecentDocumentFilter from "src/components/RecentDocumentFilter";

const MainDiaryBox = styled("Box")(({ theme }) => ({
  "& .medicationDiaryBox": {
    "& p": {
      color: "#161E29",
      fontWeight: "300",
      lineHeight: "normal",
    },
    "& h2": {
      color: "#161E29",
      fontWeight: "500",
      marginBottom: "40px",
    },
    "& h5": {
      color: "#161E29",
      fontWeight: "600",
      margin: "40px 0px",
    },
    "& .perpalBox1": {
      borderRadius: "10px",
      background: "#B7BFFF",
      padding: "20px",
    },
    "& .perpalBox2": {
      borderRadius: "10px",
      background: "#7A69FE",
      padding: "20px",

      "& p": {
        color: "#FFF",
      },
    },
  },
}));

export default function MedicationDiary() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDiaryBox>
          <Box className="medicationDiaryBox">
            <Typography variant="h2">
              Rebecca Powel - Medication Diary
            </Typography>
            <Box mt={5} mb={5}>
              <RecentDocumentFilter title="Files" />
            </Box>
            <Paper elevation={3}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                  <Box className="perpalBox1">
                    <Typography variant="body2">Date</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                  <Box className="perpalBox2">
                    <Typography variant="body2">Medication</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                  <Box className="perpalBox1">
                    <Typography variant="body2">Dosage</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                  <Box className="perpalBox2">
                    <Typography variant="body2">Frequency</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                  <Box className="perpalBox1">
                    <Typography variant="body2">Time</Typography>
                  </Box>
                </Grid>
              </Grid>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                return (
                  <Grid container spacing={1} mt={1}>
                    <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                      <TextField fullWidth variant="outlined" placeholder="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                      <TextField fullWidth variant="outlined" placeholder="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                      <TextField fullWidth variant="outlined" placeholder="" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                      <TextField fullWidth variant="outlined" placeholder="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2.4} lg={2.4}>
                      <TextField fullWidth variant="outlined" placeholder="" />
                    </Grid>
                  </Grid>
                );
              })}
            </Paper>
          </Box>
        </MainDiaryBox>
      </Container>
    </Box>
  );
}

MedicationDiary.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
