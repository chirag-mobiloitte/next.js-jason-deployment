import HomeLayout from "src/layout/HomeLayout";
import {
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  FormControl,
  TextField,
  InputAdornment,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { styled } from "@mui/system";
import Dropzonearea from "src/components/Dropzonearea";
import { textFieldData } from "src/data";
import Uploadstatus from "src/components/Uploadstatus";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    margin: "80px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px",
    },
    "& .MuiSvgIcon-root": {
      zIndex: "999 !important",
      color: "#7A69FE !important",
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
      },
    },
    "& .documentType": {
      "& p": {
        color: "#161E29",
        fontWeight: "400",
        marginBottom: "8px",
      },
    },
  },
}));
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#7A69FE" : "#7A69FE",
  },
}));
export default function Step1MeetingComponent() {
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };
  return (
    <MainDocumentBox>
      <Box className="documentBox">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Input Meeting Details</Typography>
                <Typography variant="body1">
                  Provide your personal Details
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">Meeting Chair Name</Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Enter meeting chair name"
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">
                      Meeting Chairs Email
                    </Typography>
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
                    <Typography variant="body1">Meeting Location</Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Enter Location"
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">Meeting Subject(s)</Typography>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        placeholder="Enter meeting subject"
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">Select Date</Typography>
                    <FormControl fullWidth>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        fullWidth
                        style={{ width: "100%" }}
                      >
                        <DatePicker fullWidth />
                      </LocalizationProvider>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box className="documentType">
                    <Typography variant="body1">Select Time</Typography>
                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          variant="inline"
                          ampm={false}
                          value={selectedTime}
                          onChange={handleTimeChange}
                          renderInput={(props) => (
                            <TextField {...props} variant="outlined" />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Grid Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Meeting Objectives</Typography>
                <Typography variant="body1">
                  Describe about objectives
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
              <Box className="documentType">
                <Typography variant="body1">Objective A</Typography>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter meeting chair name"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
              <Box className="documentType">
                <Typography variant="body1">Objective B</Typography>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter meeting chair email"
                  />
                </FormControl>
              </Box>
              <Box mt={3} className="displayEnd">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Add Another
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Grid Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Meeting Attendees</Typography>
                <Typography variant="body1">
                  Describe about objectives
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
              <Box className="documentType">
                <Typography variant="body1">Objective A</Typography>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter meeting chair name"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
              <Box className="documentType">
                <Typography variant="body1">Objective B</Typography>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter meeting chair email"
                  />
                </FormControl>
              </Box>
              <Box mt={3} mb={3} className="displayEnd">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Add Another
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Attach Documents</Typography>
                <Typography variant="body1">
                  Attach your document here
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
              <Box>
                <Box mb={2} className="uploadingBox">
                  <Typography
                    variant="body1"
                    style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: 300 }}
                  >
                    Upload Documents for Meeting
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: "8px", color:"#161E29BF" }}>
                    JPEG, PNG, GIF, Max 10mb (640 x 480 recommended)
                  </Typography>
                </Box>
                <Box>
                <Dropzonearea />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
              <Box>
                <Box mb={3}>
                  <Typography
                    variant="body1"
                    style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: 300 }}
                  >
                    Uploading Status
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "8px", color: "#161E29BF" }}
                  >
                    Here you can see the status of uploading your files
                  </Typography>
                </Box>
                <Box>
                  <Uploadstatus />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Grid Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Specify Meeting Purpose</Typography>
                <Typography variant="body1">
                  Provide answer of some questions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              {textFieldData &&
                textFieldData?.map((data, index) => {
                  return (
                    <Box className="documentType">
                      <Typography variant="body1">{data?.text1}</Typography>
                      <FormControl fullWidth>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder={data?.placeHolder}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Typography
                                  variant="subTitle1"
                                  sx={{
                                    zIndex: 1,
                                    color: "rgba(0, 0, 0, 0.60)",
                                    opacity: "0.5",
                                  }}
                                >
                                  {data?.page}
                                </Typography>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </FormControl>
                    </Box>
                  );
                })}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainDocumentBox>
  );
}
Step1MeetingComponent.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
