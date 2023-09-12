import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Avatar,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import HomeLayout from "src/layout/HomeLayout";
import { FiDownload, FiCamera, FiPhoneMissed } from "react-icons/fi";
import Switch from "@mui/material/Switch";
import { IoAddCircleOutline } from "react-icons/io5";
import { ExpandMore } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import { RiArrowDropDownLine } from "react-icons/ri";
const InformationBox = styled(Box)(({ theme }) => ({
  "& .MuiSwitch-root": {
    border: "2px solid #7c69ff",
    borderRadius: "50px",
  },
  "& .MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked": {
    color: " #7c69ff !important",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "transparent",
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    backgroundColor: "currentColor",
    width: "20px",
    height: "20px\npx",
    borderRadius: "50%",
    color: "rgba(122, 105, 254, 1)",
  },
  "& .infoBox": {
    "& h5": {
      fontWeight: "500",
    },
  },
  "& .flexBox": {
    display: "flex",
    alignItems: "flex-start",
    "@media(max-width:1100px)": {
      display: "block",
    },
    "& h5": {
      fontSize: "25px",
      fontWeight: "500",
      marginTop: "20px",
    },
    "& p": {
      lineHeight: "27px",
      color: "rgba(22, 30, 41, 0.75)",
      margin: "10px 0px 14px",
    },
  },
  "& .uploadImageBox": {
    border: "1px dotted rgba(0, 0, 0, 0.6)",
    padding: "10px",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    "& .MuiAvatar-root": {
      width: "180px",
      height: "180px",
    },
  },
  "& .buttonFlex": {
    display: "flex",
    alignItems: "center",
    "@media(max-width:465px)": {
      display: "block",
    },
    "& svg": {
      fontSize: "20px",
    },
  },
  "& .buttonLeft": {
    margin: "0px 10px",
    "@media(max-width:465px)": {
      display: "block",
      margin: "10px 0px",
    },
  },
  "& .leftMargin": {
    marginLeft: "20px",
  },
  "& .phoneCircle": {
    backgroundColor: "rgba(122, 105, 254, 1) !important",
  },
}));

const selectoption = [{ title: "Male" }, { title: "Female" }];

const selectoption1 = [{ title: "English" }, { title: "Hindi" }];
const selectoption2 = [{ title: "Married" }, { title: "Unmarried" }];
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function FoodNutrition() {
  return (
    <>
      <InformationBox>
        <Container>
          <Paper elevation={3} className="infoBox">
            <Grid container spacing={2}>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Typography variant="h5">
                  Primary Physician’s Infomation
                </Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box mb={3}>
                      <Typography variant="body2">Full Name</Typography>
                      <Box mt={1}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter full name"
                        />
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="body2">Date Of Birth</Typography>
                      <Box mt={1}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Select date"
                        />
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="body2">Phone Number</Typography>
                      <Box mt={1}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter phone number"
                        />
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="body2">Select Gender</Typography>

                      <Box
                        style={{ width: "100%", position: "relative" }}
                        mt={1}
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
                              placeholder="Search input"
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                              }}
                            />
                          )}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box mb={3}>
                      <Typography variant="body2">Dr Name</Typography>
                      <Box mt={1}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter dr. name"
                        />
                      </Box>
                    </Box>
                    <Box mb={2}>
                      <Typography variant="body2">Surgery</Typography>
                      <Box mt={1}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter surgery name"
                        />
                      </Box>
                    </Box>
                    <Box mb={3}>
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
                </Grid>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Address:</Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Address Line 1</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter address line 1"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">City</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter city "
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Country</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter country"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Address Line 2 (Optional)
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter address line 2"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">State</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter state name"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Zip / Postal Code
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter zip code"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box mt={5}>
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Other Details:</Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Language Spoken</Typography>
                        <Box
                          style={{ width: "100%", position: "relative" }}
                          mt={1}
                        >
                          <RiArrowDropDownLine className="dopicon" />
                          <Autocomplete
                            freeSolo
                            disableClearable
                            fullWidth
                            options={selectoption1.map(
                              (option) => option.title
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Search input"
                                InputProps={{
                                  ...params.InputProps,
                                  type: "search",
                                }}
                              />
                            )}
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Select Sexual Orientation{" "}
                        </Typography>
                        <Box
                          style={{ width: "100%", position: "relative" }}
                          mt={1}
                        >
                          <RiArrowDropDownLine className="dopicon" />
                          <Autocomplete
                            freeSolo
                            disableClearable
                            fullWidth
                            options={selectoption2.map(
                              (option) => option.title
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Search input"
                                InputProps={{
                                  ...params.InputProps,
                                  type: "search",
                                }}
                              />
                            )}
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Favorite TV Shows{" "}
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter favorite tv shows"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Select Relationship Status
                        </Typography>
                        <Box
                          style={{ width: "100%", position: "relative" }}
                          mt={1}
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
                                placeholder="Search input"
                                InputProps={{
                                  ...params.InputProps,
                                  type: "search",
                                }}
                              />
                            )}
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Hobbies</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter hobbies"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Favorite Books</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter favorite books"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box mt={5}>
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Emergency Contact Info :</Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Box className="flexBox" mb={5}>
                    <Box className="uploadImageBox">
                      <Avatar src="/images/card/avatar.png" alt="" />
                    </Box>
                    <Box className="leftMargin">
                      <Typography variant="h5">
                        Upload Profile Picture
                      </Typography>
                      <Typography variant="body2">
                        Browse and choose profile picture from your computer or
                        open your webcam and capture your profile.
                      </Typography>
                      <Box mt={1} className="buttonFlex">
                        <Button variant="contained" color="primary" fullWidth>
                          <FiDownload />
                          &nbsp; Upload Profile
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          fullWidth
                          className="buttonLeft"
                        >
                          <FiCamera />
                          &nbsp; Open Webcam
                        </Button>
                        <IconButton className="phoneCircle">
                          <FiPhoneMissed style={{ color: "#fff" }} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Name</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter name"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Email </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter email address "
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Select Authorized to Make Decisions{" "}
                        </Typography>
                        <Box
                          style={{ width: "100%", position: "relative" }}
                          mt={1}
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
                                placeholder="Search input"
                                InputProps={{
                                  ...params.InputProps,
                                  type: "search",
                                }}
                              />
                            )}
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Medical Conditions
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter medical condition"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Telephone</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter telephone number"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">
                          Relationship (E.g. spouse, child, siblings, etc)
                        </Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter relationship status"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Allergies</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter allergies"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Message</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter Message"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box mt={5}>
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Typography variant="h5">Family Contact Info :</Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Box mb={3}>
                    <Typography variant="body2">Contact 1</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={2}>
                        <Typography variant="body2">Name</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter name"
                          />
                        </Box>
                      </Box>
                      <Box mb={2}>
                        <Typography variant="body2">Telephone</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter telephone number"
                          />
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Switch {...label} defaultChecked />

                        <Typography
                          variant="body1"
                          style={{ fontWeight: "300" }}
                        >
                          Receive family weekly update through email.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Email</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter email address"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Relationship</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter relationship status"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mb={3} mt={3}>
                    <Typography variant="body2">Contact 2</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Name</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter name"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Telephone</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter telephone number"
                          />
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Switch {...label} defaultChecked />

                        <Typography
                          variant="body1"
                          style={{ fontWeight: "300", marginLeft: "10px" }}
                        >
                          Receive family weekly update through email.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box mb={3}>
                        <Typography variant="body2">Email</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter email address"
                          />
                        </Box>
                      </Box>
                      <Box mb={3}>
                        <Typography variant="body2">Relationship</Typography>
                        <Box mt={1}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter relationship status"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Box
                      mt={3}
                      display="flex"
                      justifyContent="flex-end"
                      width="100%"
                    >
                      <Button variant="outlined" color="secondary">
                        <IoAddCircleOutline
                          style={{
                            fontSize: "20px",
                            color: "rgba(122, 105, 254, 1)",
                          }}
                        />
                        &nbsp; Add Another
                      </Button>
                    </Box>
                  </Grid>
                  <Box mt={1}>
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </InformationBox>
    </>
  );
}

FoodNutrition.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
