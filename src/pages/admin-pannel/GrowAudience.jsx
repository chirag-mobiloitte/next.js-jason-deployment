import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .shadowBox": {
      borderRadius: "20px",
      flexDirection: "column",
      padding: "30px",
      background: "#F7F7F7",
      width: "100%",
      backgroundSize: "cover !important",
      backgroundRepeat: "no-repeat !important",
      objectFit: "cover !important",
    },
    "& h6": {
      color: "#161E29",
      fontWeight: 500,
      marginLeft: "8px",
    },
    "& p": {
      color: "var(--style, rgba(22, 30, 41, 0.60))",
      fontWeight: 400,
      marginBottom: "16px",
    },
    "& button": {
      color: "#FFF",
      background: "#7A69FE",
    },
    "& button:hover": {
      color: "#7A69FE",
      background: "#FFF",
    },
    "& .responsiveButton1": {
      marginLeft: "10px",
      [theme.breakpoints.down("md")]: {
        marginTop: "8px",
        marginLeft: "0px",
      },
    },
    "& .responsiveButton2": {
      marginTop: "8px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "8px",
      },
    },
  },
}));
export default function GrowAudience() {
  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="shadowBox">
          <Box className="displayStart" mb={1}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Grow your Audience</Typography>
          </Box>
          <Typography variant="body1">Campaign Name</Typography>
          <Box className="displayWrap">
            <Button variant="outlined" color="secondary">
              Connect with social networks
            </Button>
            <Box className="responsiveButton1">
              <Button variant="outlined" color="secondary">
                Connect with Social Networks
              </Button>
            </Box>
            <Box className="responsiveButton2">
              <Button variant="outlined" color="secondary">
                Connect with social networks
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
}
GrowAudience.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
