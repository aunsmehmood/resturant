import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Welcome to our restaurant application, where culinary excellence meets
          digital convenience. At My Restaurant, we've reimagined the dining
          experience, putting the power of choice and reservation at your
          fingertips. Whether you're a food enthusiast seeking the latest
          gastronomic trends, a busy professional looking for a quick lunch
          spot, or a couple planning a romantic evening out, our app offers a
          seamless and personalized dining journey. Explore our diverse menu,
          book a table with ease, and indulge in the flavors of our chef-crafted
          dishes, all while enjoying the convenience of a modern dining
          companion. Join us as we redefine how you savor the moments and savor
          the flavors at My Restaurant.
        </p>
        <p>
          At My Restaurant, we're not just about food; we're about
          creating unforgettable memories. Our restaurant application is
          designed to elevate your dining experience from start to finish.
          Discover exclusive promotions, receive personalized recommendations
          based on your preferences, and stay up-to-date with our latest events
          and offerings. Whether you're dining in or ordering takeout, our
          commitment to excellence in service and cuisine ensures that every
          visit is a celebration of taste, quality, and hospitality. Join us on
          this culinary journey, where your satisfaction is our utmost priority,
          and let us be your trusted partner in crafting exceptional dining
          moments.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
