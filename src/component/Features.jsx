import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material"; 
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

const Features = ({ features }) => {
  const theme = useTheme();
  const isMobileMUI = useMediaQuery(theme.breakpoints.down("md")); // MUI breakpoint handling
  const [isMobile, setIsMobile] = useState(isMobileMUI);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded accordion

  // Ensure isMobile updates on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767.98);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle accordion expansion
  const handleAccordionChange = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box className="bg-[#F1ECE1] md:py-[80px] py-8 text-black">
      <Box className="container">
        <Typography variant="h4" className="!mb-6 !sm:mb:3 title-medium">
          Featured Options
        </Typography>
        {features.map((feature, index) => (
          <Accordion
            className="accordion-main mb-3 md:!m-0"
            key={index}
            expanded={isMobile ? true : expandedIndex === index} // Keep it open on mobile, else toggle
            onChange={() => handleAccordionChange(index)}
          >
            <AccordionSummary
              className="!pl-0 acc-summary"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>{feature.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="!p-0">
              <Box className="flex border-t-1 card-ac border-[#65625E] items-center relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="min-w-[400px] h-[220px] object-cover acc-image"
                />
                <Box className="p-6 content-acc-item">
                  <Typography variant="h6" className="title-inac !mb-2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="!mb-2">
                    {feature.description}
                  </Typography>
                  <Button variant="outlined" className="mt-2 btn-secondary !mb-2">
                    Learn more
                  </Button>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Features;
