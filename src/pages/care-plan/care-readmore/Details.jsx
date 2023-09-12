import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Avatar,
  Paper,
  IconButton,
} from "@mui/material";
import {
  detailsData,
  addressData,
  emergencyData,
  emergencymedicalData,
  familyData,
  othersData,
  othersData1,
} from "src/data";

import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
const ReadProfileBox = styled("Box")(({ theme }) => ({
  "& .firsrdetailsText": {
    width: "160px",
  },
  "& .emergencydetailsText": {
    width: "230px",
  },
  "& .alignItemStart": {
    alignItems: "flex-start",
  },
  "& .readHomeLayout": {
    padding: "80px 0 0",
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

export default function Details() {
  return (
    <>
      <ReadProfileBox>
        <Box className="readHomeLayout ">
          <Box className="displaySpacebetween detailspaddingBox " mb={4}>
            <Typography variant="h4">Details Overview</Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EditIcon />}
            >
              Edit Details
            </Button>
          </Box>
          <Paper elevation={3}>
            <Box className="displaySpacebetween multipleButton">
              <Box>
                <Typography variant="h6">Basic Details:</Typography>
                {detailsData.map((data, i) => {
                  return (
                    <Box className="displayStart" mt={3} pb={1}>
                      <Typography variant="body1" className="firsrdetailsText">
                        {data.fullname}
                      </Typography>
                      <Box>
                        <Typography variant="body2">{data.drname}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box>
                <img
                  src="/images/lineborder.svg"
                  alt="lineBorder"
                  className="readlineBorder"
                />
              </Box>
              <Box>
                <Typography variant="h6">Address:</Typography>
                {addressData.map((data, i) => {
                  return (
                    <Box className="displayStart" mt={3} pb={1}>
                      <Typography variant="body1" className="firsrdetailsText">
                        {data.addressname}
                      </Typography>
                      <Box>
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
              <Box className="displaySpacebetween multipleButton">
                <Box>
                  {othersData.map((data, i) => {
                    return (
                      <Box className="displayStart" mt={3} pb={1}>
                        <Typography
                          variant="body1"
                          className="firsrdetailsText"
                        >
                          {data.fullname}
                        </Typography>
                        <Box>
                          <Typography variant="body2">{data.drname}</Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box>
                  <img
                    src="/images/lineborder.svg"
                    alt="lineBorder"
                    className="readlineBorder readlineBorder1"
                  />
                </Box>
                <Box>
                  {othersData1.map((data, i) => {
                    return (
                      <Box className="displayStart" mt={3} pb={1}>
                        <Typography
                          variant="body1"
                          className="firsrdetailsText"
                        >
                          {data.addressname1}
                        </Typography>
                        <Box>
                          <Typography variant="body2">
                            {data.addressdetails1}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box mt={3}>
            <Paper elevation={3}>
              <Box className="displaySpacebetween multipleButton alignItemStart">
                <Box>
                  <Typography variant="h6">Emergency Contact Info </Typography>
                  {emergencyData.map((data, i) => {
                    return (
                      <Box className="displayStart" mt={3} pb={1}>
                        <Typography
                          variant="body1"
                          className="firsrdetailsText emergencydetailsText"
                        >
                          {data.name}
                        </Typography>
                        <Box>
                          <Typography variant="body2">
                            {data.namedetails}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box>
                  <img
                    src="/images/readmore.svg"
                    alt=""
                    className="profileImg1"
                  />
                </Box>
                <Box>
                  <IconButton className="prupleiconButton">
                    <img src="/images/call.svg" alt="call" width="25px" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box mt={3}>
            <Paper elevation={3}>
              <Box className="displaySpacebetween multipleButton alignItemStart">
                <Box>
                  <Typography variant="h6">Emergency Medical Info </Typography>
                  {emergencymedicalData.map((data, i) => {
                    return (
                      <Box className="displayStart" mt={3} pb={1}>
                        <Box>
                          <Typography
                            variant="body1"
                            className="firsrdetailsText emergencydetailsText"
                          >
                            {data.name}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography variant="body2">
                            {data.namedetails}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                <Box>
                  <IconButton className="prupleiconButton">
                    <img src="/images/star.svg" alt="call" width="25px" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box mt={3}>
            <Paper elevation={3}>
              <Box className=" multipleButton alignItemStart">
                <Box>
                  <Typography variant="h6">Family Contact Info </Typography>
                  <Box mt={3}>
                    <Typography variant="body1">Contact 1 </Typography>
                  </Box>

                  {familyData.map((data, i) => {
                    return (
                      <Box className="displayStart" mt={3} pb={1}>
                        <Box>
                          <Typography
                            variant="body1"
                            className="firsrdetailsText emergencydetailsText"
                          >
                            {data.name}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography variant="body2">
                            {data.namedetails}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                <Box>
                  <Box mt={3}>
                    <Typography variant="body1">Contact 2 </Typography>
                  </Box>

                  {familyData.map((data, i) => {
                    return (
                      <Box className="displayStart" mt={3} pb={1}>
                        <Box>
                          <Typography
                            variant="body1"
                            className="firsrdetailsText emergencydetailsText"
                          >
                            {data.name}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography variant="body2">
                            {data.namedetails}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </ReadProfileBox>
    </>
  );
}
