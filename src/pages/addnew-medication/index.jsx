import React from "react";
import HomeLayout from "src/layout/HomeLayout";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
const MainMedicationBox = styled("Box")(({ theme }) => ({
 "& .MuiSvgIcon-root": {
    zIndex: "999 !important",
    color: "#7A69FE !important",
  },
  "& .css-1wg7rg5-MuiFormControlLabel-root ":{
    marginLeft:"-7px"
  },
 "& .heading":{
  margin: "80px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px",
    },
 },
 " & .MuiOutlinedInput-root": {
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "16px",
  },
},
"& .documentType": {
  "& p": {
    color: "#161E29",
    fontWeight: "400",
    marginBottom: "8px",
  },
},
"& .writeBox": {
  "& h5": {
    color: "#161E29",
    fontWeight: 500,
  },
},

}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function AddnewMedication() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainMedicationBox>
          <Box className="heading">
            <Typography variant="h2">Add New Medication</Typography>
          </Box>
          <Paper elevation={3} className="paperBox">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box className="writeBox">
                  <Typography variant="h5">Medication Details:</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box className="documentType">
                      <Typography variant="body1">Medication Name</Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="Enter medication name"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box className="documentType">
                      <Typography variant="body1">Dosage</Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="mg/ml/table"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box className="documentType">
                      <Typography variant="body1">
                        Form of Medication
                      </Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="tablet/liquid/cream, etc"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box className="documentType">
                      <Typography variant="body1">
                        Route of Administration
                      </Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="oral/IV/topical,etc"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box className="documentType">
                      <Typography variant="body1">Frequency</Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="once daily/twice daily, etc"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box className="documentType">
                      <Typography variant="body1">Start Date</Typography>
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
                      <Typography variant="body1">
                        End Date (if applicable)
                      </Typography>
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
                  <Grid item xs={12}>
                    <Box className="documentType">
                      <Typography variant="body1">
                        Purpose of Medication
                      </Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          multiline
                          rows={2}
                          placeholder="blood pressure, pain relief, etc."
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="documentType">
                      <Typography variant="body1">Prescribed By</Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="Enter Doctor Name"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="documentType">
                      <Typography variant="body1">
                        Pharmacy Name & Address
                      </Typography>
                      <FormControl fullWidth>
                        <TextField
                          variant="outlined"
                          placeholder="Enter Pharmacy Name & Address"
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box style={{ marginTop: "50px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box className="writeBox">
                    <Typography variant="h5">Additional Details:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box className="documentType">
                        <Typography variant="body1">
                          Known Allergies (if any)
                        </Typography>
                        <FormControl fullWidth>
                          <TextField variant="outlined" />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography variant="body1" mt={2}>
                        Is this medication a replacement for another?
                      </Typography>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="documentType">
                        <Typography variant="body1">
                          If yes, specify the previous previous medication
                        </Typography>  
                        <FormControl fullWidth>
                          <TextField variant="outlined"/>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="documentType">
                        <Typography variant="body1">
                          Medication Side Effects Experienced
                        </Typography>
                        <FormControlLabel
                          control={<Checkbox name="noneCheckbox" />}
                          label="Not Known"
                        />
                        <Typography variant="body1">Specify</Typography>
                        <FormControl fullWidth>
                          <TextField variant="outlined"/>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="documentType">
                        <Typography variant="body1">
                          Interactions with other Medications:
                        </Typography>
                        <FormControlLabel
                          control={<Checkbox name="noneCheckbox" />}
                          label="None"
                        />
                       <Typography variant="body1">Specify</Typography>
                        <FormControl fullWidth>
                          <TextField variant="outlined"/>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="documentType">
                        <Typography variant="body1">
                          Special Instructions
                        </Typography>
                        <FormControlLabel
                          control={<Checkbox name="noneCheckbox" />}
                          label="None"
                        />
                       <Typography variant="body1">Specify</Typography>
                        <FormControl fullWidth>
                          <TextField variant="outlined"/>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </MainMedicationBox>
      </Container>
    </Box>
  );
}
AddnewMedication.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
