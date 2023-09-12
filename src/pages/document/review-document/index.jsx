import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Button, Paper, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { FiEdit2 } from "react-icons/fi";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .reviewDocumentBox": {
    "& h2": {
      color: "#161E29",
    },
    "& h5": {
      color: "#161E29",
      fontWeight: 500,
      margin: "16px 0px",
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
    "& .responsiveBoxManage": {
      minWidth: "180px",
    },
  },
}));
export default function index() {
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="reviewDocumentBox">
            <Box className={`displaySpacebetween responsiveManage`}>
              <Typography variant="h2">Review Document</Typography>
              <Box className={`displaySpacebetween responsiveManage`}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FiEdit2 />}
                  onClick={() => {
                    router.push("/document/view-folder");
                  }}
                >
                  Edit Details
                </Button>
              </Box>
            </Box>
            <Paper elevation={3} style={{ margin: "32px 0px" }}>
              <Box className="displayStart" mt={1} mb={1}>
                <Box className="responsiveBoxManage">
                  <Typography variant="h5">Category:</Typography>
                </Box>
                <Box>
                  <Typography variant="h5">Description:</Typography>
                </Box>
              </Box>
              {reviewDocumentBoxData &&
                reviewDocumentBoxData?.map((value, index) => {
                  return (
                    <Box className="displayStart" mt={1} mb={1}>
                      <Box className="responsiveBoxManage">
                        <Typography
                          variant="body2"
                          style={{
                            color: "rgba(0, 0, 0, 0.87)",
                            fontWeight: 500,
                          }}
                        >
                          {value?.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          style={{
                            color: "rgba(22, 30, 41, 0.87)",
                            fontWeight: 300,
                          }}
                        >
                          {value?.description}
                        </Typography>
                      </Box>
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
                Save Analysis
              </Button>
              <Box className="responsiveButton">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={
                    <img
                      src="/images/pdf-image.jpg"
                      width="20px"
                      height="20px"
                    />
                  }
                >
                  Save as PDF
                </Button>
              </Box>
              <Box className="responsiveButton">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={
                    <img src="/images/doc-img.jpg" width="20px" height="20px" />
                  }
                >
                  Save as DOC
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
