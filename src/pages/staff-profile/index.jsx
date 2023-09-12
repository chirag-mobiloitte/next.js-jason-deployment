import React from "react";

import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
// import HomeLayout from "src/layout/HomeLayout";
import { carePlanData } from "src/data";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import HomeLayout from "src/layout/HomeLayout";
import CareCard from "../care-gatestarted/CareCard";
const CareMainBox = styled(Box)(({ theme }) => ({
  padding: "120px 0px",
  "& .MuiPagination-ul": {
    justifyContent: "center",
  },
  "& .carduserBox": {
    padding: "70px 0",
  },
  "& .textBox": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:935px)": {
      display: "block",
    },
  },
  "& .buttonFlex": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:935px)": {
      justifyContent: "left",
    },
    "@media(max-width:468px)": {
      display: "block",
    },
    "& button": {
      margin: "0px 5px",
      height: "52px",
      textTransform: "capitalize",
      "@media(max-width:468px)": {
        margin: "10px 0px",
        width: "100%",
      },
    },
  },
}));

export default function StaffProfile() {
  const router = useRouter();
  const newProfile = () => {
    router.push("care-plan/create-new-profile");
  };

  return (
    <CareMainBox>
      <Container>
        <Box className="textBox">
          <Typography variant="h2">Staff Profiles</Typography>
          <Box className="buttonFlex">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                router.push("");
              }}
            >
              Create New staff Profile
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                router.push("");
              }}
            >
              Create a staff analysis
            </Button>
          </Box>
        </Box>
        <Box className="carduserBox">
          <Grid container spacing={2}>
            {carePlanData?.map((data, i) => {
              return (
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <CareCard data={data} index={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box align="center">
          <Pagination count={10} color="primary" />
        </Box>
      </Container>
    </CareMainBox>
  );
}
StaffProfile.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
