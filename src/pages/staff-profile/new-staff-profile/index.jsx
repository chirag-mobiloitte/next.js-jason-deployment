import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import HomeLayout from "src/layout/HomeLayout";
import { FiDownload, FiCamera } from "react-icons/fi";
import InputMeetingDetails from "./InputMeetingDetails";

const ProfileBox = styled(Box)(({ theme }) => ({
  padding: "120px 0px",

  "& .css-10d36jd-MuiSvgIcon-root-MuiSelect": {
    position: "absolute",
    zIndex: "9",
  },
  "& .profileControl": {
    "& h1": {
      marginBottom: "100px",
    },
  },
  "& .createnewBox": {
    padding: "40px 0px 0px",
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
      maxWidth: "393px",
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
    marginLeft: "10px",
    textTransform: "capitalize",
    "@media(max-width:465px)": {
      display: "block",
      margin: "10px 0px",
    },
  },
  "& .leftMargin": {
    marginLeft: "20px",
  },

  "& .mainMarginBox": {
    marginTop: "90px",
    "@media(max-width:899px)": {
      marginTop: "40px",
    },
  },
  "& .centerimg": {
    position: "absolute",
    left: "48%",
    top: "79%",
  },
  "& .paperBox": {
    height: "100%",
    "& h6": {
      margin: "24px 0px",
      fontSize: "18px",
    },
    "& img": {
      display: "flex",
      alignItems: "center",
    },
    "& p": {
      marginLeft: "10px",
    },
  },
}));

export default function CreateNewProfile() {
  return (
    <>
      <ProfileBox>
        <Container>
          <Box className="profileControl">
            <Typography variant="h2">Staff Profile</Typography>
          </Box>
          <Box className="createnewBox">
            <Grid container spacing={3}>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <Box className="flexBox">
                  <Box className="uploadImageBox">
                    <Avatar src="/images/card/avatar.png" alt="" />
                  </Box>
                  <Box className="leftMargin">
                    <Typography variant="h5">Upload Profile Picture</Typography>
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
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={5}>
            <InputMeetingDetails />
          </Box>
        </Container>
      </ProfileBox>
    </>
  );
}

const PersonalDocument = ({ data }) => {
  return (
    <Box>
      <Paper elevation={3} className="paperBox displayCenter">
        <Box>
          <Box align="center">
            <Avatar src={data.img} sx={{ width: 80, height: 80 }}></Avatar>
          </Box>

          <Box>
            <Typography variant="h6">{data.text1}</Typography>
            <Grid container spacing={2}>
              <img
                src="/images/centerline.png"
                alt="centerimg"
                className="centerimg"
              />
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box display="flex" alignItems="center">
                  <img
                    src="/images/card/docno.png"
                    alt=""
                    width="100%"
                    style={{ width: "100%", maxWidth: "17px" }}
                  />
                  <Typography variant="body1">3,239</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box display="flex" alignItems="center">
                  <img
                    src="/images/card/docdata.png"
                    alt=""
                    width="100%"
                    style={{ width: "100%", maxWidth: "24px" }}
                  />
                  <Typography variant="body2">3,239</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

CreateNewProfile.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
