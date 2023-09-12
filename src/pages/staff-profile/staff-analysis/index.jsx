import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";


const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .staffAnalysisBox": {
    "& h2": {
      color: "#161E29",
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
export default function index() {
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="staffAnalysisBox">
            <Typography variant="h2">Staff Analysis- The Results</Typography>
            <Box className={`displaySpacebetween responsiveManage`}>
              <Typography variant="h6">Staff Analysis</Typography>
              <Typography variant="body2">Date: 07/08/2023</Typography>
            </Box>
            <Paper elevation={3} style={{ margin: "32px 0px" }}>
              {staffAnalysisData &&
                staffAnalysisData?.map((value, index) => {
                  return (
                    <Box style={{ margin: "8px 0px" }}>
                      <Typography variant="body2">{value?.text}</Typography>
                    </Box>
                  );
                })}
            </Paper>

            <Box className={`displayStart responsiveManage`}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("/document/view-folder");
                }}
              >
                Back to folders
              </Button>
              <Box className="responsiveButton">
                <Button variant="contained" color="secondary">
                  <Box className="displaySpacebetween">
                    <img
                      src="/images/pdf-image.jpg"
                      width="20px"
                      height="20px"
                    />
                    Save as PDF
                  </Box>
                </Button>
              </Box>
              <Box className="responsiveButton">
                <Button variant="contained" color="secondary">
                  <Box className="displaySpacebetween">
                    <img src="/images/doc-img.jpg" width="20px" height="20px" />
                    Save as DOC
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
