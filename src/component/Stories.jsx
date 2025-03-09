import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Stories = ({ stories }) => {
  return (
    <Box className="py-[40px] md:py-[80px]">
      <Typography variant="h4" className="!mb-6 font-bold title-medium">
        Member Stories
      </Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
        {stories.map((story, index) => (
          <Card
            key={index}
            className="bg-black text-white card-item items-start flex-col md:flex-row py-8 md:py-0"
          >
            <Typography variant="h6" className="card-title mobile">
              {story.title}
            </Typography>
            <Box className="flex md:flex-row items-center">
              <CardMedia
                className="min-h-[100px] lg:min-h-[200px]  min-w-[100px] max-h-[100px]  lg:min-w-[200px]  lg:max-h-[200px]"
                image={story.image}
                title={story.title}
              />
              <CardContent>
                <Box className="card-content-item">
                  <Typography variant="h6" className="card-title">
                    {story.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="descirption-small !mb-4"
                  >
                    {story.description}
                  </Typography>
                </Box>
                <Button variant="outlined" className="btn-secondary  desktop">
                  Read more
                </Button>
              </CardContent>
            </Box>

            <Button variant="outlined" className="btn-secondary change-btn mobile !mt-4">
              Read more
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Stories;
