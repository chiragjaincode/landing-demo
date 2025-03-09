import React from "react";
import Hero from "../component/Hero";
import Stories from "../component/Stories";
import Features from "../component/Features";
import storyImage1 from "../assets/images/story1.jpg";
import storyImage2 from "../assets/images/story2.jpg";
import storyImage3 from "../assets/images/story3.jpg";
import storyImage4 from "../assets/images/story4.jpg";
import FeatureImage from "../assets/images/feature-image.jpg";
import FeatureImage2 from "../assets/images/feature2.jpg";
import FeatureImage3 from "../assets/images/feature3.jpg";

import ImageHero from "../assets/images/hero-img.jpg";
import { Box } from "@mui/material";

export const Landing = () => {
  const heroData = {
    title: (
      <>
        Central Texas <br /> Fly Fishing
      </>
    ),
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.",
    buttonText: "Get started",
    image: ImageHero,
  };

  const storiesData = [
    {
      title: "John's Story",
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
      image: storyImage1,
    },
    {
      title: "The Journey",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: storyImage2,
    },
    {
      title: "Catch Day",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: storyImage3,
    },
    {
      title: "Trout Tales",
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
      image: storyImage4,
    },
  ];

  const featuresData = [
    {
      title: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: FeatureImage,
    },
    {
      title: "Fly Fishing Experiences",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.",
      image: FeatureImage2,
    },
    {
      title: "Gear Up and Catch More",
      description:
        "Details about the best fishing gear and tips to enhance your experience.",
      image: FeatureImage3,
    },
  ];

  return (
    <Box className="landing-page">
      <Box className="hero-section container">
        <Hero {...heroData} />
      </Box>

      <Features features={featuresData} />

      <Box className="stories-section container">
        <Stories stories={storiesData} />
      </Box>
    </Box>
  );
};
