import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const TabbedNavigation = ({ tabButtonData }) => {
  const [activeTab, setActiveTab] = useState(tabButtonData && tabButtonData[0]);

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8} sm={7}>
          <div className="tab-content">
            <ScrollAnimation animateIn="fadeInLeft">
              <img src={activeTab?.img} alt="images" className="bgx1" />
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sm={4}>
          {tabButtonData &&
            tabButtonData.map((data, index) => {
              return (
                <div className="tab1" key={`${data?.name}${index}`}>
                  <div>
                    <ScrollAnimation animateIn="fadeIn">
                      <button
                        className={activeTab.name === data.name ? "active" : ""}
                        onClick={() => setActiveTab(data)}
                      >
                        {data.name}
                      </button>
                    </ScrollAnimation>
                  </div>
                </div>
              );
            })}

          <Box className="outfitbottomtext">
            <img
              src="images/outtop.png"
              alt="border"
              className="topborderImg"
            />
            <ScrollAnimation animateIn="zoomIn">
              <Typography variant="h6">
                View and create care profiles
              </Typography>
            </ScrollAnimation>

            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowOutwardIcon />}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default TabbedNavigation;
