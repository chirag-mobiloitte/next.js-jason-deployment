import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useRouter } from "next/router";
import React from "react";
import { styled } from "@mui/system";

const MainDocument = styled("Box")(({ theme }) => ({
  "& .reportGeneratorBox": {
    // "& .css-mujjn-MuiInputBase-input-MuiInput-input":{
    //  padding:"8px 0"
    // },
    "& h2": {
      color: "#161E29",
    },
    "& h5": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
      margin: "24px 0px",
    },
    "& h5": {
      color: "#161E29",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.87)",
    },
    "& .completeReportBtn": {
      "@media(max-width:350px)": {
        marginTop: "10px",
      },
    },
  },
}));

const selectoption = [
  { title: "Enter meeting chair name" },
  { title: "Enter meeting chair name" },
  { title: "Enter meeting chair name" },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IncidentReport() {
  const [option, setOption] = React.useState("");

  const router = useRouter();

  const navigateReportResult = () => {
    router.push("/create-report/report-result");
  };
  return (
    <MainDocument>
      <Box className="mainContainerHomeLayout">
        <Container>
          <Box className="reportGeneratorBox">
            <Box>
              <Typography variant="h2">Report Generator</Typography>
            </Box>
            <Box className="displaySpacebetween" mt={7} mb={1}>
              <Box>
                <Typography variant="h5">Create Incident Report</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: "#161e2999 !important" }}>
                  Date: 07/08/2023
                </Typography>
              </Box>
            </Box>
            <Paper elevation={3} sx={{ paddingBottom: "50px" }}>
              <Box>
                <Box>
                  <Typography variant="h5">
                    What was the nature of the incident?
                  </Typography>
                </Box>
              </Box>
              <Box mt={3} className="checkBox displayWrap">
                <Checkbox {...label} />
                <Typography variant="body2">A Fail</Typography>
                <Checkbox {...label} />
                <Typography variant="body2">An Injury</Typography>
                <Checkbox {...label} />
                <Typography variant="body2">Something Else</Typography>
              </Box>
              <Box mt={4} mb={3}>
                <Typography variant="body2">
                  If something else please specify
                </Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>

              <Box mt={5}>
                <Typography variant="h5">
                  What was the nature of the incident?
                </Typography>
              </Box>
              <Box mt={3} className="checkBox displayWrap">
                <Checkbox {...label} />
                <Typography variant="body2">In a Resident’s Room</Typography>
                <Checkbox {...label} />
                <Typography variant="body2">A Communal Area</Typography>
                <Checkbox {...label} />
                <Typography variant="body2">Outside</Typography>
                <Checkbox {...label} />
                <Typography variant="body2">Other</Typography>
              </Box>
              <Box mt={4} mb={3}>
                <Typography variant="body2">If other please specify</Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>
              <Box mt={5}>
                <Typography variant="h5">
                  What time di the incident Occurs?
                </Typography>
              </Box>
              <Box mt={4} mb={3}>
                <Typography variant="body2">HH:MM:SS (AM/PM)</Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>
              <Box mt={5}>
                <Typography variant="h5">
                  Were there any witness to the incident? If so, who were they
                  and what did they see?
                </Typography>
              </Box>
              <Box mt={4} mb={3}>
                <Typography variant="body2">Specify here</Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>
              <Box mt={5}>
                <Typography variant="h5">
                  Did the resident or staff member require medical attention?
                </Typography>
              </Box>
              <Box
                mt={4}
                mb={3}
                style={{ width: "100%", position: "relative" }}
              >
                <RiArrowDropDownLine className="dopicon" />
                <Autocomplete
                  freeSolo
                  disableClearable
                  fullWidth
                  options={selectoption.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select Report Type"
                      variant="standard"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Box>

              <Box mt={5} mb={3}>
                <Typography variant="body2">
                  If so, what kind of treatment was given?
                </Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>

              <Box mt={5}>
                <Typography variant="body2">
                  Were there any witness to the incident? If so, who were they
                  and what did they see?
                </Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>

              <Box mt={5} mb={3}>
                <Typography variant="body2">
                  What follow up actions were taken?
                </Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>
              <Box mt={5} mb={3}>
                <Typography variant="body2">
                  Dic the incident need to be report to any outside agencies or
                  regulatory bodies?
                </Typography>
                <TextField fullWidth id="outlined-basic" variant="standard" />
              </Box>
            </Paper>
            <Box mt={7} className="displayWrap">
            <Box mr={2} mb={2}>
                <Button variant="contained" color="secondary">
                  Auto Generate More Question
                </Button>
              </Box>
              <Box className="completeReportBtn">
                <Button
                  onClick={navigateReportResult}
                  variant="contained"
                  color="primary"
                >
                  Complete Report
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainDocument>
  );
}

IncidentReport.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
