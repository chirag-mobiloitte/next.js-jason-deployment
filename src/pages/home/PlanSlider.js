import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default class PlanSlider extends Component {
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      className: "recomended",
      centerPadding: "90px",
      autoplaySpeed: 2000,
      centerMode: true,
      infinite: true,
      autoplay: true,
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

    const albumList = [
      {
        image: "images/plan_1.png",
      },
      {
        image: "images/plan_1.png",
      },
      {
        image: "images/plan_1.png",
      },
    ];
    return (
      <div className="marqueSlidermainBox1">
        <Slider {...settings} className="albumslickbottomslider">
          {albumList &&
            albumList.map((value, i) => {
              return (
                <Box className="planslider">
                  <img src={value.image} />
                  <Box className="displayStart coreplanningBox">
                    <ScrollAnimation animateIn="bounce">
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", marginRight: "50px" }}
                      >
                        Care Planning
                      </Typography>
                    </ScrollAnimation>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className="viewButton"
                      endIcon={<ArrowOutwardIcon style={{ color: "#fff" }} />}
                    >
                      Ask Now
                    </Button>
                  </Box>
                </Box>
              );
            })}
        </Slider>
      </div>
    );
  }
}
