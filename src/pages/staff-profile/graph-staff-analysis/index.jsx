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
import InputAdornment from "@mui/material/InputAdornment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const GrpahStaffAnalysisBox = styled("Box")((theme) => ({
  "& .writeBox": {
    "& h5": {
      color: "#161E29",
      fontWeight: 500,
    },
    "& p": {
      color: "rgba(22, 30, 41, 0.60)",
      fontWeight: 400,
      marginTop: "16px",
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
}));

export default function GrpahStaffAnalysis() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <GrpahStaffAnalysisBox>
          <Box mb={3}>
            <Typography variant="h2">Staff Analysis</Typography>
          </Box>
          <Paper elevation={3} className="paperBox">
            <Box>
              <CircularProgressBar progress="75"/>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Box className="writeBox">
                    <Typography variant="h5">Specify Details</Typography>
                    <Typography variant="body1">
                      Provide answer of some questions
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <Typography sx={{marginBottom:"8px", color:"#161E29"}} variant="body2">
                    Please Provide the total number of Staff Members in Your
                    Organization
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Box className="documentType">
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <AddCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}}/>
                                  <Typography sx={{zIndex:"9", marginBottom:"0px !important"}}>&nbsp;1&nbsp;</Typography>
                                  <RemoveCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                        <Typography variant="body2">
                          A) Caregivers/Support Workers
                        </Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <AddCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                  <Typography sx={{zIndex:"9", marginBottom:"0px !important"}}>&nbsp;1&nbsp;</Typography>
                                  <RemoveCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                        <Typography variant="body2">B) Nurses</Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <AddCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                  <Typography sx={{zIndex:"9", marginBottom:"0px !important"}} variant="body2">&nbsp;1&nbsp;</Typography>
                                  <RemoveCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                        <Typography variant="body2">
                          C) Others (Specify)
                        </Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <AddCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                  <Typography sx={{zIndex:"9", marginBottom:"0px !important"}} variant="body2">&nbsp;1&nbsp;</Typography>
                                  <RemoveCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box className="documentType">
                        <Typography variant="body2">
                          D) Others (Specify)
                        </Typography>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="138"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <AddCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                  <Typography sx={{zIndex:"9", marginBottom:"0px !important"}} variant="body2"> &nbsp;1&nbsp;</Typography>
                                  <RemoveCircleOutlineIcon sx={{zIndex:"9", color: "#7a69fe"}} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt={5} className="displayEnd">
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<AddCircleOutlineIcon sx={{ color: "#7a69fe"}} />}
                    >
                      Add Another
                    </Button>
                  </Box>
                  <Box mt={1}>
                    <Button variant="contained" color="primary">
                      Complete Document
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </GrpahStaffAnalysisBox>
      </Container>
    </Box>
  );
}

GrpahStaffAnalysis.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
