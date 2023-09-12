import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import Link from "next/link";
const MainComponent = styled("Box")(({ theme }) => ({
  " & .mvpLogo": {
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "24px",
    },
  },
  "& .loginlayoutleftSide": {
    width: "50%",
    left: "0",
    position: "absolute",
    background: "#ffffff",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  "& .mainLoginBox": {
    height: "100vh",
    display: "flex",
    zIndex: "9",
    position: "relative",
    background: "#ffffff",
    justifyContent: "center",
  },
  "& .rightlayoutleftSide": {
    right: "0",
    width: "50%",
    height: "calc(100vh - 37px)",
    display: "flex",
    margin: "20px",
    zIndex: "1",
    position: "fixed",
    borderRadius: "10px",
    backgroundColor: "#7A69FE",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundPosition: "top right",
    backgroundPosition: "top right",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  "& .containerBox": {
    maxWidth: "700px",
    padding: "20px 34px 30px 20px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "600px",
      padding: "80px 20px 0px",
    },
  },
  " .sideLayout": {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    "& .gridSecond": {
      "& .body1": {
        margin: "10px 0 30px",
      },
      "& .overlapImages": {
        position: "relative",
      },
      "& .overImg": {
        position: "absolute",
        top: "78px",
        left: "162px",
      },
      "& h6": {
        fontWeight: "300",
        fontSize: "25px",
      },
    },
  },
}));

export default function LoginLayout({ children }) {
  return (
    <MainComponent>
      <Box className="mainLoginBox">
        <Box className="loginlayoutleftSide">
          <Container className="containerBox">
            <Link href="/">
              <Box className="mvpLogo">
                <img src="/images/mvpCareLogo.svg" />
              </Box>
            </Link>
            <Box>{children}</Box>
          </Container>
        </Box>

        <Box className="rightlayoutleftSide">
          <Box className="sideLayout">
            <Box className="gridSecond">
              <Box>
                <Typography variant="h6" color="#FFFFFF">
                  The simplest wat to manage <br /> health data
                </Typography>
                <Box className="body1">
                  <Typography variant="body1" color="#FFFFFFBF">
                    Enter your credentials to access your account
                  </Typography>
                </Box>
              </Box>
              <Box className="overlapImages">
                <img src="/images/goalImg1.png" className="belowImg" />
                <img
                  src="/images/goalImg2.png"
                  className="overImg loginimgbox"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}></Grid> */}

      {/* <Hidden mdDown>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className="sideLayout">
              <Box className="gridSecond">
                <Box>
                  <Typography variant="h4" color="#FFFFFF">
                    The simplest wat to manage <br /> health data
                  </Typography>
                  <Box className="body1">
                    <Typography variant="body1" color="#FFFFFFBF">
                      Enter your credentials to access your account
                    </Typography>
                  </Box>
                </Box>
                <Box className="overlapImages">
                  <img src="/images/goalImg1.png" className="belowImg" />
                  <img src="/images/goalImg2.png" className="overImg" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Hidden> */}
      {/* </Grid> */}
    </MainComponent>
  );
}
