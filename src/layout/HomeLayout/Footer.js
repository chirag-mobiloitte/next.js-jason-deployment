import React, { useState } from "react";
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
import ScrollAnimation from "react-animate-on-scroll";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .footerBox": {
    padding: "122px 0px 0px",
    background: `url('/images/footerBg.png')`,
    width: "100%",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",
    [theme.breakpoints.down("md")]: {
      padding: "45px 8px 0px",
    },
    "& .MuiTextField-root": {
      width: "calc(100% - 61px)",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderStyle: "none !important",
      borderColor: "none !important",
      borderWidth: "none !important",
      borderRadius: "50px",
      background: "transparent",
    },
    "& .footerlogo": {
      width: "auto",
      maxWidth: "124px",
    },
    "& .headBox": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
    },
    "& .privacyText": {
      position: "relative",
      zIndex: "9",
      "&::after": {
        top: "0px",
        right: "-18px",
        width: "3px",
        height: "100%",
        content: "''",
        position: "absolute",
        backgroundColor: "#ffffff",
      },
    },
    "& .linkText": {
      textDecoration: "none",
    },
    "& .slick-center": {
      position: "relative",
      zIndex: "999999",
      transform: "scale(1.2)",
    },
    "& .slick-slide": {
      transition: "transform 1s ease-in-out",
    },
    "& .sliderBox": {
      margin: "55px 0px 159px",
      "& input": {
        width: "calc(100% - 61px)",
        borderRadius: "50px",
        background: "#fff",
        height: "24px !important",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
    },
    "& .copyRightBox": {
      display: "flex",
      justifyContent: "space-between !important",
      padding: "45px 0",
    },
  },
}));

const Footer = () => {
  const [value, setValue] = useState();
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "recomended",
    centerPadding: "190px",
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    // autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "160px",
          // autoplay: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "100px",
          // autoplay: true,
        },
      },
      {
        breakpoint: 1063,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          centerMode: true,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <MainComponent>
      <Box className="footerBox mainBox1">
        <Box className="headBox">
          <Box>
            <ScrollAnimation animateIn="zoomInDown">
              <img
                src="/images/footer_logo_img.png"
                alt="talkimg"
                className="talkimg"
              />
            </ScrollAnimation>
          </Box>
          <Box></Box>
        </Box>
        <Box className="sliderBox sliderBoxres">
          <Slider
            {...settings}
            className="albumslickbottomslider bottomslickbottomslider"
          >
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
            <Box>
              {/* <PhoneInputComponent value={phone} onChange={handlePhoneChange} /> */}

              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </Box>
          </Slider>
        </Box>

        <Divider sx={{ backgroundColor: "#FFFFFF40", marginTop: "20px" }} />
        <Container>
          <Box className="copyRightBox copyRightBox1">
            <Box className="titleBox displayStart">
              <Box>
                <img
                  src="/images/footer_logo.png"
                  className="footerlogo footerlogo1"
                />
              </Box>

              <Box className="termConditionBox displayStart">
                <Link href="/auth/login" className="linkText">
                  <Typography
                    color="#fff"
                    variant="body1"
                    ml={4}
                    className="privacyText"
                  >
                    Login
                  </Typography>
                </Link>
                {/* <Link href="/auth/login" className="linkText">
                  <Typography color="#fff" variant="body1" ml={4}>
                    Terms & Conditions
                  </Typography>
                </Link> */}

                <Link href="/care-plan" className="linkText">
                  <Typography color="#fff" variant="body1" ml={4}>
                    Care Planning
                  </Typography>
                </Link>

                <Link href="/document/find-document" className="linkText">
                  <Typography color="#fff" variant="body1" ml={4}>
                    Find Document
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box className="copyBox">
              <Typography variant="body1" color="rgba(255, 255, 255, 0.60)">
                Copyright©2023. Created with love by MVP CARE
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default Footer;
