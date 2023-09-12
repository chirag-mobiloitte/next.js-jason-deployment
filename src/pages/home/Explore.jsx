import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import TabButtonexplore from "./TabButtonexplore";
const tabButtonData = [
  {
    name: "Composing Emails",
    img: "images/explore.png",
  },
  {
    name: "Crafting Policies",
    img: "images/explore.png",
  },
  {
    name: "Creating Documents",
    img: "images/explore.png",
  },
  {
    name: "Locating Saved Documents",
    img: "images/explore.png",
  },
];

export default function Explore() {
  return (
    <Box className="expertiseBox exploreBox">
      <img src="images/circleimg.png" alt="cirlceimg" className="circleimg" />
      <Container maxWidth="md">
        <Box className="expertiseBoxtext" style={{ position: "relative" }}>
          <Box className="displayCenter exploreText">
            <Typography variant="h2" className="exploretextmain">
              Explore Our
              <div className="eseBox">
                {" "}
                <span className="eseBoxscroll">
                  <img src="images/ease.png" alt="image" />
                </span>
                <Typography variant="h2" className="easeText">
                  {" "}
                  Ease
                </Typography>
              </div>{" "}
              Features
            </Typography>
            <img
              src="images/borderbottom.png"
              alt="border"
              className="borderbottom borderbottom1"
            />
          </Box>
        </Box>
        <TabButtonexplore tabButtonData={tabButtonData} />
      </Container>
    </Box>
  );
}
