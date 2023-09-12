import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ScrollAnimation from "react-animate-on-scroll";
const TabbedNavigation = ({ tabButtonData }) => {
  const [activeTab, setActiveTab] = useState(tabButtonData && tabButtonData[0]);

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3} sm={4}>
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
                Unlock Insights, Empower Growth:
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounce">
              <Typography variant="body2">
                Harness the power of data with our analysis section.
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
        <Grid item xs={12} md={9} sm={7}>
          <div className="tab-content">
            <img src={activeTab?.img} alt="images" className="bgx1" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TabbedNavigation;
