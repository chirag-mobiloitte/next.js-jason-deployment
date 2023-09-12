import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    padding: "80px 0px 50px",
    background: `url('images/footerBg.png')`,
    width: "100%",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",

    "& .headBox": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
    },

    "& .sliderBox": {
      margin: "150px 0px",

      "& input": {
        width: "100%",
        borderRadius: "50px",
        background: "#fff",
      },

      "& Button": {
        width: "100%",
      },

      "& .slick-dots": {
        zIndex: "-1 ",
      },

      "& .slick-prev, .slick-next": {
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "60px 530px",
        border: "2px solid #FFF",
        background: "#7A69FE",
      },
      "& .slick-prev": {},
      "& .slick-next": {},
      // "& .slick-prev:before":{
      //   color: "black",
      //   fontSize: "40px",
      // }
    },
    "& .copyrightBox": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "10px",
    },

    "& .menuBox": {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "50px",

      " & .titleBox": {
        display: "flex",
        alignItems: "center",
      },

      "& .termConditionBox": {
        display: "flex",
        justifyContent: "space-evenly",
      },
    },
  },
}));

const Footer = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: "true",

    //
  };

  return (
    <MainComponent>
      <Box className="mainBox">
        <Container>
          <Box className="headBox">
            <Box>
              <Typography variant="h1">Let's Talk About</Typography>
            </Box>
            <Box>
              <Typography variant="h1" style={{ color: "#fff" }}>
                MVP Care.
              </Typography>
            </Box>
          </Box>
          <Box className="sliderBox">
            <Slider {...sliderSettings}>
              <Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="First Name"
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Last Name"
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Company Name"
                />
              </Box>
            </Slider>
          </Box>

          <Divider sx={{ backgroundColor: "#FFFFFF40", marginTop: "20px" }} />
          <Box className="menuBox">
            <Box className="titleBox">
              <Box>
                <Typography variant="h5" color="#FFFFFF">
                  MVP Care.
                </Typography>
              </Box>
              <Box className="termConditionBox">
                <Box>
                  <Typography color="#FFFFFF99" ml={4}>
                    | Privacy Policy
                  </Typography>
                </Box>
                <Box>
                  <Typography color="#FFFFFF99" ml={4}>
                    | Terms & Conditions
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Link href="bussiness-operations" className="linkText">
                <Typography color="#FFFFFF99">Business Operations</Typography>
              </Link>
              <Link href="/planning-flow" className="linkText">
                <Typography color="#FFFFFF99" ml={4}>
                  Care Planning
                </Typography>
              </Link>
              <Link href="/human-resources" className="linkText">
                <Typography color="#FFFFFF99" ml={4}>
                  Human Resources
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className="copyrightBox">
            <Typography variant="body2" marginTop="10px" color="#FFFFFF99">
              Copyright©2023. Created with love by MVP CARE
            </Typography>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default Footer;
