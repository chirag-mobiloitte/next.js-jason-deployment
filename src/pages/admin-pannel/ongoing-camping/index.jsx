import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import TableComponent from "src/components/TableComponent";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    "& h2": {
      color: "#161E29",
      fontWeight: "500",
    },
    "& .responsiveManage": {
      marginBottom:"20px",
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
    "& .css-knar8-MuiButtonBase-root-MuiButton-root": {
      color: "#FFF",
      background: "#7A69FE",
    },
  },
}));

const tabledata = [
  {
    titleImg: "/images/table-icon2.svg",
    name: "Get new leads versions 1-5000 emails",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon1.svg",
    name: "warm Email Campaign",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon2.svg",
    name: "Cold Campaign",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon1.svg",
    name: "Upgrade Campaign",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon2.svg",
    name: "Cross sell campaign",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon1.svg",
    name: "App Feedback campaign",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon2.svg",
    name: "Podcast promotion campaign",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
  {
    titleImg: "/images/table-icon1.svg",
    name: "Sales campaign - 2022",
    size: "24/08/2023 ",
    shared: "03/03/2023 ",
  },
];
const tableHead = {
  headingImg: "/images/table-head-icon.svg",
  heading1: "Subject Title",
  heading2: "Created",
  heading3: "Last Edited",
};
export default function CampingTable() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Box className="displaySpacebetween responsiveManage">
              <Typography variant="h2">Contracts</Typography>
              <Box className="displaySpacebetween responsiveManage">
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
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      router.push("/document/ask-question");
                    }}
                  >
                    Ask About Document
                  </Button>
                </Box>
              </Box>
            </Box>
            <Paper elevation={3}>
              <TableComponent tabledata={tabledata} tableHead={tableHead} type = "admin"/>
            </Paper>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

CampingTable.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
