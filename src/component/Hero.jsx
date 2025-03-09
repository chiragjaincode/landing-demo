import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Hero = ({ title, description, buttonText, image }) => {
  return (
    <Box className="flex items-center flex-col md:flex-row flex-col-reverse md:flex-row-rew hero-section md:py-[80px]">
      <Box className="left-section">
        <Box className="content">
        <Typography variant="h2" className="title-main !mb-4">
          {title}
        </Typography>
        <Typography variant="body1" className="!mb-4">
          {description}
        </Typography>
        <Button variant="contained" color="primary" className='btn-primary'>
          {buttonText}
        </Button>
        </Box>
      </Box>

      <Box className='right-section'>
      <img
        src={image}
        alt="Hero"
        height={300}
        width={400}
        className="w-full     max-h-[300px] object-cover"
      />
      </Box>


    </Box>
  );
};

export default Hero;
