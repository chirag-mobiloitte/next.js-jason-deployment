import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const data = [
  {
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .reportResultBox": {
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
export default function ReportResult() {
  const router = useRouter();
  const handelIncidentPage = () => {
    router.push("/create-report/incident-report");
  };

  const handelPlanningFiles = () => {
    router.push("/create-report/care-planning-files");
  };

  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="reportResultBox">
            <Box className={`displaySpacebetween responsiveManage`}>
              <Typography variant="h2">Report Results</Typography>
            </Box>
            <Box className="displaySpacebetween">
              <Box>
                <Typography variant="h5">Incident Report</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Date: 07/08/2023</Typography>
              </Box>
            </Box>
            <Paper elevation={3} style={{ margin: "0px 0px 32px 0px" }}>
              {data &&
                data.map((value, index) => {
                  return (
                    <Box style={{ margin: "8px 0px" }}>
                      <Typography variant="body2">{value?.text}</Typography>
                    </Box>
                  );
                })}
            </Paper>

            <Box className={`displayStart responsiveManage`}>
              <Button
                onClick={handelIncidentPage}
                variant="contained"
                color="primary"
              >
                Edit
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
                  onClick={handelPlanningFiles}
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
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

ReportResult.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
