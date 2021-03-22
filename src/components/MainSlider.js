import React, { Component } from "react";
import Slider from "react-slick";
import vid from "../media/video.mp4";
import s1 from "../media/s1.jpg";
import s2 from "../media/s2.jpg";
import s3 from "../media/s3.jpg";
import s4 from "../media/s4.jpg";
import s5 from "../media/s5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
