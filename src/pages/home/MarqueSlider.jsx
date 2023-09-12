import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
export default class MarqueSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderData = [
      {
        imageSrc: "images/Marque/slider_3.jpeg",
        videoSrc: "images/Marque/video.webm",
        title: "Care Planning",
      },
      {
        imageSrc: "images/Marque/slider_3.jpeg",
        title: "Business Operations",
      },
      {
        imageSrc: "images/Marque/slider_3.jpeg",
        videoSrc: "images/Marque/video.webm",
        title: "Nutritions",
      },
      {
        imageSrc: "images/Marque/slider_3.jpeg",
        title: "HR",
      },
      {
        imageSrc: "images/Marque/slider_3.jpeg",
        videoSrc: "images/Marque/video.webm",
        title: "Policies",
      },
      {
        imageSrc: "images/Marque/slider_3.jpeg",
        videoSrc: "images/Marque/video.webm",
        title: "Medications",
      },
    ];
  }

  renderSliderItems() {
    return this.sliderData.map((item, index) => (
      <div key={index}>
        <Box className="sliderBox1">
          <img src={item.imageSrc} alt={`Slider Image ${index}`} />
          {item.videoSrc && (
            <div className="videopositionBox">
              <video
                className="videoBox"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
                muted={true}
                data-loaded="true"
              >
                <source src={item.videoSrc} />
              </video>
            </div>
          )}
        </Box>
        <ScrollAnimation animateIn="zoomIn">
          <Typography variant="h6" textAlign="center" color="#fff">
            {item.title}
          </Typography>
        </ScrollAnimation>
      </div>
    ));
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="marqueSlidermainBox">
        <Slider {...settings}>{this.renderSliderItems()}</Slider>
      </div>
    );
  }
}
