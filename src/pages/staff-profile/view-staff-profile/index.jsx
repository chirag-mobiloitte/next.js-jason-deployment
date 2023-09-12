// import React from "react";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import HomeLayout from "src/layout/HomeLayout";
import { documentData } from "src/data";
import {
  detailsDataForStaff,
  othersDataForStaff2,
  othersDataForStaff1,
  addressDataForStaff,
} from "src/data";
import ReviewAboutYourself from "../new-staff-profile/ReviewAboutYourself";
const ReadProfileBox = styled(Box)(({ theme }) => ({
  padding: "120px 0px",
  "& .createvariantButton": {
    marginRight: "15px",
  },
  "& .firsrdetailsText": {
    minWidth: "300px",
    "& .headingText": {
      minWidth: "150px",
    },
  },
  "& .responsiveManage": {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  "& .profileImg1": {
    height: "248px",
    width: "179px",
    objectFit: "cover",
    borderRadius: "100px 100px 100px 100px",
  },
  "& .mainMarginBox": {
    marginTop: "50px",
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
  "& .readlineBorder": {
    width: "auto",
    maxWidth: "100%",
    height: "324px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "& .readlineBorder": {
    height: "175px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function ViewStaffProfile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <ReadProfileBox>
        <Box className="displayStart">
          <Box>
            <img src="/images/readmore.svg" alt="" className="profileImg1" />
          </Box>
          <Box ml={3}>
            <Typography variant="h2">Maria Jain</Typography>
            <Box mt={2}>
              <Typography variant="body2">Room 234</Typography>
              <Typography variant="body2" mt={1}>
                Resident Since November
              </Typography>
              <Typography variant="body2" mt={1}>
                2023
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box mt={3} className="mainMarginBox">
          <Grid container spacing={2}>
            {documentData?.map((data, i) => {
              return (
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <PersonalDocument data={data} key={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box mt={3} mb={3} className="displayStart">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              router.push("/documentplan");
            }}
            style={{
              background: "linear-gradient(147deg, #FF5C3F 0%, #E73827 100%)",
            }}
          >
            Access Training Results
          </Button>
        </Box>
        <Paper elevation={3}>
          <Box className="responsiveManage">
            <Box>
              <Typography variant="h6">Basic Details:</Typography>
              {detailsDataForStaff?.map((data, i) => {
                return (
                  <Box className="displayStart firsrdetailsText" mt={1} pb={1}>
                    <Box className="headingText">
                      <Typography variant="body1">{data.name}</Typography>
                    </Box>
                    <Box ml={1}>
                      <Typography variant="body2">
                        {data.description}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                border: "1px solid #CFCFCF",
                width: "1px",
                height: "320px",
              }}
            />

            <Box>
              <Typography variant="h6">Address:</Typography>
              {addressDataForStaff.map((data, i) => {
                return (
                  <Box className="displayStart firsrdetailsText" mt={1} pb={1}>
                    <Box className="headingText">
                      <Typography variant="body1">
                        {data.addressname}
                      </Typography>
                    </Box>

                    <Box ml={1}>
                      <Typography variant="body2">
                        {data.addressdetails}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Paper>

        <Box mt={3}>
          <Paper elevation={3}>
            <Typography variant="h6">Other Details</Typography>
            <Box className="responsiveManage">
              <Box>
                {othersDataForStaff1.map((data, i) => {
                  return (
                    <Box
                      className="displayStart firsrdetailsText"
                      mt={1}
                      pb={1}
                    >
                      <Box className="headingText">
                        <Typography variant="body1">{data.fullname}</Typography>
                      </Box>
                      <Box ml={1}>
                        <Typography variant="body2">{data.drname}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                  border: "1px solid #CFCFCF",
                  width: "1px",
                  height: "100px",
                }}
              />
              <Box>
                {othersDataForStaff2?.map((data, i) => {
                  return (
                    <Box
                      className="displayStart firsrdetailsText"
                      mt={1}
                      pb={1}
                    >
                      <Box className="headingText">
                        <Typography variant="body1">{data.fullname}</Typography>
                      </Box>

                      <Box ml={1}>
                        <Typography variant="body2">{data.drname}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box mt={2}>
          <ReviewAboutYourself />
        </Box>
      </ReadProfileBox>
    </Container>
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

ViewStaffProfile.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
