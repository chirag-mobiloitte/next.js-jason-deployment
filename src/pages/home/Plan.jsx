import React from "react";
import { Box, Typography, Container } from "@mui/material";
import PlanSlider from "./PlanSlider";

export default function Plan() {
  return (
    <Box className="expertiseBox planBox">
      <Container>
        <Box className="expertiseBoxtext" style={{ position: "relative" }}>
          <Box className="displayCenter">
            <Typography variant="h2">
              <span style={{ color: "#7A69FE" }}> Plan and </span>Organize
              <span style={{ fontWeight: "200", margin: "0 9px" }}>
                Anything with
              </span>
              <div className="eseBox planeaseBoxtext">
                {" "}
                <span className="eseBoxscroll">
                  <img
                    src="images/ease.png"
                    alt="image"
                    className="circleboxai"
                  />
                </span>
                <Typography variant="h2" className="easeText">
                  {" "}
                  Ai
                </Typography>
              </div>
            </Typography>
          </Box>
          <Box align="center" mt={6}>
            <img
              src="images/cross.svg"
              alt="crossimg"
              className="lineanimation"
            />
          </Box>
        </Box>
      </Container>
      <PlanSlider />
    </Box>
  );
}
