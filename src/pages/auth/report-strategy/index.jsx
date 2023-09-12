import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import CircularProgressBar from "src/components/CircularProgressBar";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    height: "100%",
    padding: "20px",
    "& p": {
      margin: "10px 0 45px 0",
    },
    "& .searchBox": {
      margin: "50px 0",
    },
  },
}));

export default function ReportAndStategy() {
  const router = useRouter();
  return (
    <MainComponent>
      <Box>
        <Box className="reportStrategyBox">
          <Box className="careLogoBox">
            <Box>
              <Typography variant="h4">
                Building your Report & Strategy
              </Typography>
              <Typography variant="body2">
                “Crafting Your Competitive Edge and Business Strategy for
                Unparalleled CQC Excellence!”
              </Typography>
            </Box>
            <Box mt={5}>
              <CircularProgressBar progress="100"/>
            </Box>
            <Box className="displayCenter">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("/care-plan");
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
}

ReportAndStategy.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
