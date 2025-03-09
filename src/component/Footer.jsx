import React from "react";
import LogoFooter from "../assets/images/logo-footer.png";
import IconFb from "../assets/images/icon-fb.png";
import IconInsta from "../assets/images/icon-insta.png";
import IconLink from "../assets/images/icon-linkedin.png";
import { Box } from "@mui/material";

const footerNav = [
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "Support",
    url: "/support",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const socialLinks = [
  {
    img: IconFb,
    url: "#",
    alt: "Facebook",
  },
  {
    img: IconInsta,
    url: "#",
    alt: "Instagram",
  },
  {
    img: IconLink,
    url: "#",
    alt: "LinkedIn",
  },
];

export const Footer = () => {
  return (
    <Box className="bg-[#1C1812] text-white py-6">
      <Box className="container">
        <Box className="footer-nav flex justify-between flex-col sm:flex-row">
          {/* Left Navigation */}
          <Box className="left-nav flex items-center flex-col sm:flex-row">
            <Box className="logo-nav-item">
              <img
                src={LogoFooter}
                className="mb-2 sm:mb-0"
                alt="logo-footer"
                height={40}
              />
            </Box>

            <ul className="flex items-center mb-0">
              {footerNav.map((item, index) => (
                <li key={index} className="ml-6">
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </Box>

          {/* Right Navigation - Social Links */}
          <Box className="right-nav">
            <ul className="flex justify-center mt-2 sm:mt-0">
              {socialLinks.map((social, index) => (
                <li key={index} className="ml-2">
                  <a href={social.url}>
                    <img src={social.img} alt={social.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box className="copyright-text text-center text-[12px] text-[#AEADAA] mt-9">
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
};
