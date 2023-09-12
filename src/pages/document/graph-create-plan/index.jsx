import HomeLayout from "src/layout/HomeLayout";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import CircularProgressBar from "src/components/CircularProgressBar";

const GraphCreatePlanBox = styled("Box")(({theme}) => ({
  "& .writeBox": {
    "& h5": {
      color: "#161E29",
      fontWeight: 500,
    },
    "& p": {
      color: "rgba(22, 30, 41, 0.60)",
      fontWeight: 400,
      marginTop:"16px"
    },
  },
  "& .documentType": {
    "& p": {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: "300",
      marginBottom: "8px",
    },
  },
  "& .css-1blfdnv-MuiInputBase-root-MuiOutlinedInput-root ": {
    marginBottom: "16px",
  },
  "& .carePlanMainBox":{
    marginTop:"80px",
    [theme.breakpoints.down("sm")]: {
      marginTop:"40px",
    },
 
  }
}));

export default function GraphCreatePlan() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <GraphCreatePlanBox>
          <Box mb={3}>
            <Typography variant="h2">Care Plan Creation</Typography>
          </Box>
          <Paper elevation={3} className="paperBox">
            <Box>
              <CircularProgressBar progress="75"/>
            </Box>
            <Box className="carePlanMainBox">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box className="writeBox">
                    <Typography variant="h5">Care Plan</Typography>
                    <Typography variant="body1">
                      Provide answers to some questions
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                <Typography variant="body1" mb={1}>What is the service users full name?</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                     
                        <Typography variant="body2">A) First Name</Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                        <Typography variant="body2">B) Middle Name</Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                        <Typography variant="body2">C) Surname</Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Button variant="contained">continue</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </GraphCreatePlanBox>
      </Container>
    </Box>
  );
}
GraphCreatePlan.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
