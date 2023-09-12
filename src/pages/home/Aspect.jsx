import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export default function Aspect() {
  return (
    <Box className="expertiseBox">
      <Container maxWidth="md">
        <img
          src="images/aspect_border.png"
          alt="borde"
          className="aspectborder"
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          className="aspectborder aspectbutton"
          endIcon={<ArrowOutwardIcon style={{ color: "#161E29" }} />}
        >
          View All
        </Button>

        <Box style={{ position: "relative" }}>
          <Box className="displayStart">
            <ScrollAnimation animateIn="slideInDown">
              <Typography
                variant="h2"
                className="exploretextmain"
                style={{ maxWidth: "200px" }}
              >
                Aspects of the App
              </Typography>
            </ScrollAnimation>
            <img
              src="images/borderbottom.png"
              alt="border"
              className="borderbottomaspect"
            />
          </Box>
        </Box>
        <Box mt={2}>
          <ScrollAnimation animateIn="slideInUp">
            <Typography
              variant="body2"
              style={{ color: "rgba(22, 30, 41, 0.75)" }}
            >
              Create a Eemail efficiently and quickly.
            </Typography>
          </ScrollAnimation>
        </Box>

        <Box align="center" className="expertiseBoxtext">
          <ScrollAnimation animateIn="zoomIn">
            <img src="images/plan.svg" alt="aspect" />
          </ScrollAnimation>
        </Box>
      </Container>
    </Box>
  );
}
