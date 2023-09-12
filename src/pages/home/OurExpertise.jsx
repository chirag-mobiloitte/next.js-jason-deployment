import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import TabButton from "./TabButton";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const tabButtonData = [
  {
    name: "Care Planning",
    img: "images/outfit.png",
  },
  {
    name: "Reports",
    img: "images/outfit.png",
  },
  {
    name: "Meal Planning",
    img: "images/outfit.png",
  },
  {
    name: "Staff Training",
    img: "images/outfit.png",
  },
];

export default function OurExpertise() {
  return (
    <Box className="expertiseBox">
      <Container>
        <Box className="expertiseBoxtext" style={{ position: "relative" }}>
          <Box className="displaySpacebetween">
            <ScrollAnimation animateIn="slideInLeft">
              <Typography variant="h2" style={{ maxWidth: "300px" }}>
                Our Expertise
              </Typography>
            </ScrollAnimation>
            <img
              src="images/borderbottom.png"
              alt="border"
              className="borderbottom"
            />
            <ScrollAnimation animateIn="slideInRight">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowOutwardIcon style={{ color: "#161E29" }} />}
              >
                View All
              </Button>
            </ScrollAnimation>
          </Box>
        </Box>
        <TabButton tabButtonData={tabButtonData} />
      </Container>
    </Box>
  );
}
