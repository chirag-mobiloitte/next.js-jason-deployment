import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const MainComponent = styled("Box")((theme) => ({
  
  "& .mainBox": {
    padding: "80px 0px 50px",
    backgroundColor: "#101017",
  },

  "& .headText": {
    textAlign: "center",
    "& h2":{
      // color:theme.text.primary
    }

    // [theme.breakpoints.down("md")]: {
    //   fontSize:"40px"
    // },
    // [theme.breakpoints.up('md')]: {
    //   fontSize:"20px",
    // },
    
    // fontSize: theme.breakpoints.up("md") ? "20px" : "inherit",
  },
  "& .sliderBox": {
    marginTop: "50px",
    textAlign: "center",
    color: "white",
    
  },
}));

const testing = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <MainComponent>
      <Box className="mainBox">
        <Container>
          <Box className="headText">
            <Box>
              <Typography variant="h2" color={"white"}>
                Healthcare with AI Connects Patients & Doctors
              </Typography>
            </Box>
          </Box>
          <Box className="sliderBox">
            <Slider {...sliderSettings}>
              <Box>
                <img src="/images/screen1.png" alt="Slide 1" />
                <Typography variant="body1">Care Planning</Typography>
              </Box>
              <Box>
                <img src="/images/screen2.png" alt="Slide 2" />
                <Typography variant="body1">Business Operations</Typography>
              </Box>
              <Box>
                <img src="/images/screen3.png" alt="Slide 3" />
                <Typography variant="body1">Nutritions</Typography>
              </Box>
              <Box>
                <img src="/images/screen4.png" alt="Slide 4" />
                <Typography variant="body1">HR</Typography>
              </Box>
              <Box>
                <img src="/images/screen5.png" alt="Slide 5" />
                <Typography variant="body1">Policies</Typography>
              </Box>
              <Box>
                <img src="/images/screen6.png" alt="Slide 6" />
                <Typography variant="body1">Legal Matters</Typography>
              </Box>
            </Slider>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default testing;


