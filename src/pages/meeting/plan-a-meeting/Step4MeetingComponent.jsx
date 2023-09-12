import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { step4MeetingComponentData } from "src/data";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .step4MeetingComponentBox": {
    margin: "80px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px",
    },
    "& h5": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
      margin: "24px 0px",
    },
    "& .documentCardBox": {
      "& h5": {
        margin: "8px 0px !important",
        color: "rgba(22, 30, 41, 0.87)",
        fontWeight: 400,
      },
    },
    "& img": {
      marginRight: "8px",
    },
    "& .responsiveManage": {
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },
    "& .responsiveButton": {
      marginLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "8px",
        marginLeft: "8px",
      },
    },
  },
}));
export default function Step4MeetingComponent() {
  return (
    <MainDocumentBox>
      <Container>
        <Box className="step4MeetingComponentBox">
          {step4MeetingComponentData &&
            step4MeetingComponentData.map((value, index) => {
              return (
                <Box style={{ margin: "16px 0px" }}>
                  <Typography variant="body2">{value?.text}</Typography>
                </Box>
              );
            })}
          <Box mt={3} className="displayStart responsiveManage">
            <Button variant="contained" color="primary">
              Save Analysis
            </Button>
            <Box className="responsiveButton">
              <Button
                // marginRight="10px"
                variant="contained"
                color="secondary"
                startIcon={
                  <img src="/images/pdf-image.jpg" width="20px" height="20px" />
                }
              >
                Save as PDF
              </Button>
            </Box>
            <Box className="responsiveButton">
              <Button
                // onClick={handelPlanningFiles}
                variant="contained"
                color="secondary"
                startIcon={
                  <img src="/images/doc-img.jpg" width="20px" height="20px" />
                }
              >
                <Box className="displaySpacebetween">Save as DOC</Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </MainDocumentBox>
  );
}

Step4MeetingComponent.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
